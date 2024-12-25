import { createSlice } from "@reduxjs/toolkit";

export interface headerInterface {
    searchText: string;
    filterValue: "" | "rating" | "price" | "weight" | "reset";
    cart: Record<string, number>;
    total: number;
} 

const initialState:headerInterface = {
    searchText: "",
    filterValue: "",
    cart: {},
    total: 0
}

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        updateSearchText: (state, action) => {
            state.searchText = action.payload
        },
        updateFilterValue: (state, action) => {
            state.filterValue = action.payload
        },
        updateCart: (state, action) => {
            const { product_id, quantity }: Record<string, number> = action.payload;
            let new_cart = {
                ...state.cart, // Create a new object with existing cart entries
                [product_id]: quantity > 0 ? quantity : 0, // Add or update product quantity
            };
            state.cart = JSON.parse(JSON.stringify(new_cart));
            if (quantity === 0) {
                delete state.cart[product_id]; // Delete the product if quantity is 0
            }
            console.log(state.cart);
        },        
        setTotal: (state, action) => {
            state.total = action.payload
        }
    }
});

export const {updateSearchText, updateFilterValue, updateCart, setTotal} = headerSlice.actions
export default headerSlice.reducer