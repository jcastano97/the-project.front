import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@components/settings/ErrorPage";
import { AxiosClient } from "@utils/AxiosClient";
import { AUTH_API_URL } from "@utils/consts";
import { AccountPage } from "@views/account/AccountPage";
import { store } from "./store";
import { HomePage } from "@views/HomePage";
import { LandingPage } from "@views/LandingPage";
import { DigitalSignPage } from "@views/digitalSign/digitalSignPage";

AxiosClient.init(AUTH_API_URL(), store.getState().account.token ?? "");

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
	{
		path: "/digitalSign",
		element: <DigitalSignPage />,
		errorElement: <ErrorPage />,
	},
]);
