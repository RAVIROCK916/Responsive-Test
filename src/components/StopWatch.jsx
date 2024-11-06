import { useEffect, useState } from "react";
import formatTime from "../utils/formatTime";

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

	return <div className="text-4xl">{formatTime(time)}</div>;
};
export default StopWatch;
