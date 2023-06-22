import { createSlice } from '@reduxjs/toolkit';

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        texts: [],
    },
    reducers: {
        addText(state, action) {
            state.texts.push(action.payload);
        },
    },
});
const { actions, reducer } = resultSlice;
export const { addText } = actions;
export const resultStateSelector = (state) => {
    return state.result;
};
export default reducer;
