const Button = ({ children, ...props }) => {
	return (
		<button
			className="bg-white text-black px-4 py-2 rounded transition-all hover:bg-neutral-200"
			{...props}
		>
			{children}
		</button>
	);
};
export default Button;
