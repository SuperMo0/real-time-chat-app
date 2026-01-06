import React from 'react'
import ChatsList from '../components/ChatsList'
import UserChat from '../components/UserChat'
import { useChatStore } from './../stores/chat.store'
import { cn } from './../utils/utils.js'



export default function Chats() {

    const { selectedFriend } = useChatStore();

    return (
        <div className='md:grid
          md:grid-cols-[1fr_2fr]
          md:gap-2 lg:gap-3
          overflow-hidden h-full
          '>
            <div className={cn("hidden", !selectedFriend && "block", "md:block", "h-full", "overflow-hidden")}>
                <ChatsList />
            </div>
            <div className={cn("hidden", selectedFriend && "block", "md:block", "h-full", "overflow-hidden")}>
                {selectedFriend && <UserChat />}
            </div>

        </div>
    )


}
