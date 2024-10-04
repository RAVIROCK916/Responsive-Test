import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Play from "./pages/Play.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="play" element={<Play />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
