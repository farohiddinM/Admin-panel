import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = process.env.REACT_APP_API

export const fetchLogin = createAsyncThunk('fetchLogin' , async(datas) => {
      const response = await axios.post(`http://127.0.0.1:8000/api/v1/login/` ,datas)
      const data = await response.data
      return data
})

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        loading: true,
        status : '',
        eneter: false
    },
    reducers: {
       logOut: (state) => {
        state.eneter = false
        state.loading = true
       }
    },
    extraReducers: {
     [fetchLogin.pending]: (state , action) => {
        state.loading = true
        state.eneter  = false
        state.status = 'pending'
     },
     [fetchLogin.fulfilled]: (state , action) => {
        state.loading = false
        state.eneter = true
        state.status = 'success'
        localStorage.setItem('token' , JSON.stringify(action.payload))
        localStorage.setItem('user' , JSON.stringify(state.eneter))  
     }
    }
})
export const {logOut} = loginSlice.actions
export default loginSlice.reducer