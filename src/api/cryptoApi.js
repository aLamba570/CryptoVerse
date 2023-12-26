import { Axios } from "axios";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '60ca9ce9c6msh18eb0df64639fe4p193665jsnd999bc5ce225',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints : (builder) =>({
        getCryptos:builder.query({
            query : () => createRequest('./coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;