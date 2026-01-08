import React, { useEffect, useMemo, useState } from 'react'
import UsersList from './UsersList'
import { useChatStore } from '../stores/chat.store';
import { ClipLoader } from "react-spinners";

export default function AllPeople() {

    const { users, getUsers, friends, requestsToUser, requestsByUser } = useChatStore();

    useEffect(() => {
        if (users) return;
        getUsers();
    }, [])

    const usersDataCards = useMemo(() => {

        if (!users) return

        let filteredUsers = users.filter((u) => {
            let isNotFriend = !friends.find((f) => f.id == u.id);
            return isNotFriend;
        })

        const pendingAccept = {};
        requestsToUser.forEach((r) => {
            pendingAccept[r.senderId] = true;
        })

        const pendingSent = {};
        requestsByUser.forEach((r) => {
            pendingSent[r.receiverId] = true;
        })

        let usersDataCards = filteredUsers.map((u) => {

            if (pendingAccept[u.id]) {
                u.action = handleAccept;
                u.actionTitle = "Accept"
            }
            else if (pendingSent[u.id]) {
                u.isActionDisabled = true;
                u.action = () => { };
                u.actionTitle = "Added"
            }
            else {
                u.action = handleAdd;
                u.actionTitle = "Add";
            }
            return u;
        })

        return usersDataCards;


    }, [users])



    function handleAdd(user) {
        console.log('sending request to user');
    }

    function handleAccept(user) {
        console.log('accepting user request');
    }

    if (!users) return <div className='grid place-content-center h-full'>
        <ClipLoader color='blue' loading={true} />
    </div>

    return (
        <UsersList users={usersDataCards}></UsersList>
    )
}
