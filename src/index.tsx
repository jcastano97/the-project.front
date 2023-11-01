import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./core/components/settings/ErrorPage";
import { AccountPage } from "./core/views/account/AccountPage";
import { HomePage } from "./views/HomePage";
import { LandingPage } from "./views/LandingPage";

const loggedIn = false;

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/account",
		element: <AccountPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/home",
		element: loggedIn ? <HomePage /> : <AccountPage unauthorizedRoute="/home" />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
