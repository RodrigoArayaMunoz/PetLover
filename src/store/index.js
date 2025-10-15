import { configureStore } from '@reduxjs/toolkit';
import { PetApi } from './services/PetApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const PetLoverStore = configureStore({
    reducer: {
        [PetApi.reducerPath]: PetApi.reducer,
    },
    middleware: getDefaultMiddleware => (getDefaultMiddleware().concat(PetApi.middleware))
});

setupListeners(PetLoverStore.dispatch);

export default PetLoverStore;
