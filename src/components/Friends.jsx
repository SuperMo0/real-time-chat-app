import React from 'react'
import UsersList from './UsersList'
import { useChatStore } from '../stores/chat.store'
import { MESSAGES, FRIENDS } from '../lib/fake'


export default function Friends() {
    const { friends } = useChatStore();

    function handleChat(friend) {
        console.log('chat friend');
    }
    return (
        <UsersList users={FRIENDS} isFriends={true} onAction={handleChat} ></UsersList>
    )
}
