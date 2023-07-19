import { createSlice } from '@reduxjs/toolkit';

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        data: [],
        selectedIndex: -1,
        isOpenTableResultModal: false,
        selectedTable: null,
        isPreviewVisible: false,
    },
    reducers: {
        addData(state, action) {
            state.data.push(action.payload);
        },
        resetData(state, action) {
            state.data = [];
        },
        setSelectedIndex(state, action) {
            state.selectedIndex = action.payload;
        },
        setIsOpenTableResultModal(state, action) {
            state.isOpenTableResultModal = action.payload;
        },
        setSelectedTable(state, action) {
            state.selectedTable = action.payload;
        },
        setIsPreviewVisible(state, action) {
            state.isPreviewVisible = action.payload;
        },
    },
});
const { actions, reducer } = resultSlice;
export const { addData, resetData, etSelectedIndex, setIsOpenTableResultModal, setSelectedTable, setIsPreviewVisible } =
    actions;
export const resultStateSelector = (state) => {
    return state.result;
};
export default reducer;
