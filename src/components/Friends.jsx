import React, { useEffect } from 'react'
import UsersList from './UsersList'
import { useChatStore } from '../stores/chat.store'
import { useNavigate } from 'react-router';

export default function Friends() {

    const { friends, setSelectedChat, chats } = useChatStore();
    let navigate = useNavigate();

    let frienddDataCards = [...friends];
    frienddDataCards.forEach((u) => {
        u.actionTitle = "Chat";
        u.onAction = handleChat;
    })

    function handleChat(friend) {
        let targetChat = chats.find((c) => {
            return (c.users[0].id == friend.id || c.users[1].id == friend.id);
        })
        setSelectedChat(targetChat);
        navigate('/');
    }

    return (
        friends && <UsersList users={frienddDataCards}></UsersList>
    )
}
