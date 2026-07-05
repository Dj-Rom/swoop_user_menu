import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { OrderItem, OrderState } from "../../types/interfaces";

const STORAGE_KEY = "order";
const FIVE_HOURS = 5 * 60 * 60 * 1000;

/* -------------------- LOCAL STORAGE -------------------- */

const emptyState = (): OrderState => ({
    cafeId: null,
    tableNumber: null,
    items: [],
    loading: false,
    error: null
});

const loadState = (): OrderState => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return emptyState();

        const parsed = JSON.parse(raw);

        if (Date.now() - parsed.savedAt > FIVE_HOURS) {
            localStorage.removeItem(STORAGE_KEY);
            return emptyState();
        }

        return {
            ...parsed.order,
            loading: false,
            error: null
        };
    } catch {
        return emptyState();
    }
};

const saveState = (state: OrderState) => {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                savedAt: Date.now(),
                order: {
                    cafeId: state.cafeId,
                    tableNumber: state.tableNumber,
                    items: state.items
                }
            })
        );
    } catch {}
};

const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
};

/* -------------------- INIT STATE -------------------- */

const initialState: OrderState = loadState();

/* -------------------- THUNK -------------------- */

export const submitOrder = createAsyncThunk(
    "order/submitOrder",
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const order = state.order;

        if (!order.cafeId || !order.tableNumber) {
            return rejectWithValue("Missing cafeId or tableNumber");
        }

        try {
            const res = await fetch(
                `https://123.222.12.22:44/${order.cafeId}/${order.tableNumber}/order`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        cafeId: order.cafeId,
                        tableNumber: order.tableNumber,
                        items: order.items
                    })
                }
            );

            if (!res.ok) throw new Error("Order failed");

            return await res.json();
        } catch (e) {
            return rejectWithValue(e instanceof Error ? e.message : "Unknown error");
        }
    }
);

/* -------------------- SLICE -------------------- */

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderInfo(state, action: PayloadAction<{ cafeId: string; tableNumber: number }>) {
            state.cafeId = action.payload.cafeId;
            state.tableNumber = action.payload.tableNumber;

            saveState(state);
        },

        addToOrder(state, action: PayloadAction<OrderItem>) {
            const existing = state.items.find((i) => i.id === action.payload.id);

            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            saveState(state);
        },

        removeFromOrder(state, action: PayloadAction<string>) {
            state.items = state.items.filter((i) => i.id !== action.payload);

            saveState(state);
        },

        incrementItemQty(state, action: PayloadAction<string>) {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) item.quantity += 1;

            saveState(state);
        },

        decrementItemQty(state, action: PayloadAction<string>) {
            const item = state.items.find((i) => i.id === action.payload);
            if (!item) return;

            if (item.quantity <= 1) {
                state.items = state.items.filter((i) => i.id !== action.payload);
            } else {
                item.quantity -= 1;
            }

            saveState(state);
        },

        clearOrder(state) {
            state.cafeId = null;
            state.tableNumber = null;
            state.items = [];

            clearStorage();
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(submitOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitOrder.fulfilled, (state) => {
                state.loading = false;
                state.items = [];
                state.cafeId = null;
                state.tableNumber = null;

                clearStorage();
            })
            .addCase(submitOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

/* -------------------- EXPORTS -------------------- */

export const {
    setOrderInfo,
    addToOrder,
    removeFromOrder,
    incrementItemQty,
    decrementItemQty,
    clearOrder
} = orderSlice.actions;

/* -------------------- SELECTORS -------------------- */

export const selectTotalPrice = (state: RootState) =>
    state.order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const selectOrderQuantity = (state: RootState) =>
    state.order.items.reduce((acc, item) => acc + item.quantity, 0);

export const selectItemTotal = (id: string) => (state: RootState) => {
    const item = state.order.items.find((i) => i.id === id);
    return item ? item.price * item.quantity : 0;
};

export default orderSlice.reducer;
