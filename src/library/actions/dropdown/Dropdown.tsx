import { NavLink } from "react-router-dom";

const Dropdown = () => {
    return (
        <div>
            <div className='relative flex h-full cursor-pointer items-center px-5 text-lg text-white hover:bg-lime-800'>
                Dropdown <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
            <div className='top-14 hidden w-full bg-lime-700 text-lg group-hover:float-right group-hover:block'>
                <li className='w-full text-lg text-white hover:bg-lime-800'><NavLink to='/1' className='block w-full px-5 py-2'>Example 1</NavLink></li>
                <li className='w-full text-lg text-white hover:bg-lime-800'><NavLink to='/2' className='block w-full px-5 py-2'>Example 2</NavLink></li>
            </div>
        </div>
    )
}

export default Dropdown;