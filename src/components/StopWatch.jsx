import React, { useState, useEffect } from "react";
import Button from "./ui/Button";

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		}
		return () => clearInterval(interval);
	}, [isRunning]);

	const startStop = () => {
		setIsRunning(!isRunning);
	};

	const reset = () => {
		setTime(0);
		setIsRunning(false);
	};

	const formatTime = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		const milliseconds = Math.floor((ms % 1000) / 10);
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
	};

	return (
		<div className="flex flex-col items-center">
			<div className="text-4xl w-20 mb-4 font-time tabular-nums">
				{formatTime(time)}
			</div>
			<div className="space-x-2">
				<Button onClick={startStop}>{isRunning ? "Stop" : "Start"}</Button>
				<Button onClick={reset}>Reset</Button>
			</div>
		</div>
	);
};

export default Stopwatch;
