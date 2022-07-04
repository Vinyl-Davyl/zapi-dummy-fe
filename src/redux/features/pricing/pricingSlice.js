import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = process.env.REACT_APP_BASE_URL

const initialState = {
    pricing: {},
    isLoading: true
}

export const getPricing = createAsyncThunk('pricing/basic', (apiId) => {
    return fetch(`${url}/${apiId}/pricing/price`)
    .then(res => res.json())
    .catch(error => console.log(error))
})

const pricingSlice = createSlice({
    name: 'basicPricing',
    initialState,
    reducers: {},
    extraReducers: {
        [getPricing.pending]: state => {
            state.isLoading = true
        },
        [getPricing.fulfilled]: (state, action) => {
            state.isLoading = false
            state.apis = action.payload
        },
        [getPricing.rejected]: state => {
            state.isLoading = false
        }
    }
})

export default pricingSlice.reducer