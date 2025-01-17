import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from './filterSlice'

const Store = configureStore({
    reducer:{
        filter:FilterSlice,
    }
})


export type RootState = ReturnType<typeof Store.getState>;
export default Store;