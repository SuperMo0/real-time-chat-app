import React, { useEffect } from 'react'
import { useChatStore } from './../stores/chat.store'
import UserChatHeader from './UserChatHeader';
import MeBubble from './MeBubble'
import FriendBubble from './FriendBubble'
import ChatInput from './ChatInput';


export default function UserChat() {

    const { getMessages, loading, selectedFriend, messages } = useChatStore();

    useEffect(() => {
        getMessages();
    }, [selectedFriend])

    return (
        <div className='h-full flex flex-col bg-base-100 py-2 pr-2 overflow-hidden'>
            <UserChatHeader />
            <div className='overflow-y-scroll grow basis-0 no-scrollbar'>
                {
                    messages.map((message) => (
                        message.senderId == 'me' ? <MeBubble message={message} />
                            : <FriendBubble message={message} />
                    ))
                }
            </div>
            <div className='mt-auto'>
                <ChatInput />
            </div>
        </div>
    )
}
