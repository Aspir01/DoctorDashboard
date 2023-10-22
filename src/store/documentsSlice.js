import { createSlice } from "@reduxjs/toolkit";

const documentsSlice = createSlice({
    name: "documents",
    initialState: [
        { name: "Отчёт" },
        { name: "Чек" },
        { name: "Закупка" },
        { name: "Анализ затрат" }
    ],
    reducers: {
        deleteBlock: (state, action) => {
            state.splice(action.payload, 1);
        },
        saveChanges(state, action) {
            const newItem = {
                name: action.payload,
            }
            return [...state, newItem]
        }
    }
})

export const { deleteBlock, saveChanges } = documentsSlice.actions
export default documentsSlice.reducer