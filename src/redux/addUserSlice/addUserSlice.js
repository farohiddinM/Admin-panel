import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAddUserList = createAsyncThunk('addUser/fetchAddUserList' , async () => {

})

export const fetchAddUserTypeList = createAsyncThunk('addUser/fetchAddUserTypeList' , async () => {
    const response = await axios.get(`http://127.0.0.1:8000/profession-list/` , {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer   e5e0e171894ed7010492a6bca517b1a45c5b07c5"
        }
    })
    const data = await response.data
    return data
})


const addUserSlice = createSlice({
    name: "addUser",
    initialState: {
        typeList: []
    },
    reducers: {

    },
    extraReducers: {
      [fetchAddUserList.pending]: (state , action) => {

      },
      [fetchAddUserList.fulfilled]: (state , action)  => {

      },
      [fetchAddUserList.rejected]: (state , action) => {

      },
      [fetchAddUserTypeList.pending]: (state , action) => {

      },
      [fetchAddUserTypeList.fulfilled]: (state , action)  => {
         state.typeList = action.payload
      },
      [fetchAddUserTypeList.rejected]: (state , action) => {

      }
    }

    
})

export const {} = addUserSlice.actions

export default addUserSlice.reducer