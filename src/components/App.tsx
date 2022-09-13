import { Route, Routes } from 'react-router-dom'
import Layout from 'layout/Layout'

const App = () => {
    return <div className='h-screen'>
        <Routes>
            <Route path='/' element={<Layout />}>
            </Route>
        </Routes>
    </div >
}

export default App
