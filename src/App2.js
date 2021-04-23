import React from 'react'
import './App2.css'
import Reto1 from './Challenges/Reto1'
import Reto2 from './Challenges/Reto2'
import Reto3 from './Challenges/Reto3'
import Reto4 from './Challenges/Reto4'
import Reto5 from './Challenges/Reto5'

export default function App2() {
    return (
    <body>
        <div className="big--container">
            <div className="container--cards">
                <div className="cards">
                   
                <Reto1/>
                <Reto2/>
                <Reto3/>
                <Reto4/>
                <Reto5/>
            </div>
            </div>
            <div className="helper--container">
                <footer className="helper1">Instructions: read the challenge carefuly, and type your JSX code in the textArea...</footer>
                <footer className="helper2">When you are finished typing your answer, click the compare button, to see the recommended code; remember that maybe multiple solutions to the same problem.</footer>
                <footer className="helper3">... if 30 min has passed? take a break  ... if you still have no answer, click compare button as a last resource.</footer>
             

            </div>
        </div>

    </body>
    )
}
