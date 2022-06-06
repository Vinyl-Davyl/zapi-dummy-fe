import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        fullname: '',
        email: '',
        token: '',
        image: '',
        isVerified: false,
        apis: [],
        followers: [],
        following: [],
        organizations: []
    },
    isLoggedIn: true,
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