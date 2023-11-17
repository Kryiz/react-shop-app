import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IServerResponse } from '../../lib/interfaces';
import { APP_URL } from '../../lib/routes';

const url = process.env.NODE_ENV === 'production' ? APP_URL.site : APP_URL.dev

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        getProducts: builder.query<IServerResponse<IProduct>, void>({
            query: () => '/data.json',
        })
    })
})
export const { useLazyGetProductsQuery } = productApi