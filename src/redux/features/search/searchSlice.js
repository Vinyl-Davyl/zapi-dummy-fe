import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSearchModalOpen: false
}

const searchSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openSearchModal: state => {
            state.isSearchModalOpen = true
        },
        closeSearchModal: state => {
            state.isSearchModalOpen = false
        }
    }
})

export const { openSearchModal, closeSearchModal } = searchSlice.actions
export default searchSlice.reducer