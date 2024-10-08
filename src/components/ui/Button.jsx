const Button = ({ children, ...props }) => {
	return (
		<button
			className="bg-white text-black px-4 py-2 rounded outline-none transition-all duration-500 hover:bg-neutral-200"
			{...props}
		>
			{children}
		</button>
	);
};
export default Button;
