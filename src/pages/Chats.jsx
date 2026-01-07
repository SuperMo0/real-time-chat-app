import React, { useEffect } from 'react'
import ChatsList from '../components/ChatsList'
import UserChat from '../components/UserChat'
import { useChatStore } from './../stores/chat.store'
import { cn } from './../utils/utils.js'
import { useAuthStore } from '../stores/auth.store.jsx'



export default function Chats() {

    const { selectedChat } = useChatStore();

    const { authUser } = useAuthStore();

    return (
        <div className='md:grid
          md:grid-cols-[4fr_6fr]
          md:gap-4
          overflow-hidden h-full
          '>
            <div className={cn("hidden", !selectedChat && "block", "md:block", "h-full", "overflow-hidden")}>
                <ChatsList />
            </div>
            <div className={cn("hidden", selectedChat && "block", "md:block", "h-full", "overflow-hidden")}>
                {selectedChat && <UserChat />}
            </div>

        </div>
    )


}
