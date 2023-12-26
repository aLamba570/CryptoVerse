import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'X-RapidAPI-Key': '60ca9ce9c6msh18eb0df64639fe4p193665jsnd999bc5ce225',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: cryptoApiNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;