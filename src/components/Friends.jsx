import React, { useEffect } from 'react'
import UsersList from './UsersList'
import { useChatStore } from '../stores/chat.store'

export default function Friends() {

    const { friends } = useChatStore();

    let frienddDataCards = [...friends];
    frienddDataCards.forEach((u) => {
        u.actionTitle = "Chat";
        u.onAction = handleChat;
    })

    function handleChat(friend) {
        console.log('chat friend');
    }

    return (
        friends && <UsersList users={frienddDataCards}></UsersList>
    )
}
