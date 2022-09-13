import React from 'react'
import { Link } from 'react-router-dom'
import SidebarLink from './SidebarLink/SidebarLink'
import SidebarSection from './SidebarSection/SidebarSection'

const Sidebar = () => {
    return (
        <aside className='h-full w-80 overflow-y-scroll'>
            <section className='sticky top-0 z-50 bg-base-darker p-4'>
                <Link to='/' className='relative flex w-full items-center justify-start overflow-hidden rounded-lg transition-all after:absolute after:top-0 after:h-full after:w-0 after:-translate-x-full after:rounded-lg after:bg-base-darkest after:transition-all hover:shadow hover:after:w-full hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60'>
                    <div className='z-10 py-2 px-4 text-4xl font-bold'>
                        <span className=' text-primary'>Tailr</span><span className=' text-slate-600'>CSS</span>
                    </div>
                </Link>
            </section>
            <SidebarSection title='Actions'>
                <SidebarLink text='Button' link='/components/button' />
                <SidebarLink text='Dropdown' link='/components/dropdown' />
                <SidebarLink text='Modal' link='/components/modal' />
            </SidebarSection>
        </aside>
    )
}

export default Sidebar