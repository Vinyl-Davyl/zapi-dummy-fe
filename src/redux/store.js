import { configureStore } from '@reduxjs/toolkit'

import userReducer from './features/user/userSlice'
import apiReducer from './features/api/apiSlice'
import modalReducer from './features/modal/modalSlice'
import searchReducer from './features/search/searchSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        apis: apiReducer,
        modal: modalReducer,
        search: searchReducer
    }
})