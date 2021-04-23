import React from 'react'
import './App2.css'
import Reto1 from './Challenges/Reto1'
import Reto2 from './Challenges/Reto2'

export default function App2() {
    return (
    <body>
        <div className="big--container">
            <div className="container--cards">
                <div className="cards">
                   
                <Reto1/>
                <Reto2/>
                
            </div>
            </div>
            <div className="helper--container">
                <footer className="helper1">If no answer after 10 min? leave it for 30</footer>
                <footer className="helper2">If no answer after 40 min? comeback later</footer>
                <footer className="helper3">Still no answer? check the helper button</footer>
                <button>Helper</button>

            </div>
        </div>

    </body>
    )
}
