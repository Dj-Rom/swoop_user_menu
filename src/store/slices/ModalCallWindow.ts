import { createSlice } from "@reduxjs/toolkit";

interface ModalCallWindowState {
    isOpen: boolean;
    isPayment: boolean;
}

const initialState: ModalCallWindowState = {
    isOpen: false,
    isPayment: false
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
        },
        openModalPaymentWindow: (state) => {
            state.isOpen = false;
            state.isPayment = true;
        },
        closeModalPaymentWindow: (state) => {
            state.isPayment = false;
        },
        toggleModalPaymentWindow: (state) => {
            state.isPayment = !state.isOpen;
        },
        onConsultation: () => {
            alert("Please wait!!!");
        },
        onEdit: (state) => {
            state.isOpen = false;
        },
        toggleIsPayment: (state) => {
            state.isPayment = !state.isPayment;
        }
    }
});

export const {
    openModalCallWindow,
    closeModalCallWindow,
    toggleModalCallWindow,
    onConsultation,
    onEdit,
    toggleIsPayment,
    closeModalPaymentWindow,
    openModalPaymentWindow,
    toggleModalPaymentWindow
} = modalCallWindowSlice.actions;

export default modalCallWindowSlice.reducer;
