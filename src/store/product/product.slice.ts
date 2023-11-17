import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IServerResponse } from "../../lib/interfaces";

interface IProducts {
    pizzas: IProduct[]
    pizzasFiltered: IProduct[]
    pizzasIngredients: string[]
    pizzasMinPrice: number
    pizzasMaxPrice: number
    sushi: IProduct[]
    sushiFiltered: IProduct[]
    sushiIngredients: string[]
    sushiMinPrice: number
    sushiMaxPrice: number
    searchResults: IProduct[]
}

const initialState: IProducts = {
    pizzas: [],
    pizzasFiltered: [],
    pizzasIngredients: [],
    pizzasMinPrice: 0,
    pizzasMaxPrice: 0,
    sushi: [],
    sushiFiltered: [],
    sushiIngredients: [],
    sushiMinPrice: 0,
    sushiMaxPrice: 0,
    searchResults: []
}

const setAllIngredients = (products: IProduct[]): string[] => {
    const allIngredients = new Set(products.flatMap(product => product.ingredients.split(', ')).sort());
    return [...allIngredients]
}

const filterProducts = (data: IProduct[] | undefined, sort: string | null): IProduct[] => {
    if (!data || !Array.isArray(data)) {
        return [];
    }
    if (!sort) {
        return data;
    }
    const sorted = [...data];
    if (sort === 'cheap') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sort === 'expensive') {
        sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
}

const filterProductsByPrice = (data: IProduct[], min: number, max: number) => {
    if (!data || !Array.isArray(data)) {
        return [];
    }
    return data.filter(product => product.price >= min && product.price <= max);
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsToStore: (state, action: PayloadAction<IServerResponse<IProduct>>) => {
            const { pizzas, sushi } = action.payload;
            const allPizzas = pizzas.flat();
            const allSushi = sushi.flat();
            const pizzasIngredients = setAllIngredients(allPizzas);
            const sushiIngredients = setAllIngredients(allSushi);
            const pizzasMinPrice = Math.min(...allPizzas.map(product => product.price));
            const pizzasMaxPrice = Math.max(...allPizzas.map(product => product.price));
            const sushiMinPrice = Math.min(...allSushi.map(product => product.price));
            const sushiMaxPrice = Math.max(...allSushi.map(product => product.price));
            return {
                ...state,
                pizzas: allPizzas,
                sushi: allSushi,
                pizzasIngredients,
                sushiIngredients,
                pizzasMinPrice,
                pizzasMaxPrice,
                sushiMinPrice,
                sushiMaxPrice,
            };
        },
        filterProductsByPriceAsc: (state, action: PayloadAction<{ productName: string, sort: string }>) => {
            if (action.payload.productName === 'pizzas') {
                state.pizzasFiltered = filterProducts(state.pizzas, action.payload.sort)
            } else if (action.payload.productName === 'sushi') {
                state.sushiFiltered = filterProducts(state.sushi, action.payload.sort)
            }
        },
        filterProductsByRangePrice: (state, action: PayloadAction<{ productName: string, valueFrom: number, valueTo: number }>) => {
            if (action.payload.productName === 'pizzas') {
                state.pizzasFiltered = filterProductsByPrice(state.pizzas, action.payload.valueFrom, action.payload.valueTo)
            } else if (action.payload.productName === 'sushi') {
                state.sushiFiltered = filterProductsByPrice(state.sushi, action.payload.valueFrom, action.payload.valueTo)
            }
        },
        filterProductsByIngedients: (state, action: PayloadAction<{ productName: string, ingredient: string }>) => {
            const searchTerm = action.payload.ingredient.toLowerCase()
            if (action.payload.productName === 'pizzas') {
                state.pizzasFiltered = state.pizzas
                state.pizzasFiltered = [...state.pizzas]
                    .filter(product => product.ingredients.toLowerCase().includes(searchTerm))
            } else if (action.payload.productName === 'sushi') {
                state.sushiFiltered = state.sushi
                state.sushiFiltered = [...state.sushi]
                    .filter(product => product.ingredients.toLowerCase().includes(searchTerm))
            }
        },
        resetFilterProducts: (state, action: PayloadAction<string>) => {
            if (action.payload === 'pizzas') {
                state.pizzasFiltered = state.pizzas
            } else if (action.payload === 'sushi') {
                state.sushiFiltered = state.sushi
            }
        },
        resetFilterIngredients: (state, action: PayloadAction<string>) => {
            if (action.payload === 'pizzas') {
                state.pizzasFiltered = state.pizzas
            } else if (action.payload === 'sushi') {
                state.sushiFiltered = state.sushi
            }
        },
        searchProducts: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase()
            state.searchResults = [...state.pizzas, ...state.sushi]
                .filter(product => product.name.toLowerCase().includes(searchTerm))
        },
        searchByIngedients: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase()
            state.searchResults = [
                ...state.pizzas.filter(product => product.name.toLowerCase().includes(searchTerm)),
                ...state.sushi.filter(product => product.name.toLowerCase().includes(searchTerm))
            ]
        }
    }
})
export const productActions = ProductSlice.actions
export const productReducer = ProductSlice.reducer