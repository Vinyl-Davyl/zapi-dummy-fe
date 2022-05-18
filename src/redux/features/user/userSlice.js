import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        username: '',
        email: '',
        token: '',
        image: '',
        isVerified: false,
        apis: [],
        followers: [],
        following: [],
        organizations: []
    },
    isLoggedIn: false,
    isLoading: false
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.isLoggedIn = true
        },
        logout: state => {
            state.isLoggedIn = false
        },
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer