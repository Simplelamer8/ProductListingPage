import { createSlice } from "@reduxjs/toolkit";

export interface footerInterface {
    skipValue: number
} 

const initialState:footerInterface = {
    skipValue: 0
}

const footerSlice = createSlice({
    name: "footer",
    initialState,
    reducers: {
        setSkipValue: (state, action) => {
            state.skipValue = action.payload
        }
    }
});

export const {setSkipValue} = footerSlice.actions
export default footerSlice.reducer