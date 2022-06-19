import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    isLoggedIn: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload
            state.isLoggedIn = true
        },
        logout: state => {
            state.user = initialState.user
            state.isLoggedIn = false
        },
        signup: (state, { payload }) => {
            state.user = payload
            state.isLoggedIn = true
        },
    }
})

export const { login, logout, signup } = userSlice.actions
export default userSlice.reducer