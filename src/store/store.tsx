import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./product/product.api";
import { productReducer } from "./product/product.slice";
import { cartReducer } from "./user/user.slice";
import { orderReducer } from "./order/order.slice";
// import { orderApi } from "./order/order.api";

export const store = configureStore({
    reducer: {
        productApi: productApi.reducer,
        storage: productReducer,
        carts: cartReducer,
        orders: orderReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productApi.middleware,
        ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;