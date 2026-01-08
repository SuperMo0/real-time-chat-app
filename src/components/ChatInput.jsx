import React, { useState } from 'react'
import { IoMdImage } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { useChatStore } from '../stores/chat.store';



export default function ChatInput() {

    const [text, setText] = useState();
    const [image, setImage] = useState();
    const { sendMessage } = useChatStore();

    async function handleSendMessage(e) {
        e.preventDefault();

        let isTextEmpty = text.trim() === "";

        if (isTextEmpty) return;

        try {
            await sendMessage(text);

            setText("");

            setImage(null);
        } catch (error) {


        }
    }

    return (
        <form onSubmit={handleSendMessage}>
            <div className='px-1 py-3 bg-slate-300 dark:bg-base-300 rounded-3xl'>
                <textarea value={text} onChange={(e) => { setText(e.target.value) }} className="
            textarea textarea-ghost w-full resize-none
            focus:outline-0
            bg-transparent"
                    placeholder="type a message"></textarea>
                <div className='flex gap-1.5'>
                    <IoMdImage className='text-gray text-2xl hover:text-blue' />
                    <MdEmojiEmotions className='text-gray text-2xl hover:text-blue' />
                    <button className='btn bg-blue  border-0 text-white ml-auto mr-2'>Send</button>
                </div>
            </div>
        </form>
    )
}
