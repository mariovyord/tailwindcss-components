import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type TState = {
	toggle: boolean,
}

const Navbar = () => {
	const [state, setState] = useState<TState>({
		toggle: false,
	})

	const toggleHamburger = () => {
		setState((prevState) => ({
			...prevState,
			toggle: !prevState.toggle,
		}))
	}

	return (
		<header className='h-14 bg-lime-700 shadow'>
			<div className='m-auto h-full max-w-5xl'>
				<div className='flex h-full min-w-full justify-between px-3'>
					<div className='h-full text-3xl font-bold text-white'>
						<NavLink to='/' className='flex h-full items-center'>LOGO</NavLink>
					</div>
					<nav>
						<div className='hidden h-full w-full sm:block'>
							<ul className='flex h-full'>
								<li key='1'><NavLink to='/1' className='flex h-full items-center px-5 text-lg text-white hover:bg-lime-800'>Example 1</NavLink></li>
								<li key='2'><NavLink to='/2' className='flex h-full items-center px-5 text-lg text-white hover:bg-lime-800'>Example 2</NavLink></li>
								<li key='3' className='group'>
									<div className='relative flex h-full cursor-pointer items-center px-5 text-lg text-white hover:bg-lime-800'>
										Dropdown <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
									</div>
									<div className='top-14 hidden w-full bg-lime-700 text-lg group-hover:float-right group-hover:block'>
										<li className='w-full text-lg text-white hover:bg-lime-800'><NavLink to='/1' className='block w-full px-5 py-2'>Example 1</NavLink></li>
										<li className='w-full text-lg text-white hover:bg-lime-800'><NavLink to='/2' className='block w-full px-5 py-2'>Example 2</NavLink></li>
									</div>
								</li>
							</ul>
						</div>
						<div onClick={() => toggleHamburger()} className='h-full sm:hidden'>
							<div className='flex h-full w-8 cursor-pointer items-center'>
								<div className={`${state.toggle ? 'flex' : 'flex flex-col'} gap-1`}>
									<div className={`${state.toggle && 'absolute right-3 rotate-45'} h-1 w-8 bg-white transition-all`}></div>
									<div className={`${state.toggle ? '' : 'h-1 w-8'} bg-white transition-all `}></div>
									<div className={`${state.toggle && 'absolute right-3 -rotate-45'} h-1 w-8 bg-white transition-all`}></div>
								</div>
							</div>
							{state.toggle && <ul className={`absolute top-14 left-0 w-screen bg-lime-700 p-5 text-center text-2xl text-white`}>
								<li key='1' className='my-4'><NavLink to='/1' >Example 1</NavLink></li>
								<li key='2' className='my-4'><NavLink to='/2' >Example 2</NavLink></li>
								{/* TODO mobile menu sidebar */}
							</ul>}

						</div>
					</nav>
				</div>
			</div>
		</header >
	)
}

export default Navbar;