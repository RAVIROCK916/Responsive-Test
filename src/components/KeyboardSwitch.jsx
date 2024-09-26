const KeyboardSwitch = ({ label = 'A', ...props }) => {
	return (
		<div className='relative inline-block'>
			<div className='absolute inset-0 bg-neutral-400 rounded-lg transform translate-y-1'></div>
			<div
				className='relative inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg text-gray-800 font-sans text-xl font-bold cursor-pointer select-none transition-all duration-100 ease-in-out hover:bg-neutral-100 active:transform active:translate-y-1'
				{...props}
			>
				{label}
			</div>
		</div>
	);
};

export default KeyboardSwitch;
