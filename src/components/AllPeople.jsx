import React from 'react'
import UsersList from './UsersList'
import { useChatStore } from '../stores/chat.store';

export default function AllPeople() {
    const { allPeople } = useChatStore();
    function handleAdd(user) {
        console.log('adding friend');
    }
    return (
        <UsersList users={allPeople} isFriends={false} onAction={handleAdd} ></UsersList>
    )
}
