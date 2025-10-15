import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://book-nest-server-sepia.vercel.app/api/books",
    credentials: "include",
    prepareHeaders: (headers) =>{
        const token = localStorage.getItem("token");
        if(token){
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
})

const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery,
    tagTypes: ["books"],
    endpoints: (builder) =>({
        allBooks: builder.query({
            query: () => '/get-books',
            providesTags: ["books"]
        }),
        getBookById: builder.query({
            query: (id) => `/get-book/${id}`,
            providesTags: (result, error, id) => [{type: "books", id}]
        }),
        addBook: builder.mutation({
            query: (newBook) =>({
                url: '/create-book',
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["books"]
        }),
        updateBook: builder.mutation({
            query: ({id, ...rest}) =>({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    "content-type": "application/json"
                }
            }),
            invalidatesTags: ["books"]
        }),
        deleteBook: builder.mutation({
            query: (id) =>({
                url: `/delete-book/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["books"]
        })
    })
})

export const {useAllBooksQuery, useGetBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation} = booksApi;
export default booksApi;
