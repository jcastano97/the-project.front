import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AccountInterface } from "../../types/account/AccountInterface";
import { SignInRequestInterface } from "../../types/account/SignInRequestInterface";
import { logger } from "../../utils/logger";

// Define a type for the slice state
interface AccountState {
	isLogged: boolean;
	token: string;
	data?: AccountInterface;
}

// Define the initial state using that type
const initialState: AccountState = {
	isLogged: false,
	token: "",
};

export const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		signInAccount: (state, action: PayloadAction<SignInRequestInterface>) => {
			logger.debug("signIn account: ", action.payload.email);
			// use user and password to sign in
			state.token = "token";
			state.isLogged = true;
			state.data = {
				email: action.payload.email,
			};
		},
		logoutAccount: (state) => {
			logger.debug("logout account");
			state.token = "";
			state.isLogged = false;
			state.data = undefined;
		},
	},
});

export const { signInAccount, logoutAccount } = accountSlice.actions;

export default accountSlice.reducer;
