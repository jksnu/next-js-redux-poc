import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ArticleInf } from "@/interfaces/news/NewsInf";

interface thunkArgsInf {
  page: number, 
  limit: number
}

export const fetchNews = createAsyncThunk("news/fetch", async(args: thunkArgsInf, thunkAPI) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API_URL}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&pageSize=${args.limit}&page=${args.page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const responseData = await response.json();
  return responseData;
});

const initialState = {
  value: <ArticleInf[]>[]
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.value = action.payload;
    })

  }
});

export default newsSlice.reducer;
export const selectNews = (state: RootState) => state.newsReducer.value;
