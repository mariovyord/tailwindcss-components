import React from 'react';

const BasicButton = () => {
    return (
        <button
            type='button'
            className='flex h-12 w-full items-center justify-center rounded-lg bg-lime-700 px-6 font-semibold text-white transition-all hover:bg-lime-800 hover:shadow active:scale-95 disabled:pointer-events-none disabled:opacity-60 sm:w-auto'
        >Button</button>
    )
}

export default BasicButton;