import React from 'react'
import { cn } from '../utils/utils'
import { useChatStore } from '../stores/chat.store'

export default function UsersList({ users, isFriends, onAction }) {

    const { pendingFriends } = useChatStore();

    return (
        <div className='grid gap-x-4 grid-cols-[repeat(auto-fit,140px)]
        overflow-y-auto gap-y-2 justify-center'>
            {
                users.map((user) => (

                    <div className="card bg-gray/50 dark:bg-black glass w-35 shadow-sm rounded-2xl">
                        <figure className="px-5 pt-5">
                            <img
                                src={user.avatar}
                                alt="user image"
                                className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 py-2 gap-1">
                            <h2 className="card-title mt-auto">{user.name}</h2>
                            <div className="card-actions ">
                                <button
                                    onClick={() => { onAction(user) }}
                                    className={cn("text-white", "glow", "border-0", "btn", pendingFriends.includes(user.id) ? "btn-disabled" : "bg-blue")}>
                                    {pendingFriends.includes(user.id) ? "sent" : isFriends ? "Chat" : "Add"}
                                </button>
                            </div>
                        </div>
                    </div>



                ))
            }

        </div>
    )
}
