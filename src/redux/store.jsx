import {configureStore} from '@reduxjs/toolkit'
import editModalSlice from './editModalSlice/editModalSlice'
import deleteModalSlice from './deleteModalSlice/deleteModalSlice';
const store = configureStore({
    reducer:{
        editActions:editModalSlice,
        deleteActions: deleteModalSlice
    }
})

export default store;