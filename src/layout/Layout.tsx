import React from 'react'
import AnimatedButton from '../library/actions/button/AnimatedButton'
import BasicButton from '../library/actions/button/BasicButton'
import CircleButtonX from '../library/actions/button/circleButton/CircleButtonX'
import CircleButtonOutlinesX from '../library/actions/button/circleButton/CircleButtonOutlinesX'
import BasicProgressBar from '../library/loaders/progressBar/BasicProgressBar'
import Spinner from '../library/loaders/spinner/Spinner'
import BasicNavbar from 'library/navigation/navbar/BasicNavbar'
import { Link } from 'react-router-dom'
import Sidebar from 'components/sidebar/Sidebar'

const Layout = () => {
    return (
        <div className='grid w-full auto-cols-[320px_1fr] gap-4 overflow-hidden'>
            {/* Sidebar */}
            <div className='col-start-1 row-start-1 grid max-h-screen w-fit bg-base-darker'>
                <Sidebar />
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