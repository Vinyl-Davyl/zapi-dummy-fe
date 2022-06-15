import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = process.env.REACT_APP_CATEGORIES_URL

const initialState = {
    apis: [],
    isLoading: true
}

export const getApis = createAsyncThunk('apis/getApis', () => {
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error))
})

const apiSlice = createSlice({
    name: 'apis',
    initialState,
    reducers: {},
    extraReducers: {
        [getApis.pending]: state => {
            state.isLoading = true
        },
        [getApis.fulfilled]: (state, action) => {
            state.isLoading = false
            state.apis = action.payload
        },
        [getApis.rejected]: state => {
            state.isLoading = false
        }
    }
})

export default apiSlice.reducer