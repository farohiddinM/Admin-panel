import { createSlice } from "@reduxjs/toolkit";


export const userDeleteSlice = createSlice({
    name:'userDelete',
    initialState:{
        userDeleteOpenModal:false
    },
    reducers:{
        userDeleteOpen: (state) => {
            state.userDeleteOpenModal = true
        },
        userDeleteClose: (state) => {
            state.userDeleteOpenModal = false
        }
    }
})


export const {userDeleteOpen , userDeleteClose} = userDeleteSlice.actions
export default userDeleteSlice.reducer

