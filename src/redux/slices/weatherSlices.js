import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, {rejectWithValue, getState, dispatch}) =>{
        try {
            const response  = await axios.get(
                "http://api.openweathermap.org/data/2.5/weather?q="+payload+"&units=metric&appid=cbcbb20da95701b228a3b7bc3296fc76"
                );
                console.log("DATA FETCH : ",response.data)
                return response.data;
        }
        catch (error) {
           if(!error?.response) {
            throw error;
           }
           return rejectWithValue(error?.response?.response);
        }
    }
    )

    const weatherSlice = createSlice({
        name: "weather",
        initialState: {},
        extraReducers: builder => {
            builder.addCase(fetchWeatherAction.pending, (state, action) =>{
                state.loading = true;
            });
            builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
                state.weather = action?.payload;
                state.loading = false;
                state.error = undefined;
            });
            builder.addCase(fetchWeatherAction.rejected, (state, action) => {
                state.loading = false;
                state.weather = undefined;
                state.action = action?.payload;
            });
    }
});
export default weatherSlice.reducer;
