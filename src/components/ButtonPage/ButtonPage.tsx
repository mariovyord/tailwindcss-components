import AnimatedButton from 'library/actions/button/AnimatedButton';
import BasicButton from 'library/actions/button/BasicButton';
import CircleButtonOutlines from 'library/actions/button/circleButton/CircleButtonOutlines';
import CircleButton from 'library/actions/button/circleButton/CircleButton';

const ButtonPage = () => {
    return (
        <div className=''>
            <h1 className='my-6 text-4xl font-black'>Button</h1>
            <div>
                <p>Interactive button activated by a user.</p>
            </div>
            <section>
                <h3 className='mb-4 mt-6 text-2xl font-bold'>Basic Button</h3>
                <div className='flex gap-2'>
                    <BasicButton />
                </div>
            </section>
            <section>
                <h3 className='mb-4 mt-6 text-2xl font-bold'>Animated Button</h3>
                <div className='flex gap-2'>
                    <AnimatedButton />
                </div>
            </section>
            <section>
                <h3 className='mb-4 mt-6 text-2xl font-bold'>Round Button</h3>
                <div className='flex gap-2'>
                    <CircleButton />
                    <CircleButtonOutlines />
                </div>
            </section>
        </div>
    )
}

export default ButtonPage;