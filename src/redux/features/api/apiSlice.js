import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    apis: [],
    isLoading: true
}

const apiSlice = createSlice({
    name: 'apis',
    initialState,
    reducers: {}
})

export const { getSingleApi } = apiSlice.actions
export default apiSlice.reducer