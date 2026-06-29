import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // сюда добавим reducers позже
    }
});

// типы
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
