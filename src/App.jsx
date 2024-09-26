import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<main className="space-y-20">
			<h1 className="text-5xl">Responsive Test</h1>
			<Outlet />
		</main>
	);
}

export default App;
