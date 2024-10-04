import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	console.log("App");

	return (
		<main className="space-y-20">
			<Outlet />
			<p>This is the App component.</p>
		</main>
	);
}

export default App;
