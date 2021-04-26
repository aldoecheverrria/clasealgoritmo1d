import React from 'react'
import './App2.css'
import Reto1 from './Challenges/Reto1'
import Reto2 from './Challenges/Reto2'
import Reto3 from './Challenges/Reto3'
import Reto4 from './Challenges/Reto4'
import Reto5 from './Challenges/Reto5'
import Reto6 from './Challenges/Reto6';
import Reto7 from './Challenges/Reto7'
import Reto8 from './Challenges/Reto8'
import Reto9 from './Challenges/Reto9'

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
                <Reto6/>
                <Reto7/>
                <Reto8/>
                <Reto9/>
            </div>
            </div>
            <div className="helper--container">
                <footer className="item helper1">Instructions: read carefuly, and type JSX code in the textArea...</footer>
                <footer className="item helper2">finished typing your answer ? click the compare button, to see  recommended code; remember: multiple solution's to same problem</footer>
                <footer className="item helper3">... if 30 min has passed ? take a break  : still  no answer then click Compare as a last resource.</footer>
             

            </div>
        </div>

    </body>
    )
}
