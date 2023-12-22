
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// initial state 
const initialState = {
    products:[],
    search:''
};


// get products from backend
export const getProductThunk = createAsyncThunk(
    'product/get',
    async(args,thunkAPI) => {
        try {
            // get data
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
            // store data
            thunkAPI.dispatch(setProducts(response.data.products));
        } catch (error) {
            console.log(error.message);
        }
    }
)


const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        // set products in array
        setProducts:(state,action) => {
            state.products = action.payload;
            console.log(state.products);
        },
        // set search 
        setSearch:(state,action) => {
            state.search = action.payload;
        }
    }
});


// reducer
export const productReducer = productSlice.reducer;

// actions
export const { setProducts , setSearch } = productSlice.actions;

// selector
export const productSelector = (state) => state.productReducer;