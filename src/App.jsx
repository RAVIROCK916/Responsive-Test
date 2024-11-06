import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Play from "./pages/Play.jsx";

function App() {
	return (
		<main className="space-y-20">
			<Router>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/play" element={<Play />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
