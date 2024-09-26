import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
	createBrowserRouter as Router,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import Start from "./pages/Start.jsx";
import Play from "./pages/Play.jsx";

const router = Router(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Start />} />
			<Route path="/play" element={<Play />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
