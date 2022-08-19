import { createSlice } from "@reduxjs/toolkit";



const teamEditSlice = createSlice({
    name:'teamEditSlice',
    initialState: {
        modalOpen : false
    },
    reducers: {
        teamOpenModal: (state) => {
            state.modalOpen = true
        },
        teamCloseModal: (state) => {
            state.modalOpen = false
        }
    }
})







export const {teamOpenModal , teamCloseModal} = teamEditSlice.actions


export default teamEditSlice.reducer