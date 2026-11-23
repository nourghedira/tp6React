
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Créer le Store central
export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
