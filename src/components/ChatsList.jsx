import React from 'react'
import { MESSAGES, FRIENDS } from '../lib/fake'

export default function ChatsList() {
    return (
        <div className='flex flex-col gap-2'>
            {FRIENDS.map((friend) => (
                Object.hasOwn(MESSAGES, friend.id)
                    ? <div className='flex gap-2 items-center'>
                        <div className="avatar avatar-online">
                            <div className="w-18 rounded-full">
                                <img src={friend.avatar} />
                            </div>
                        </div>
                        <div>
                            <p>{friend.name}</p>
                            <p className='text-base-content/50'>{friend.lastMessage}</p>
                        </div>
                    </div>
                    : null
            ))}
        </div>



    )
}
