import { useState, useEffect, useCallback } from "react";
import {
	MoveUpIcon,
	MoveUpLeft,
	MoveUpRight,
	MoveLeftIcon,
	MoveRightIcon,
	MoveDownIcon,
	MoveDownLeft,
	MoveDownRight,
} from "lucide-react";

const Directions = ({ onStart, onCorrect }) => {
	const directions = [
		{ icon: MoveUpLeft, key: " ", position: "top-left" },
		{ icon: MoveUpIcon, key: "ArrowUp", position: "top-center" },
		{ icon: MoveUpRight, key: " ", position: "top-right" },
		{ icon: MoveLeftIcon, key: "ArrowLeft", position: "middle-left" },
		{ icon: MoveRightIcon, key: "ArrowRight", position: "middle-right" },
		{ icon: MoveDownLeft, key: " ", position: "bottom-left" },
		{ icon: MoveDownIcon, key: "ArrowDown", position: "bottom-center" },
		{ icon: MoveDownRight, key: " ", position: "bottom-right" },
	];

	const [activeDirection, setActiveDirection] = useState(null);
	const [isLit, setIsLit] = useState(false);
	const [isTimerRunning, setIsTimerRunning] = useState(false);

	const startGame = useCallback(() => {
		const randomIndex = Math.floor(Math.random() * directions.length);
		setActiveDirection(randomIndex);
		setIsLit(true);
		setIsTimerRunning(false);

		setTimeout(() => {
			setIsLit(false);
			setIsTimerRunning(true);
			onStart();
		}, 5000);
	}, [onStart]);

	useEffect(() => {
		startGame();
	}, [startGame]);

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (activeDirection !== null && isTimerRunning) {
				if (event.key === directions[activeDirection].key) {
					onCorrect();
					setActiveDirection(null);
					setIsTimerRunning(false);
					setTimeout(startGame, 2000);
				}
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, [activeDirection, isTimerRunning, onCorrect, startGame]);

	return (
		<div className="relative w-80 h-80 mx-auto">
			{directions.map(({ icon: Direction, position }, index) => (
				<div
					key={Direction.displayName}
					className={`absolute ${getPositionClass(position)}`}
				>
					<Direction
						className={`w-16 h-16 ${
							activeDirection === index && isLit
								? "text-red-500"
								: "text-neutral-600"
						}`}
					/>
				</div>
			))}
		</div>
	);
};

function getPositionClass(position) {
	switch (position) {
		case "top-left":
			return "top-0 left-0";
		case "top-center":
			return "top-0 left-1/2 transform -translate-x-1/2";
		case "top-right":
			return "top-0 right-0";
		case "middle-left":
			return "top-1/2 left-0 transform -translate-y-1/2";
		case "middle-right":
			return "top-1/2 right-0 transform -translate-y-1/2";
		case "bottom-left":
			return "bottom-0 left-0";
		case "bottom-center":
			return "bottom-0 left-1/2 transform -translate-x-1/2";
		case "bottom-right":
			return "bottom-0 right-0";
		default:
			return "";
	}
}
export default Directions;
