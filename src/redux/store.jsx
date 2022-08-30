import {configureStore} from '@reduxjs/toolkit'
//user
import editModalSlice from './editModalSlice/editModalSlice'
import deleteModalSlice from './deleteModalSlice/deleteModalSlice';
// team
import teamEditModalSlice from './teamEditModalSlice/teamEditModalSlice';
import teamDeleteModalSlice from './teamDeleteModalSlice/teamDeleteModalSlice';
// login
import loginSlice from './loginSlice/loginSlice';

const store = configureStore({
    reducer:{
        editActions:editModalSlice,
        deleteActions: deleteModalSlice,
        teamEditeActions:teamEditModalSlice,
        teamDeleteActions:teamDeleteModalSlice,
        loginActions: loginSlice
    }
})

export default store;