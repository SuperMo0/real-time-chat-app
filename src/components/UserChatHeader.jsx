import React from 'react'
import { useChatStore } from './../stores/chat.store'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";



export default function UserChatHeader() {

    const { selectedFriend, setSelectedFriend } = useChatStore();
    return (
        <div className='flex gap-2 items-center pb-2 border-b border-b-base-content/20 '>
            <MdKeyboardArrowLeft onClick={() => { setSelectedFriend(null) }} className='text-6xl text-gray' />
            <div className="avatar avatar-online">
                <div className="w-18 rounded-full">
                    <img src={selectedFriend.avatar} />
                </div>
            </div>
            <div>
                <p className='font-mono  text-xl'>{selectedFriend.name}</p>
                <p className='text-success'>online</p>
            </div>
            <PiDotsThreeOutlineVerticalFill className='ml-auto mr-3 text-3xl text-gray' />
        </div>
    )
}
