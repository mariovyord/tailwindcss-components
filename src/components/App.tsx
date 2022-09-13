import { Route, Routes } from 'react-router-dom'
import Layout from 'layout/Layout'
import ButtonPage from './ButtonPage/ButtonPage'
import HomePage from './HomePage/HomePage'

const App = () => {
    return <div className='h-screen'>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/components">
                    <Route path="button" element={<ButtonPage />} />
                </Route>
            </Route>
        </Routes>
    </div >
}

export default App
