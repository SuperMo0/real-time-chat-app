import React from 'react'
import { panelElements } from '../lib/constants'
import { NavLink } from 'react-router'


export default function Panel() {
    return (
        <div className='px-1 py-1 flex gap-2 justify-around md:flex-col md:gap-4 pt-2 md:pt-0'>
            {panelElements.map(({ Component, title, path }) => (
                <NavLink className="group aria-[current=page]:*:bg-base-200" to={path}>
                    <div className='glow flex flex-col items-center gap-1 px-4 rounded-2xl bg-base-100/10'>
                        <Component className='text-5xl text-gray group-aria-[current=page]:text-blue' />
                        <p className='text-gray-500 md:text-xl group-aria-[current=page]:text-blue'>{title}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}
