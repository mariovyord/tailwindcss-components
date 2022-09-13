import React from 'react'
import AnimatedButton from '../library/actions/button/AnimatedButton'
import BasicButton from '../library/actions/button/BasicButton'
import CircleButtonX from '../library/actions/button/circleButton/CircleButtonX'
import CircleButtonOutlinesX from '../library/actions/button/circleButton/CircleButtonOutlinesX'
import BasicProgressBar from '../library/loaders/progressBar/BasicProgressBar'
import Spinner from '../library/loaders/spinner/Spinner'
import BasicNavbar from 'library/navigation/navbar/BasicNavbar'
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='grid w-full auto-cols-[320px_1fr] gap-4 overflow-hidden'>
            {/* Sidebar */}
            <div className='col-start-1 row-start-1 grid max-h-screen w-fit bg-base-darker'>
                <aside className='h-full w-80 overflow-y-scroll'>
                    <section className='sticky top-0 z-50 bg-base-darker p-4'>
                        <Link to='/' className='relative flex w-full items-center justify-start overflow-hidden rounded-lg transition-all after:absolute after:top-0 after:h-full after:w-0 after:-translate-x-full after:rounded-lg after:bg-base-darkest after:transition-all hover:shadow hover:after:w-full hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60'>
                            <div className='z-10 py-2 px-4 text-4xl font-bold'>
                                <span className=' text-primary'>Tailr</span><span className=' text-slate-600'>CSS</span>
                            </div>
                        </Link>
                    </section>
                    <section className=''>
                        <div className='px-4'>
                            <h2 className='py-2 px-4 text-slate-500'>Actions</h2>
                            <ul>
                                <Link to='/components/button' className='relative flex w-full items-center justify-start overflow-hidden rounded-lg transition-all after:absolute after:top-0 after:h-full after:w-0 after:-translate-x-full after:rounded-lg after:bg-base-darkest after:transition-all hover:shadow hover:after:w-full hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60'>
                                    <div className='z-10 py-2 px-4'>
                                        Button
                                    </div>
                                </Link>
                                <Link to='/components/button' className='relative flex w-full items-center justify-start overflow-hidden rounded-lg transition-all after:absolute after:top-0 after:h-full after:w-0 after:-translate-x-full after:rounded-lg after:bg-base-darkest after:transition-all hover:shadow hover:after:w-full hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60'>
                                    <div className='z-10 py-2 px-4'>
                                        Dropdown
                                    </div>
                                </Link>
                                <Link to='/components/modal' className='relative flex w-full items-center justify-start overflow-hidden rounded-lg transition-all after:absolute after:top-0 after:h-full after:w-0 after:-translate-x-full after:rounded-lg after:bg-base-darkest after:transition-all hover:shadow hover:after:w-full hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60'>
                                    <div className='z-10 py-2 px-4'>
                                        Modal
                                    </div>
                                </Link>
                            </ul>
                        </div>
                    </section>
                </aside>
            </div>
            {/* Main Content */}
            <div className='col-start-2 col-end-13 w-full scroll-pt-20 scroll-smooth'>
                <BasicNavbar />
                <section>
                    <div>
                        <h2></h2>
                        <BasicButton />
                    </div>
                    <div>
                        <AnimatedButton />
                    </div>
                    <div>
                        <CircleButtonX />
                    </div>
                    <div>
                        <CircleButtonOutlinesX />
                    </div>
                    <div>
                        <BasicProgressBar progress={50} />
                    </div>
                    <div>
                        <Spinner />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Layout