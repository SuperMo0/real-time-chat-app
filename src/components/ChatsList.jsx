import { React, useEffect, useMemo } from 'react'
import { useChatStore } from './../stores/chat.store'
import { getFriend } from '../utils/utils';
import { useAuthStore } from '../stores/auth.store.js';
import { cn } from '../utils/utils';

export default function ChatsList() {

    const { chats, setSelectedChat, onlineUsers } = useChatStore();
    const { authUser } = useAuthStore();


    let shouldShowChats = useMemo(() => {

        let result = chats.filter((c) => c.lastMessage)

        result.sort((a, b) => {
            let lastMessageA = new Date(a?.lastMessage?.timestamp);
            let lastMessageB = new Date(b?.lastMessage?.timestamp);
            return lastMessageB - lastMessageA;
        })

        return result;
    }, [chats])

    return (
        <div className='bg-base-300 rounded-2xl px-2 py-1.5 
        flex flex-col gap-2 overflow-x-hidden overflow-y-auto
         no-scrollbar max-h-full h-full'>
            {shouldShowChats.map((chat) => {
                let friend = getFriend(authUser.id, chat);
                const lastMessage = chat.lastMessage;
                let shouldShowBlueDot = lastMessage.senderId != authUser.id && !lastMessage.isRead
                if (!chat.lastMessage) return;
                return (<div key={chat.id} onClick={() => { setSelectedChat(chat) }}
                    className='flex gap-2 items-center overflow-hidden'>
                    <div className={cn('avatar', onlineUsers.includes(friend.id) ? 'avatar-online' : 'avatar-offline')}>
                        <div className="w-15 rounded-full">
                            <img src={friend.avatar} />
                        </div>
                    </div>
                    <div>
                        <p>{friend.name}</p>
                        <p className='text-base-content/50 whitespace-nowrap'>{chat.lastMessage.content}</p>
                    </div>
                    {shouldShowBlueDot && <div className='w-8 h-8 rounded-full bg-blue ml-auto'></div>}
                </div>)

            })}
        </div>



    )
}
