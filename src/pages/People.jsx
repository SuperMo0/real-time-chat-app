import React from 'react'
import SearchInput from '../components/SearchInput'
import { cn } from '../utils/utils'
import { useState } from 'react'
import AllPeople from '../components/AllPeople'
import Friends from '../components/Friends'

export default function People() {

    const [tab, setTab] = useState('friends')
    return (
        <div className='flex flex-col gap-0.5 h-full bg-base-100'>
            <div className='flex flex-col border-b/20 border-b border-b-black/20'>
                <SearchInput />
                <div role="tablist" className="tabs tabs-border text-blue">
                    <a role="tab" onClick={() => { setTab("friends") }} className={cn("tab", "hover:text-blue", tab == "friends" && "tab-active")}>Friends</a>
                    <a role="tab" onClick={() => { setTab("all people") }} className={cn("tab", "hover:text-blue", tab == "all people" && "tab-active")}>All People</a>
                    <a role="tab" onClick={() => { setTab("near me") }} className={cn("tab", "hover:text-blue", tab == "near me" && "tab-active")}>near me</a>
                </div>
            </div>
            {tab == "friends" && <Friends />}
            {tab == "all people" && <AllPeople />}
        </div>

    )
}
