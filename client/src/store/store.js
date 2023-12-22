
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../reducer/productReducer';

// redux store
const store = configureStore({
    reducer:{
        productReducer
    }
})

export default store;