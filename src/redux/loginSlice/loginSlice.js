import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = process.env.REACT_APP_API

export const fetchLogin = createAsyncThunk('fetchLogin' , async (datas) => {
      const response = await axios.post(`${url}api/v1/login/` ,datas)
      const data = await response.data
      return data
})

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        loading: true,
        status : ''
    },
    reducers: {

    },
    extraReducers: {
     [fetchLogin.pending]: (state , action) => {
        state.loading = true
        state.status = 'pending'
     },
     [fetchLogin.fulfilled]: (state , action) => {
        state.loading = false
        state.status = 'success'
        console.log(action.payload);
        localStorage.setItem('user' , action.payload)  
     }
    }
})

export default loginSlice.reducer