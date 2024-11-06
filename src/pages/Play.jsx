import { useState, useCallback, useMemo } from "react";
import Directions from "../components/Directions";
import StopWatch from "../components/StopWatch";

import { totalRounds } from "../constants";

const Play = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [reactionTimes, setReactionTimes] = useState([]);
	const [currentRound, setCurrentRound] = useState(1);

	const startGame = () => {
		setIsRunning(true);
	};

	const endGame = (time) => {
		setIsRunning(false);

		setReactionTimes((prevTimes) => [...prevTimes, time || null]);
		setCurrentRound((prevRound) => prevRound + 1);
	};

	const endGame1 = () => {
		setIsRunning(false);
	};

	const resetGame = () => {
		setReactionTimes([]);
		setCurrentRound(1);
		setIsRunning(false); // Reset stopwatch first
		setTimeout(() => {
			startGame(); // Start after a brief delay
		}, 100);
	};

	const averageReactionTime = useMemo(() => {
		const validTimes = reactionTimes.filter((time) => time !== null);
		return validTimes.length > 0
			? Math.round(
					validTimes.reduce((sum, time) => sum + time, 0) / validTimes.length
			  )
			: 0;
	}, [reactionTimes]);

	return (
		<div className="space-y-20 flex flex-col justify-center items-center mt-10">
			<StopWatch isRunning={isRunning} onStop={endGame} key={currentRound} />
			<Directions
				onStart={startGame}
				onEnd={endGame1}
				currentRound={currentRound}
			/>
			<div className="text-left w-60 absolute right-10 top-0 space-y-5">
				{reactionTimes.length > 0 && <h2 className="text-4xl">Times</h2>}
				<div>
					{reactionTimes.map((time, index) => (
						<div key={index} className="text-xl">
							{index + 1}. {time} ms
						</div>
					))}
				</div>
				{currentRound > totalRounds && (
					<>
						<div className="text-3xl mt-4">Avg: {averageReactionTime} ms</div>
						<button
							onClick={resetGame}
							className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
						>
							Play Again
						</button>
					</>
				)}
			</div>
		</div>
	);
};
export default Play;
