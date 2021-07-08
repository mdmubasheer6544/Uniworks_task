import { configureStore } from "@reduxjs/toolkit";
import compSlice from "./Compenent-slice";

const store=configureStore({
    reducer:{comp:compSlice.reducer}
})

export default store;