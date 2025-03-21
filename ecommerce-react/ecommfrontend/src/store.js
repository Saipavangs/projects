import { configureStore } from '@reduxjs/toolkit';
import { productListReducers, productDetailReducers} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducers } from './reducers/userReducers';
import { userRegisterReducers } from './reducers/userReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')):[];
const userInfoFromStorage = localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')):null;
const store = configureStore({
    reducer: {
        productList: productListReducers,
        productDetails: productDetailReducers,
        cart: cartReducer,
        userLogin: userLoginReducers,
        userRegister:userRegisterReducers,
        
    },
    
    preloadedState: {
        cart:{cartItems:cartItemsFromStorage},
        userLogin:{userInfo:userInfoFromStorage},
    }, // Same as `initialState`
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
