import { createSlice } from "@reduxjs/toolkit";

const workersSlice = createSlice({
    name: "workers",
    initialState: [
        { name: "Кондратьева С.Е.", descr: "Невролог", mail: "example@gmail.com", phone: "+79128271283" },
        { name: "Иванов Е.А.", descr: "Кардиолог", mail: "example@gmail.com", phone: "+79128271283" },
        { name: "Дмитриенко П.У.", descr: "Терапевт", mail: "example@gmail.com", phone: "+79128271283" },
        { name: "Кравченко А.А.", descr: "Стоматолог", mail: "example@gmail.com", phone: "+79128271283" },
        { name: "Рагимов Г. П.", descr: "Хирург", mail: "example@gmail.com", phone: "+79128271283" }
    ],
    reducers: {
        deleteBlock: (state, action) => {
            state.splice(action.payload, 1)
        },
        saveChanges: (state, action) => {
            const { name, phone, descr, mail } = action.payload;
            const newItem = {
                name,
                phone,
                descr,
                mail
            }
            return [...state, newItem]
        }
    }
})

export const { deleteBlock, saveChanges } = workersSlice.actions
export default workersSlice.reducer