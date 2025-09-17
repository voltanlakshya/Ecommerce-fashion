import { createSlice } from "@reduxjs/toolkit";
import { toastWarn, toastSuccess } from "../components/Toat";

const initialState = {
  Wish: [],
  WishUser: null,
};

const WishSlice = createSlice({
  name: "Wish", 
  initialState,
  reducers: {
     setWish:(state, action) => {
      state.Wish = action.payload || [];
    },
    setWishUser: (state, action) => {
      state.WishUser = action.payload;
    },
    addToWish: (state, action) => {
      
      if(!state.WishUser){
        alert("Please login to add items to Wishlist");
        return;}

        const found = state.Wish.find((item) => item.id === action.payload.id);
      if (!found) {
      state.Wish.push({ ...action.payload });
    }
    // persist (optional but you’re already doing it)
    localStorage.setItem(`Wish${state.WishUser}`, JSON.stringify(state.Wish));

    toastSuccess('Added to Wishlist');
    },
    RemoveFromWish: (state, action) => {
        state.Wish = state.Wish.filter((item) => item.id !== action.payload.id);
        localStorage.setItem(`Wish${state.WishUser}`, JSON.stringify(state.Wish));
        toastWarn('Removed from Wishlist');
    }

  },
});

export const { addToWish, RemoveFromWish, setWish, setWishUser  } = WishSlice.actions;
export default WishSlice.reducer;
