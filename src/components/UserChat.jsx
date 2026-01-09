import React, { useEffect } from 'react'
import { useChatStore } from './../stores/chat.store'
import UserChatHeader from './UserChatHeader';
import MeBubble from './MeBubble'
import FriendBubble from './FriendBubble'
import ChatInput from './ChatInput';
import { useAuthStore } from '../stores/auth.store.js';
import { ClipLoader } from 'react-spinners';


export default function UserChat() {

    const { getMessages, isLoading, selectedChat, messages, markMessageAsRead } = useChatStore();
    const { authUser } = useAuthStore();

    useEffect(() => {
        getMessages();
    }, [selectedChat])

    useEffect(() => {

        if (!selectedChat || !messages) return;

        for (let i = messages.length - 1; i >= 0; i--) {
            let message = messages[i];
            if (message.senderId == authUser.id || message.isRead) break;
            markMessageAsRead(message);
            break;
        }

    }, [messages])

    if (!messages) return <div className='grid place-content-center h-full'>
        <ClipLoader color='blue' loading={true} />
    </div>


    return (
        <div className='h-full flex flex-col bg-base-300 py-2 px-2 overflow-hidden rounded-2xl'>
            <UserChatHeader />
            <div className='overflow-y-scroll grow basis-0 no-scrollbar'>
                {
                    messages.map((message) => (
                        message.senderId == authUser.id ? <MeBubble key={message.id} message={message} />
                            : <FriendBubble key={message.id} message={message} />
                    ))
                }
            </div>
            <div className='mt-auto'>
                <ChatInput />
            </div>
        </div>
    )
}
