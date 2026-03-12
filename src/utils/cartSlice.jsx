import { createSlice } from "@reduxjs/toolkit";

function getStoredLocalData(){
    try {
        let storedData = localStorage.getItem("cartItems");
        return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
        localStorage.removeItem("cartItems");
        return [];
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: getStoredLocalData(),
    },
    reducers: {
        addItem: (state, action) => {
            let item = state.items.find((item) => {
                return action.payload.id === item.id
            });

            if(item){
                item.count += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            let item = state.items.find((item) => {
                return action.payload === item.id
            });
            if(item && item.count > 1){
                item.count -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
            
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items.length = 0;
            localStorage.removeItem("cartItems");
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
