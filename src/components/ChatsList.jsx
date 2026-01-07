import { React, useEffect } from 'react'
import { MESSAGES, FRIENDS } from '../lib/fake'
import { useChatStore } from './../stores/chat.store'
import { getFriend } from '../utils/utils';
import { useAuthStore } from '../stores/auth.store';

export default function ChatsList() {

    const { getChats, chats, setSelectedChat } = useChatStore();
    const { authUser } = useAuthStore();

    useEffect(() => {
        async function fn() {
            await getChats();
        }
        fn();
    }, [])

    if (!chats) return <p>loading...</p>

    return (
        <div className='bg-base-300 rounded-2xl px-2 py-1.5 
        flex flex-col gap-2 overflow-x-hidden overflow-y-auto
         no-scrollbar max-h-full h-full'>
            {chats.map((chat) => {
                let friend = getFriend(authUser.id, chat);
                return (<div key={chat.id} onClick={() => { setSelectedChat(chat) }}
                    className='flex gap-2 items-center overflow-hidden'>
                    <div className="avatar avatar-online">
                        <div className="w-15 rounded-full">
                            <img src={friend.avatar} />
                        </div>
                    </div>
                    <div>
                        <p>{friend.name}</p>
                        <p className='text-base-content/50 whitespace-nowrap'>{chat.lastMessage.content}</p>
                    </div>
                </div>)

            })}
        </div>



    )
}
