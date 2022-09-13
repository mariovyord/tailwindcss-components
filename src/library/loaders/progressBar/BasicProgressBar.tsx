import React from 'react'

// progress should a number from 1 to 100
const BasicProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
	const progressStyle = { width: `${progress}%` };
	return (
		<div className='h-3 w-full overflow-hidden rounded-lg bg-slate-300'>
			<div style={progressStyle} className='h-full bg-blue-600' ></div>
		</div>
	)
}

export default BasicProgressBar