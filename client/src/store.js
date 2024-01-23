import {configureStore} from '@reduxjs/toolkit'
import numReducer from './slices/NumSlice.js'

const store = configureStore({
    reducer:{
        num: numReducer,
    } 
})

export default store