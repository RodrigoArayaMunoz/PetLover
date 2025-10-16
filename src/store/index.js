import { configureStore } from '@reduxjs/toolkit';
import { PetApi } from './services/pet/PetApi';
import { AuthApi } from './services/auth/authApi';
import { profileApi } from './services/profile/profileApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './slices/userSlice';

export const PetLoverStore = configureStore({
    reducer: {
        [PetApi.reducerPath]: PetApi.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        userReducer
    },
    middleware: getDefaultMiddleware => 
        (getDefaultMiddleware()
    .concat(PetApi.middleware)
    .concat(AuthApi.middleware)
    .concat(profileApi.middleware)
    )
});

setupListeners(PetLoverStore.dispatch);

export default PetLoverStore;
