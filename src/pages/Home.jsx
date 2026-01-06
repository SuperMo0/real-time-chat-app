import React from 'react'
import { Outlet } from 'react-router'
import Panel from '../components/Panel'

export default function Home() {


    return (
        <div className="flex items-center justify-center bg-base-200 h-screen">
            <div className='max-w-6xl w-full bg-slate-200 dark:bg-base-300 h-full md:h-[80vh] rounded-2xl px-2 py-3'>
                <div className='flex flex-col h-full md:flex-row md:gap-5'>
                    <div className='mt-auto md:mt-0 order-2 md:order-1'>
                        <Panel></Panel>
                    </div>
                    <div className='order-1 md:order2 border flex-1 h-full'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}
