import { configureStore } from "@reduxjs/toolkit";

import orderReducer from "./slices/orderSlice";

import orderReceivedModalReducer from "./slices/orderReceivedModalSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        orderReceivedModal: orderReceivedModalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
