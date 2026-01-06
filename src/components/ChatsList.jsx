import React from 'react'
import { MESSAGES, FRIENDS } from '../lib/fake'
import { useChatStore } from './../stores/chat.store'

export default function ChatsList() {

    const { selectedFriend, setSelectedFriend } = useChatStore();
    return (
        <div className='bg-base-100 rounded-2xl px-2 py-1.5 
        flex flex-col gap-2 overflow-x-hidden overflow-y-auto
         no-scrollbar max-h-full'>
            {FRIENDS.map((friend) => (
                Object.hasOwn(MESSAGES, friend.id)
                    ? <div onClick={() => { setSelectedFriend(friend) }}
                        className='flex gap-2 items-center'>
                        <div className="avatar avatar-online">
                            <div className="w-15 rounded-full">
                                <img src={friend.avatar} />
                            </div>
                        </div>
                        <div>
                            <p>{friend.name}</p>
                            <p className='text-base-content/50 whitespace-nowrap overflow-hidden max-w-[18ch]'>{friend.lastMessage}</p>
                        </div>
                    </div>
                    : null
            ))}
        </div>



    )
}
