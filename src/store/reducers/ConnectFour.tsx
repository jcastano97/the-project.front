import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountInterface } from "@interfaces/account/AccountInterface";
import { logger } from "@utils/logger";
import { ConnectFourInterface } from "@interfaces/connectFour/ConnectFour.interface";

export interface ConnectFourState {
    isLogged: boolean;
    token: string;
    data?: AccountInterface;
}

const initialState: ConnectFourState = {
    isLogged: false,
    token: "",
};

export const connectFourSlice = createSlice({
    name: "connectFour",
    initialState,
    reducers: {
        fetch: (state, action: PayloadAction<ConnectFourInterface>) => {
            logger.debug("fetch: ", action.payload.name);
        },
        create: (state) => {
            logger.debug("create: ");
        },
    },
});

export const { fetch, create } = connectFourSlice.actions;

export default connectFourSlice.reducer;
