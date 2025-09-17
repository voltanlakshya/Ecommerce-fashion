import { createSlice } from "@reduxjs/toolkit";
import { toastWarn, toastSuccess, notify } from "../components/Toat";
const initialState = {
  Cart: [],
  user: null,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart:(state, action) => {
      state.Cart = action.payload || [];
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addToCart: (state, action) => {

      const found = state.Cart.find((item) => item.id === action.payload.id);
      if(!state.user){
        alert("Please login to add items to cart");
        return;}
      
      if (found) {
        found.Quantity += 1;
        localStorage.setItem(`Cart${state.user}`, JSON.stringify(state.Cart));
      }
      else{
      state.Cart.push({...action.payload, Quantity: 1});
      localStorage.setItem(`Cart${state.user}`, JSON.stringify(state.Cart));
    }

      toastSuccess('Added to Cart');
      
    },
    AddQty: (state, action) => {
      state.Cart = state.Cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item  // or you can use ""
      )
      localStorage.setItem(`Cart${state.user}`, JSON.stringify(state.Cart));

      toastSuccess('Increased item quantity');
    },
    DecQty: (state, action) => {
      const found = state.Cart.find(i => i.id === action.payload.id);
  if (found && found.Quantity > 1) {
    found.Quantity -= 1;
  }else if (found && found.Quantity === 1) {
   state.Cart = state.Cart.filter(i => i.id !== action.payload.id);
   }
  localStorage.setItem(`Cart${state.user}`, JSON.stringify(state.Cart));

      toastWarn('Decreased item quantity');
    },
    RemoveFromCart: (state, action) => {
        state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);
        localStorage.setItem(`Cart${state.user}`, JSON.stringify(state.Cart));

        toastWarn(`Removed from Cart`);
    }

  },
});

export const { addToCart, AddQty, DecQty, RemoveFromCart, setUser, setCart} = CartSlice.actions;
export default CartSlice.reducer;
