import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveChanges } from '../../../store/workersSlice'
import "./AddWorker.css"

const AddWorker = ({ close }) => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [descr, setDescr] = useState("")
    const [mail, setMail] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="modal">
            <div className="modal-content">
                <div className='modal-header'>
                    <p>Добавить сотрудника</p>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                        <path d="M1.78125 17.5312L0.46875 16.2188L7.6875 9L0.46875 1.78125L1.78125 0.46875L9 7.6875L16.2188 0.46875L17.5312 1.78125L10.3125 9L17.5312 16.2188L16.2188 17.5312L9 10.3125L1.78125 17.5312Z" fill="black" />
                    </svg>
                </div>
                <hr />
                <div>
                    <div className='section2'>
                        <div>
                            <input type="text" placeholder="ФИО" className='name2' value={name} onChange={e => setName(e.target.value)} />
                            <select className="pol" placeholder="Пол">
                                <option disabled selected>Пол</option>
                                <option>Мужской</option>
                                <option>Женский </option>
                            </select>
                        </div>
                        <div className='phone'>
                        </div>
                    </div>
                </div>
                <div className='more-info'>
                    <input type="text" placeholder='Отделение' value={descr} onChange={e => setDescr(e.target.value)} />
                    <input type="date" id="birthday" min="1920-01-01" aria-label="Дата рождения" />
                </div>
                <div className='addres'>
                    <input type="text" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} />
                    <input class="pass" type="text" placeholder='Почта' value={mail} onChange={e => setMail(e.target.value)} />
                    <button onClick={() => { dispatch(saveChanges({ name, phone, descr, mail })); close() }}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default AddWorker