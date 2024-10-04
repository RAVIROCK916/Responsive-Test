import { useEffect, useState } from "react";

const StopWatch = ({ isRunning, onStop }) => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (time !== 0) {
			setTime(0);
			clearInterval(interval);
			onStop(time);
		}
		return () => clearInterval(interval);
	}, [isRunning, onStop, time]);

	const formatTime = (ms) => {
		const seconds = Math.floor(ms / 1000);
		const milliseconds = Math.floor((ms % 1000) / 10);
		return `${seconds.toString().padStart(2, "0")}.${milliseconds
			.toString()
			.padStart(2, "0")}`;
	};

	return <div className="text-4xl">{formatTime(time)}</div>;
};
export default StopWatch;
