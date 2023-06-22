import { configureStore } from '@reduxjs/toolkit';
import resultSlice from '../../features/results/reducers/result.reducer';

export const store = configureStore({
    reducer: {
        result: resultSlice,
    },
});
