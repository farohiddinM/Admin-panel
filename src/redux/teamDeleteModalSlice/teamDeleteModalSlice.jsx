import { createSlice } from "@reduxjs/toolkit";


const teamDeleteSlice = createSlice({
    name:'teamDelete',
    initialState: {
        teamDeleteOpenModal:false
    },
    reducers:{
        teamDeleteOpen: (state) => {
            state.teamDeleteOpenModal = true
        },
        teamDeleteClose: (state) => {
            state.teamDeleteOpenModal = false
        }
    },
    
})

export const {teamDeleteOpen ,teamDeleteClose } = teamDeleteSlice.actions
export default teamDeleteSlice.reducer