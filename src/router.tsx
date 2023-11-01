import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./core/components/settings/ErrorPage";
import { AccountPage } from "./core/views/account/AccountPage";
import { HomePage } from "./views/HomePage";
import { LandingPage } from "./views/LandingPage";

export const router = createBrowserRouter([
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
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
]);
