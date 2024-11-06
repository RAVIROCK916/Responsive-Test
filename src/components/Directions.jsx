import {
	MoveUp,
	MoveUpLeft,
	MoveUpRight,
	MoveLeft,
	MoveRight,
	MoveDown,
	MoveDownLeft,
	MoveDownRight,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { gameTime, totalRounds } from "../constants";

const Directions = ({ onStart, onEnd, currentRound }) => {
	const topDirections = [
		{ id: 0, icon: MoveUpLeft, key: " " },
		{ id: 1, icon: MoveUp, key: "ArrowUp" },
		{ id: 2, icon: MoveUpRight, key: " " },
	];
	const centerDirections = [
		{ id: 3, icon: MoveLeft, key: "ArrowLeft" },
		{ id: 4, icon: MoveRight, key: "ArrowRight" },
	];
	const bottomDirections = [
		{ id: 5, icon: MoveDownLeft, key: " " },
		{ id: 6, icon: MoveDown, key: "ArrowDown" },
		{ id: 7, icon: MoveDownRight, key: " " },
	];

	const directions = [topDirections, centerDirections, bottomDirections];

	const flatDirections = directions.flat();

	const [activeDirection, setActiveDirection] = useState(null);
	const [isLit, setIsLit] = useState(false);

	const startGame = useCallback(() => {
		let randomIndex = Math.floor(Math.random() * flatDirections.length);

		while (activeDirection === randomIndex) {
			randomIndex = Math.floor(Math.random() * flatDirections.length);
		}

		setActiveDirection(randomIndex);
		setIsLit(true);

		onStart();
	}, [onStart, currentRound]);

	useEffect(() => {
		startGame();
	}, []);

	useEffect(() => {
		if (currentRound === 1) {
			setActiveDirection(null);
			setIsLit(false);
			startGame();
		}
	}, [currentRound]);

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (activeDirection !== null) {
				if (event.key === flatDirections[activeDirection].key) {
					onEnd();
					setActiveDirection(null);
					if (currentRound < totalRounds) {
						setTimeout(startGame, 0);
					}
				}
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, [activeDirection, isLit, startGame, onEnd]);

	return (
		<div className="max-w-fit mx-auto">
			{directions.map((direction, index) => (
				<div key={index} className="flex justify-between">
					{direction.map((Direction, index) => (
						<Direction.icon
							key={index}
							className={`w-40 h-40 ${
								activeDirection === Direction.id && isLit
									? "text-neutral-50"
									: "text-neutral-800"
							}`}
							strokeWidth={1}
						/>
					))}
				</div>
			))}
		</div>
	);
};
export default Directions;
