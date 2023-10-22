import React, { useState } from 'react'
import Search from "../../../Headers/Search/Search.jsx"
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlock } from '../../../../store/workersSlice.js'
import "./Workers.css"
import Header from '../../../Headers/Header/Header.jsx'
import AddWorker from '../../../ModalWindows/AddWorker/AddWorker.jsx'

const Workers = () => {

    const [editBlock, setEdit] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const workers = useSelector(state => state.workers)
    const dispatch = useDispatch()

    // Функция проверки, нажата ли кнопка редактирования
    const handleEdit = () => {
        setEdit(!editBlock)
    }
    //Функция проверки, вызвано ли модальное окно
    const handleButtonClick = () => {
        setShowModal(true);
    };

    // Функция закрытия модального окна
    const handleModalClose = () => {
        setShowModal(false);
    };
    return (
        <div className='workers'>
            <Header text="Сотрудники" add={handleButtonClick} edit={handleEdit} editBlock={editBlock} />
            <Search />
            <table className='workerlist'>
                {workers.map((worker, id) => {
                    return <tr className='worker' key={id}>
                        <td>{worker.name}</td>
                        <td>{worker.descr}</td>
                        <td>{worker.mail}</td>
                        <td>{worker.phone}</td>
                        {/* Кнопка редактирования блока */}
                        {editBlock && <div className="close-worker" onClick={() => dispatch(deleteBlock(id))}> <p>X</p> </div>}
                        {showModal && <AddWorker close={handleModalClose} />}
                    </tr>
                })}
            </table>
        </div >
    )
}

export default Workers