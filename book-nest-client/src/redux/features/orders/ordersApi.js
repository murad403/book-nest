import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/orders`,
        credentials: "include"
    }),
    tagTypes: ["orders"],
    endpoints: (builder) =>({
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: '/',
                method: "POST",
                body: newOrder
            }),
            invalidatesTags: ["orders"]
        }),
        getOrdersByEmail: builder.query({
            query: (email) =>({
                url: `/email/${email}`
            }),
            providesTags: ["orders"]
        })
    })
})

export const {useCreateOrderMutation, useGetOrdersByEmailQuery} = ordersApi;
export default ordersApi;