import React from 'react'
import ChatsList from '../components/ChatsList'
import UserChat from '../components/UserChat'


export default function Chats() {
    return (
        <div className='md:grid md:grid-cols-[1fr_2fr]'>
            <ChatsList />
            <div className='hidden md:block'>
                <UserChat />
            </div>
        </div>
    )
}
