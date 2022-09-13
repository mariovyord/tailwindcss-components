import React from 'react'

const HomePage = () => {
    return (
        <div className='h-full p-4'>
            <div>
                <h1 className='text-[20vw] font-black sm:text-9xl'><span className=' text-primary'>Tailr</span><span className='text-slate-600'>CSS</span></h1>
                <h3 className='text-xl font-bold'>Small collection TailwindCSS 3 / React 18 components</h3>
            </div>
            <div className='py-6'>
                <h3 className='text-2xl italic'>Copy &gt; Paste &gt; Customize &gt; Enjoy!</h3>
            </div>
        </div>
    )
}

export default HomePage