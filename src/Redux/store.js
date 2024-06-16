import { configureStore } from "@reduxjs/toolkit";
import counter1Slice from "./counter1Slice";



const store = configureStore({
    reducer:{
        count: counter1Slice
    }
})
export default store