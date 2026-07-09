import { createSlice } from "@reduxjs/toolkit";

interface ModalCallWindowState {
    isOpen: boolean;
}

const initialState: ModalCallWindowState = {
    isOpen: false
};

const modalCallWindowSlice = createSlice({
    name: "modalCallWindow",
    initialState,
    reducers: {
        openModalCallWindow: (state) => {
            state.isOpen = true;
        },
        closeModalCallWindow: (state) => {
            state.isOpen = false;
        },
        toggleModalCallWindow: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const { openModalCallWindow, closeModalCallWindow, toggleModalCallWindow } =
    modalCallWindowSlice.actions;

export default modalCallWindowSlice.reducer;
