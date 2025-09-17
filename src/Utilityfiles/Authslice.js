import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Users: [],
  currentUser: null,
};

const Authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      if (!(action.payload.Username === "" && action.payload.Password === "")) {
        const Storeuser = localStorage.getItem("Users");
        if (Storeuser) {
          state.Users = JSON.parse(Storeuser);
        }
        state.Users.push(action.payload);
        alert("SignUp Successful");
        localStorage.setItem("Users", JSON.stringify(state.Users));
        state.Users = [];
      }
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    loginup: (state, action) => {
      if (!(action.payload.Username === "" && action.payload.Password === "")) {
        const Storeuser = localStorage.getItem("Users");
        if (Storeuser) {
          state.Users = JSON.parse(Storeuser);
        }
        const found = state.Users.find(
          (user) =>
            user.Username === action.payload.Username &&
            user.Password === action.payload.Password
        );
        if (found) {
          state.currentUser = action.payload.Username;
          localStorage.setItem("CurrentUser", state.currentUser);
          alert("Login Successful");
          state.Users = [];
        } else {
          alert("Invalid Credentials");
          state.Users = [];
        }

      }
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("CurrentUser", state.currentUser);
    },
  },
});
export const { loginup, signup, logout, setCurrentUser} = Authslice.actions;
export default Authslice.reducer;
