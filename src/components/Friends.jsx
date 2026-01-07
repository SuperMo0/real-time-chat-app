import React, { useEffect } from 'react'
import UsersList from './UsersList'
import { useChatStore } from '../stores/chat.store'
import { MESSAGES, FRIENDS } from '../lib/fake'


export default function Friends() {
    const { friends, getFriends } = useChatStore();

    useEffect(() => {
        if (friends) return;
        async function fn() {
            await getFriends();
        }
        fn();

    }, [])

    function handleChat(friend) {
        console.log('chat friend');
    }

    return (
        friends && <UsersList users={friends} isFriends={true} onAction={handleChat} ></UsersList>
    )
}
