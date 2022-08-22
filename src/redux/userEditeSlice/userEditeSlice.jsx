import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'userSlice',
    initialState: {
        modalOpen : false
    },
    reducers: {
        userOpenModal: (state) => {
            state.modalOpen = true
        },
        userCloseModal: (state) => {
            state.modalOpen = false
        },
    }

})







export const {userOpenModal , userCloseModal} = userSlice.actions

export default userSlice.reducer