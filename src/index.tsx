import "./index.css";

import { debounce } from "debounce";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { saveState, store } from "./store";

store.subscribe(
	debounce(() => {
		saveState(store.getState());
	}, 800)
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
