import {createSlice} from '@reduxjs/toolkit'



const editSlice = createSlice({
    name:'edit',
    initialState: {
        modalOpen : false
    },
    reducers: {
        openModal: (state) => {
            state.modalOpen = true
        },
        closeModal: (state) => {
            state.modalOpen = false
        }
    }

})






export const {openModal , closeModal} = editSlice.actions


export default editSlice.reducer