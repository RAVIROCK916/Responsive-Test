import React, { useState, useEffect } from "react";
import Button from "./ui/Button";

const Stopwatch = ({ isRunning, onStop }) => {
	const [time, setTime] = useState(0);
	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!isRunning && time !== 0) {
			clearInterval(interval);
			onStop(time);
		}
		return () => clearInterval(interval);
	}, [isRunning, onStop, time]);

	const formatTime = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		const milliseconds = Math.floor((ms % 1000) / 10);
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
	};

	return (
		<div className="flex flex-col items-end">
			<div className="text-4xl w-28 mb-4 font-time tabular-nums">
				{formatTime(time)}
			</div>
		</div>
	);
};

export default Stopwatch;
