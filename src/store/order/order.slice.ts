import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IOrder } from "../../lib/interfaces"
import { KEYS } from "../../lib/constants"

export interface IOrderState {
    order: IOrder[]
}

const initialState: IOrderState = {
    order: JSON.parse(localStorage.getItem(KEYS.orderKey) || '[]')
}

const setOrderToLocalStorage = (order: IOrder[]) => {
    return localStorage.setItem(KEYS.orderKey, JSON.stringify(order))
}
const removeOrderAtLocalStorage = () => {
    return localStorage.removeItem(KEYS.orderKey)
}

export const ordrerSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<IOrder>) => {
            const newOrder = {
                ...action.payload,
                id: state.order.length + 1
            };
            state.order.push(newOrder)
            setOrderToLocalStorage(state.order)
        },
        clearOrder: (state) => {
            state.order = []
            removeOrderAtLocalStorage()
        }
    }
})

export const orderActions = ordrerSlice.actions
export const orderReducer = ordrerSlice.reducer