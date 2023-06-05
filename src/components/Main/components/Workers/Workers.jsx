import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from "../../../Headers/Search/Search.jsx"
import "./Workers.css"
import Header from '../../../Headers/Header/Header.jsx'

const Workers = ({ workers, setWorkers }) => {

    const [editBlock, setEdit] = useState(false)

    // Функция проверки, нажата ли кнопка редактирования
    const handleEdit = () => {
        setEdit(!editBlock)
    }

    // Функция удаления объекта из массива данных
    const deleteBlock = (id) => {
        const updatedWorkers = workers.filter((worker, index) => index !== id);
        setWorkers(updatedWorkers);
    };

    return (
        <div className='workers'>
            <Header text="Сотрудники" edit={handleEdit} editBlock={editBlock} />
            <Search />
            <table className='workerlist'>
                {workers.map((worker, id) => {
                    return <tr className='worker' key={id}>
                        <td>{worker.name}</td>
                        <td>{worker.descr}</td>
                        <td>{worker.mail}</td>
                        <td>{worker.phone}</td>
                        {/* Кнопка редактирования блока */}
                        {editBlock && <div className="close-worker" onClick={() => deleteBlock(id)}> <p>X</p> </div>}
                    </tr>
                })}
            </table>
        </div >
    )
}

export default Workers