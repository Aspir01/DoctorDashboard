import { createSlice } from "@reduxjs/toolkit";

const patientsSlice = createSlice({
    name: "patients",
    initialState: [
        { name: "Простокова Е. А.", direction: "Стоматология", phone: "+79151349083", mail: "example@gmail.com", snils: "133446789905657" },
        { name: "Магомедов Г. А.", direction: "Хирургия", phone: "+79151349083", mail: "example@gmail.com", snils: "133446789905657" },
        { name: "Иванов М. З.", direction: "Кардиология", phone: "+79151349083", mail: "example@gmail.com", snils: "133446789905657" },
        { name: "Захарова Н. А.", direction: "Неврология", phone: "+79151349083", mail: "example@gmail.com", snils: "133446789905657" },
    ],
    reducers: {
        deleteBlock: (state, action) => {
            state.splice(action.payload, 1);
        },
        saveChanges: (state, action) => {
            const { name, mail, phone, direction, snils } = action.payload;
            const newItem = {
                name,
                mail,
                phone,
                direction,
                snils
            }
            return [...state, newItem]
        }
    }
})

export const { deleteBlock, saveChanges } = patientsSlice.actions
export default patientsSlice.reducer