import Button from "../components/ui/Button";

const Ready = () => {
	return (
		<div>
			<p>Watch out for the direction in which the light</p>
			<p>
				Press the respect arrow keys for the directions up, down, left and right
			</p>
			<p>Press the spacebar for the diagonals</p>
			<Button>
				<a href="/play">Start</a>
			</Button>
		</div>
	);
};
export default Ready;
