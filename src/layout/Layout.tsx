import { Outlet } from 'react-router-dom'
import Sidebar from 'components/sidebar/Sidebar'

const Layout = () => {
    return (
        <div className='grid w-full auto-cols-fr overflow-hidden text-base-content lg:min-h-screen lg:auto-cols-[320px_1fr]'>
            {/* Sidebar */}
            <div className='z-50 h-fit max-h-screen  bg-base-darker lg:col-start-1 lg:h-full lg:w-fit'>
                <Sidebar />
            </div>
            {/* Main Content */}
            <div className='h-full w-full scroll-pt-20 scroll-smooth lg:col-start-2'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout