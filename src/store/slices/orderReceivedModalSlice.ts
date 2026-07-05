import { createSlice } from "@reduxjs/toolkit";

interface OrderReceivedModalState {
    isOpen: boolean;
}

const initialState: OrderReceivedModalState = {
    isOpen: false
};

const orderReceivedModalSlice = createSlice({
    name: "orderReceivedModal",
    initialState,
    reducers: {
        openOrderReceivedModal: (state) => {
            state.isOpen = true;
        },
        closeOrderReceivedModal: (state) => {
            state.isOpen = false;
        },
        toggleOrderReceivedModal: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const { openOrderReceivedModal, closeOrderReceivedModal, toggleOrderReceivedModal } =
    orderReceivedModalSlice.actions;

export default orderReceivedModalSlice.reducer;
