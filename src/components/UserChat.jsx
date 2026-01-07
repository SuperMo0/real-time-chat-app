import React, { useEffect } from 'react'
import { useChatStore } from './../stores/chat.store'
import UserChatHeader from './UserChatHeader';
import MeBubble from './MeBubble'
import FriendBubble from './FriendBubble'
import ChatInput from './ChatInput';
import { useAuthStore } from '../stores/auth.store';


export default function UserChat() {

    const { getMessages, loading, selectedChat, messages } = useChatStore();
    const { authUser } = useAuthStore();

    useEffect(() => {
        getMessages();
    }, [selectedChat])

    if (!messages) return <p>Loading....</p>

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
