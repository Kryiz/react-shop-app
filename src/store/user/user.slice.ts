import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IUser } from '../../lib/interfaces';
import { KEYS } from '../../lib/constants';
import { USER_ROLE } from '../../lib/constants';

export interface ICartState {
    cart: ICartItem[]
    user: IUser
}

const initialState: ICartState = {
    cart: JSON.parse(localStorage.getItem(KEYS.cartKey) || '[]'),
    user: {
        name: '',
        phone: '',
        email: '',
        address: '',
        role: USER_ROLE.Guest
    }
}

const setCartToLocalStorage = (cart: ICartItem[]) => {
    return localStorage.setItem(KEYS.cartKey, JSON.stringify(cart))
}
const clearCartAtLocalStorage = () => {
    return localStorage.removeItem(KEYS.cartKey)
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemsToCart: (state, action: PayloadAction<ICartItem[]>) => {
            state.cart = action.payload
        },
        addItemToCart: (state, action: PayloadAction<ICartItem>) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id)
            if (cartItem) {
                cartItem.count++
            } else {
                state.cart.push({ ...action.payload, count: 1 })
                setCartToLocalStorage(state.cart)
            }
        },
        removeItemFromCart: (state, action: PayloadAction<ICartItem['id']>) => {
            state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload)
            setCartToLocalStorage(state.cart)
        },
        clearCart: (state) => {
            state.cart = []
            clearCartAtLocalStorage()
        },
        incrementQuantity: (state, action: PayloadAction<ICartItem['id']>) => {
            const cartItem = state.cart.find(item => item.id === action.payload)
            if (!cartItem) return
            cartItem.count++;
            setCartToLocalStorage(state.cart)
        },
        decrementQuantity: (state, action: PayloadAction<{ scenario: string, id: ICartItem['id'] }>) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id)
            if (!cartItem) return
            if (action.payload.scenario === 'remove' && cartItem.count === 1) {
                state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id)
                setCartToLocalStorage(state.cart)
                return
            } else if (action.payload.scenario === 'min' && cartItem.count === 1) {
                return
            } else {
                cartItem.count--;
            }
            setCartToLocalStorage(state.cart)
        },
        addUser: (state, action: PayloadAction<IUser>) => {
            state.user = { ...action.payload, role: USER_ROLE.Client }
        },
        loginAsUser: (state) => {
            state.user.role = USER_ROLE.Client
        },
        loginAsAdmin: (state) => {
            state.user.role = USER_ROLE.Admin
        },
        logout: (state) => {
            state.user = initialState.user
        },
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;