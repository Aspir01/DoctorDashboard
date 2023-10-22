import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "notes",
    initialState: [
        { date: "2023-01-22", time: "11:00", name: "Ольга Е.И.", direction: "Терапия", doctor: "Лепонов А.Д.", phone: "+79228392917", status: "В процессе" },
        { date: "2023-01-23", time: "15:00", name: "Мария Д.М.", direction: "Хирургия", doctor: "Денисов П.Ф.", phone: "+79182552910", status: "Подтверждено" },
        { date: "2023-01-25", time: "12:00", name: "Гасан М.Р.", direction: "Кардиология", doctor: "Аминов М.А.", phone: "+79128392913", status: "Подтверждено" },
        { date: "2023-01-26", time: "11:00", name: "Андрей Е.К.", direction: "Терапия", doctor: "Терябина Е.В.", phone: "+79921982928", status: "Отклонено" },
        { date: "2023-01-28", time: "17:00", name: "Екатерина Е.П.", direction: "Терапия", doctor: "Вассеников В.В.", phone: "+79112123210", status: "Завершено" },
        { date: "2023-02-01", time: "15:00", name: "Вячеслав Л.З", direction: "Кардиология", doctor: "Рагимов Р.М.", phone: "+79892183192", status: "В процессе" },
        { date: "2023-02-03", time: "12:00", name: "Тимур Н.О.", direction: "Неврология", doctor: "Михайлов Ф.К.", phone: "+79287302931", status: "Подтверждено" },
        { date: "2023-02-05", time: "11:00", name: "Елена А.И.", direction: "Дерматология", doctor: "Евгененко Т.Б.", phone: "+79729301292", status: "Отклонено" },
        { date: "2023-02-12", time: "13:00", name: "Алина Е.У.", direction: "Стоматология", doctor: "Мастеренко П.Ф.", phone: "+79821029318", status: "Неизвестно" },
    ],
    reducers: {
        deleteBlock: (state, action) => {
            state.splice(action.payload, 1)
        },
        saveChanges: (state, action) => {
            const { name, direction, doctor, time, phone, date, status } = action.payload
            const newItem = {
                name,
                direction,
                doctor,
                time,
                phone,
                date,
                status
            }
            return [...state, newItem]
        }

    }
})

export const { deleteBlock, saveChanges } = notesSlice.actions
export default notesSlice.reducer