import {configureStore} from '@reduxjs/toolkit'
//user
import editModalSlice from './editModalSlice/editModalSlice'
import deleteModalSlice from './deleteModalSlice/deleteModalSlice';
// team
import teamEditModalSlice from './teamEditModalSlice/teamEditModalSlice';
import teamDeleteModalSlice from './teamDeleteModalSlice/teamDeleteModalSlice';

//user
import userEditeSlice from './userEditeSlice/userEditeSlice';
import userDeleteSLice from './userDeleteSlice/userDeleteSLice';

const store = configureStore({
    reducer:{
        editActions:editModalSlice,
        deleteActions: deleteModalSlice,
        teamEditeActions:teamEditModalSlice,
        teamDeleteActions:teamDeleteModalSlice,
        userEditeActions:userEditeSlice,
        userDeleteActions:userDeleteSLice
    }
})

export default store;