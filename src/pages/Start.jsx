import Button from "../components/ui/Button";

const Start = () => {
	return (
		<div className="space-y-8">
			<div className="text-left space-y-3">
				<h2 className="text-2xl">Welcome to the Game!</h2>
				<ol className="list-decimal list-inside">
					<li>Click the "Play" button to start the game.</li>
					<li>Wait until the light glows on one of the directions.</li>
					<li>Then you can click on the below switches</li>
					<li>
						Press respective arrows keys for Up, Down, Left and Right
						directions.
					</li>
					<li>Press Spacebar for the diagonal directions</li>
					<li>Try to achieve the highest score possible!</li>
				</ol>
			</div>

			<div>
				<a href="/play">
					<Button style={{ width: "80px" }}>Play</Button>
				</a>
			</div>
		</div>
	);
};
export default Start;
