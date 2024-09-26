import { useState, useCallback } from "react";
import Stopwatch from "../components/StopWatch";
import Directions from "../components/Directions";
import KeyboardSwitch from "../components/KeyboardSwitch";

const Play = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [reactionTime, setReactionTime] = useState(null);

	const startGame = useCallback(() => {
		setIsRunning(true);
		setReactionTime(null);
	}, []);

	const endGame = useCallback((time) => {
		setIsRunning(false);
		setReactionTime(time);
	}, []);

	return (
		<div className="space-y-4">
			<Stopwatch isRunning={isRunning} onStop={endGame} />
			<Directions onStart={startGame} onCorrect={() => setIsRunning(false)} />
			<div className="mt-4">
				{reactionTime && (
					<div className="text-2xl">Reaction time: {reactionTime} ms</div>
				)}
			</div>
		</div>
	);
};
export default Play;
