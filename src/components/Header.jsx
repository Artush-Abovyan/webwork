import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon1.png'



export function Header() {
    return (
        <div className=' h-16 w-auto'>
            <div>
                <div>

                    <div className=' ml-96 absolute mt-4 text-2xl '>
                        <img className=' relative top-7 right-9'
                            src={Icon}
                            alt='Icon web WORK'
                        />
                        <span className='  mt-4 font-serif'>Web
                            <span className=' font-bold'>Work</span>
                        </span>
                    </div>
                </div>
                <div className=' h-5'></div>

                <div>
                    <nav className=' absolute justify-center text-center right-96  space-x-6'>
                        <NavLink >Home</NavLink>
                        <NavLink >Features</NavLink>
                        <NavLink >Time Tracking</NavLink>
                        <NavLink >Price</NavLink>
                        <NavLink >Download</NavLink>
                        <NavLink >Log in</NavLink>
                        <NavLink className=' border-2 border-black rounded-full pt-2 pb-2 pl-8 pr-8'>Get Started</NavLink>

                    </nav>
                </div>




            </div>
        </div>
    )
}
