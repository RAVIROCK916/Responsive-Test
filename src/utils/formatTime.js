const formatTime = (ms) => {
	const seconds = Math.floor(ms / 1000);
	const milliseconds = Math.floor((ms % 1000) / 10);
	return `${seconds.toString().padStart(2, "0")}.${milliseconds
		.toString()
		.padStart(2, "0")}`;
};

export default formatTime;
