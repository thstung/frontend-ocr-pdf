import { createSlice } from '@reduxjs/toolkit';

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        data: [],
        selectedIndex: -1,
    },
    reducers: {
        addData(state, action) {
            state.data.push(action.payload);
        },
        setSelectedIndex(state, action) {
            state.selectedIndex = action.payload;
        },
    },
});
const { actions, reducer } = resultSlice;
export const { addData, setSelectedIndex } = actions;
export const resultStateSelector = (state) => {
    return state.result;
};
export default reducer;
