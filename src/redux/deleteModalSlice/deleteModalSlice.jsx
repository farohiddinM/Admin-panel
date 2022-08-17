import {createSlice} from '@reduxjs/toolkit'


const deleteSlice = createSlice({
    name:'delete',
    initialState: {
        deleteOpenModal: false
    },
    reducers:{
        deleteModalOpen: (state) => {
             state.deleteOpenModal = true
        },
        deleteModalClose: (state) => {
             state.deleteOpenModal = false
        }
    }
})
export const {deleteModalOpen, deleteModalClose} = deleteSlice.actions
export default deleteSlice.reducer