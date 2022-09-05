import { useState } from 'react';

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<>
			{visible && <button
				type='button'
				onClick={scrollToTop}
				className='fixed right-4 bottom-4 flex h-12 w-12 justify-center rounded-full bg-lime-700 text-4xl text-white shadow'
			>
				↑
				<span className="sr-only">Back to top</span>
			</button>}
		</>
	);
}

export default ScrollToTopButton;