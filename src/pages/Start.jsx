import Button from "../components/ui/Button";

const Start = () => {
	return (
		<main className="space-y-20">
			<div className="flex flex-col justify-between space-y-20">
				<h1 className="text-8xl">Responsive Test</h1>
				<div className="text-left space-y-3">
					<h2 className="text-3xl">Welcome to the Game!</h2>
					<ol className="list-decimal list-inside">
						<li>Click the "Play" button to start the game.</li>
						<li>Wait until the light glows on one of the directions.</li>
						<li>
							Press respective arrows keys for Up, Down, Left and Right
							directions.
						</li>
						<li>Press Spacebar for the diagonal directions</li>
						<li>Then you can check your reaction time.</li>
						<li>All the Best!</li>
					</ol>
				</div>

				<div>
					<a href="/play">
						<Button style={{ width: "80px" }}>Play</Button>
					</a>
				</div>
			</div>
		</main>
	);
};
export default Start;
