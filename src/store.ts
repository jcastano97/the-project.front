import { configureStore, StateFromReducersMapObject } from "@reduxjs/toolkit";

import accountReducer from "./core/store/reducers/accountReducer";
import appSettingReducer from "./core/store/reducers/appSettingReducer";
import { logger } from "./core/utils/logger";

const reducer = {
	appSetting: appSettingReducer,
	account: accountReducer,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export function loadState(): RootState | undefined {
	try {
		logger.info("loadState");
		const serializedState = localStorage.getItem("redux");
		logger.info("serializedState: ", serializedState);
		if (!serializedState) {
			return undefined;
		}

		return JSON.parse(serializedState) as RootState;
	} catch (e) {
		logger.error("error serializedState: ", e);

		return undefined;
	}
}

export function saveState(state: RootState): void {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("redux", serializedState);
	} catch (e) {
		logger.error("saveState error", e);
	}
}

export const store = configureStore({
	reducer,
	devTools: true,
	preloadedState: loadState(),
});

export type AppDispatch = typeof store.dispatch;
