
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products:[],
    search:''
};


export const getProductThunk = createAsyncThunk(
    'product/get',
    async(args,thunkAPI) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
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
        setProducts:(state,action) => {
            state.products = action.payload;
            console.log(state.products);
        },
        setSearch:(state,action) => {
            state.search = action.payload;
        }
    }
});


export const productReducer = productSlice.reducer;

export const { setProducts , setSearch } = productSlice.actions;

export const productSelector = (state) => state.productReducer;