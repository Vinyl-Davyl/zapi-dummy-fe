import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        name: '',
        email: '',
        token: '',
        image: '',
        isVerified: false,
        apis: [],
        followers: [],
        following: [],
        organizations: [],
        location: {},
        time: '',
        deviceName: {},
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
            state.user = initialState.user
            state.isLoggedIn = false
        },
        signup: (state, { payload }) => {
            state.user = payload
            state.isLoggedIn = false
        },
    }
})

export const { login, logout, signup } = userSlice.actions
export default userSlice.reducer