import { configureStore } from "@reduxjs/toolkit";

import orderReducer from "./slices/orderSlice";

import orderReceivedModalReducer from "./slices/orderReceivedModalSlice";
import modalCallWindow from "./slices/ModalCallWindow";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        orderReceivedModal: orderReceivedModalReducer,
        modalCallWindow: modalCallWindow
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
