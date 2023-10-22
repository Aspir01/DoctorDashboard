import React from 'react'
import "./Events.css"
import Search from '../../../Headers/Search/Search'
import Protocol from '../Protocol/Protocol'
import { useSelector } from 'react-redux'

const Events = () => {
    const workers = useSelector(state => state.workers)

    return (
        <div className='events'>
            <Protocol />
            <Search />
            <table className='events-list'>
                {workers.map((work, id) => {
                    return <tr className='event' key={id}>
                        <td> <div><input type="checkbox" /> {work.name} </div></td>
                        <td>{work.descr}</td>
                    </tr>
                })}
            </table>
            <button className='analiz'>Анализировать</button>
        </div >
    )
}

export default Events