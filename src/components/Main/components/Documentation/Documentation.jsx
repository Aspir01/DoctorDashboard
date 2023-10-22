import React, { useState } from 'react'
import Search from "../../../Headers/Search/Search.jsx"
import AddDocument from "../../../ModalWindows/AddDocument/AddDocument.jsx"
import "./Documentation.css"
import Header from '../../../Headers/Header/Header.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlock } from "../../../../store/documentsSlice.js";

const Documentation = () => {


    const documents = useSelector(state => state.documents);
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [editBlock, setEdit] = useState(false)

    //Функция проверки, вызвано ли модальное окно
    const handleButtonClick = () => {
        setShowModal(true);
    };

    // Функция закрытия модального окна
    const handleModalClose = () => {
        setShowModal(false);
    };

    // Функция проверки, нажата ли кнопка редактирования
    const handleEdit = () => {
        setEdit(!editBlock)
    }

    return (
        <div className='documentation'>
            <Header text="Документы" add={handleButtonClick} edit={handleEdit} editBlock={editBlock} />
            <Search />
            {documents.map((document, id) => {
                return <table className='document' key={id}>
                    <td className='doc-btn'><p>{document.name}</p></td> <td><button>Скачать</button></td>
                    {/* Кнопка редактирования блока */}
                    {editBlock && <div className="close-document" onClick={() => dispatch(deleteBlock(id))}> <p>X</p> </div>}
                </table>
            })}
            {showModal && <AddDocument close={handleModalClose} />}
        </div>
    )
}

export default Documentation