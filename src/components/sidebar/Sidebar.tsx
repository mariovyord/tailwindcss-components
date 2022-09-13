import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import SidebarLink from './SidebarLink/SidebarLink'
import SidebarSection from './SidebarSection/SidebarSection'

enum Actions {
    TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU',
}

interface IAction {
    type: Actions;
}

type TState = {
    visibleMobileMenu: boolean,
}
const initialState = {
    visibleMobileMenu: false,
}

const reducer = (state: TState, action: IAction) => {
    switch (action.type) {
        case Actions.TOGGLE_MOBILE_MENU:
            return {
                ...state,
                visibleMobileMenu: !state.visibleMobileMenu,
            };
        default:
            return state;
    }
}

const Sidebar = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleHamburger = () => {
        dispatch({ type: Actions.TOGGLE_MOBILE_MENU })
    }

    return (
        <aside className='w-full overflow-y-auto lg:h-full lg:w-80'>
            <section className='sticky top-0 z-50 flex justify-between bg-base-darker p-4 lg:block'>
                <div className='w-fit lg:w-full'>
                    <Link to='/' className='relative flex w-full items-center justify-start overflow-hidden rounded-lg transition-all after:absolute after:top-0 after:h-full after:w-0 after:-translate-x-full after:rounded-lg after:bg-base-darkest after:transition-all hover:shadow hover:after:w-full hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60'>
                        <div className='z-10 py-2 px-4 text-4xl font-bold'>
                            <span className=' text-primary'>Tailr</span><span className=' text-slate-600'>CSS</span>
                        </div>
                    </Link>
                </div>
                <div className='w-fit lg:hidden'>
                    <div onClick={() => toggleHamburger()} className='flex h-full w-8 cursor-pointer items-center'>
                        <div className={`${state.visibleMobileMenu ? 'flex' : 'flex flex-col'} gap-1`}>
                            <div className={`${state.visibleMobileMenu && 'absolute right-3 rotate-45'} h-1 w-8 bg-primary transition-all`}></div>
                            <div className={`${state.visibleMobileMenu ? '' : 'h-1 w-8'} bg-primary transition-all `}></div>
                            <div className={`${state.visibleMobileMenu && 'absolute right-3 -rotate-45'} h-1 w-8 bg-primary transition-all `}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${state.visibleMobileMenu ? 'absolute w-full bg-base-darker' : 'hidden'} lg:contents `}>
                <SidebarSection title='Actions'>
                    <SidebarLink text='Button' link='/components/button' />
                    <SidebarLink text='Dropdown' link='/components/dropdown' />
                    <SidebarLink text='Modal' link='/components/modal' />
                </SidebarSection>
                <SidebarSection title='Actions'>
                    <SidebarLink text='Button' link='/components/button' />
                    <SidebarLink text='Dropdown' link='/components/dropdown' />
                    <SidebarLink text='Modal' link='/components/modal' />
                </SidebarSection>
                <SidebarSection title='Actions'>
                    <SidebarLink text='Button' link='/components/button' />
                    <SidebarLink text='Dropdown' link='/components/dropdown' />
                    <SidebarLink text='Modal' link='/components/modal' />
                </SidebarSection>
                <SidebarSection title='Actions'>
                    <SidebarLink text='Button' link='/components/button' />
                    <SidebarLink text='Dropdown' link='/components/dropdown' />
                    <SidebarLink text='Modal' link='/components/modal' />
                </SidebarSection>
                <SidebarSection title='Actions'>
                    <SidebarLink text='Button' link='/components/button' />
                    <SidebarLink text='Dropdown' link='/components/dropdown' />
                    <SidebarLink text='Modal' link='/components/modal' />
                </SidebarSection>
                <SidebarSection title='Actions'>
                    <SidebarLink text='Button' link='/components/button' />
                    <SidebarLink text='Dropdown' link='/components/dropdown' />
                    <SidebarLink text='Modal' link='/components/modal' />
                </SidebarSection>
            </section>
        </aside>
    )
}

export default Sidebar