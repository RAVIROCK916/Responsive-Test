import { useState, useCallback, useMemo } from "react";
import Directions from "../components/Directions";
import StopWatch from "../components/StopWatch";

const Play = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [reactionTimes, setReactionTimes] = useState([]);
	const [currentRound, setCurrentRound] = useState(1);
	const totalRounds = 2;

	const startGame = useCallback(() => {
		setIsRunning(true);
	}, []);

	const endGame = useCallback((time) => {
		setIsRunning(false);

		setReactionTimes((prevTimes) => [...prevTimes, time || null]);
		setCurrentRound((prevRound) => prevRound + 1);
	}, []);

	const endGame1 = (setIsLit) => {
		setIsRunning(false);
		setIsLit(false);
	};

	const resetGame = useCallback(() => {
		setReactionTimes([]);
		setCurrentRound(0);
	}, []);

	const averageReactionTime = useMemo(() => {
		const validTimes = reactionTimes.filter((time) => time !== null);
		return validTimes.length > 0
			? Math.round(
					validTimes.reduce((sum, time) => sum + time, 0) / validTimes.length
			  )
			: 0;
	}, [reactionTimes]);

	return (
		<div>
			<StopWatch isRunning={isRunning} onStop={endGame} key={currentRound} />
			<Directions
				onStart={startGame}
				onEnd={endGame1}
				currentRound={currentRound}
			/>
			<div className="text-left mt-4 w-60 absolute right-0 top-0">
				{reactionTimes.map((time, index) => (
					<div key={index} className="text-xl">
						Round {index + 1}: {time} ms
					</div>
				))}
				{currentRound > totalRounds && (
					<>
						<div className="text-2xl mt-4">
							Average: {averageReactionTime} ms
						</div>
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
