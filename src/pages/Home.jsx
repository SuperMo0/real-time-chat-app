import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Panel from '../components/Panel'
import { useChatStore } from '../stores/chat.store';

export default function Home() {

    const { connectSocket } = useChatStore();

    useEffect(() => {
        let socket = connectSocket()
        return () => socket.disconnect();
    }, [])

    return (
        <div className="flex items-center justify-center h-screen bg-slate-200 ">
            <div className='max-w-7xl w-full bg-slate-300 glass dark:bg-base-300 h-full md:h-[80vh] rounded-2xl px-2 py-3'>
                <div className='flex flex-col h-full md:flex-row md:gap-3'>
                    <div className='mt-auto md:mt-0 order-2 md:order-1'>
                        <Panel></Panel>
                    </div>
                    <div className='order-1 md:order2 flex-1 h-full'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}
