import React from 'react'
import Buttons from './components/Buttons/Buttons'
import Events from './components/Events/Events'
import Patients from './components/Patients/Patients'
import Notes from './components/Notes/Notes'
import Workers from './components/Workers/Workers'
import Documentation from './components/Documentation/Documentation'
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
            <div className='main one'>
                <Buttons />
                <Events />
                <Patients />
            </div>
            <div className='main one two'>
                <Notes />
                <div className='work'>
                    <Workers />
                    <Documentation />
                </div>
            </div>
        </div>
    )
}

export default Main