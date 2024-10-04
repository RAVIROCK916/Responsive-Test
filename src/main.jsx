import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
	BrowserRouter as Router,
	RouterProvider,
	Route,
	Routes,
} from "react-router-dom";
import Start from "./pages/Start.jsx";
import Play from "./pages/Play.jsx";

// const router = Router(
// 	createRoutesFromElements(
// 		<Route path="/" element={<App />}>
// 			<Route index element={<Start />} />
// 			<Route path="/play" element={<Play />} />
// 		</Route>
// 	)
// );

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Start />} />
					<Route path="play" element={<Play />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
