import {configureStore} from '@reduxjs/toolkit';
import webReducer from './CreatSlice';
import AuthReducer from './Utilityfiles/Authslice';
import CartReducer from './Utilityfiles/CartSlice';
import WishReducer from './Utilityfiles/WishSlice';
export const store = configureStore(
    {
        reducer: {
            webReducer,
            AuthReducer, 
            CartReducer,
            WishReducer,
        }

    }
);





 