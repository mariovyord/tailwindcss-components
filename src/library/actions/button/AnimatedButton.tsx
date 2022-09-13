const AnimatedButton = () => {
    return (
        <button
            type='button'
            className='relative flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-primary px-6 font-semibold text-white transition-all after:absolute after:top-0 after:h-full after:w-full after:-translate-x-full after:rounded-lg after:bg-primary-focus after:transition-all hover:shadow hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60 sm:w-auto'
        ><span className="z-10">Button</span></button>
    )
}

export default AnimatedButton;