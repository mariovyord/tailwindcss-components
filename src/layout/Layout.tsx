import { Outlet } from 'react-router-dom'
import Sidebar from 'components/sidebar/Sidebar'

const Layout = () => {
    return (
        <div className='grid min-h-screen w-full auto-cols-[320px_1fr] gap-4 overflow-hidden text-base-content'>
            {/* Sidebar */}
            <div className='col-start-1 row-start-1 grid max-h-screen w-fit bg-base-darker'>
                <Sidebar />
            </div>
            {/* Main Content */}
            <div className='col-start-2 col-end-13 w-full scroll-pt-20 scroll-smooth'>
                <section>
                    <Outlet />
                </section>
            </div>
        </div>
    )
}

export default Layout