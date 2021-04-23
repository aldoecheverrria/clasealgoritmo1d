import React from 'react'

export default function Reto8() {
    const crearElementos = (n=10) => {
        let temperatura = 0; 
        const elementos = [];
        temperatura = ((n*1.8)+32);
        elementos.push(<div>The temperature in celsius is {n}, converted to Fahrenheit is {temperatura}</div>);
        return elementos;
    }

    return (
        <article className="card">
            <header>
                <h2>8.- Wee need a function that converts from Celsius to Fahrenheit</h2>
            </header>

            <img src="https://mdn.github.io/css-examples/css-cookbook/balloons.jpg" alt="Hot air balloons"/>
            <div className="content">
                <p>{crearElementos(10)}</p>
            </div>
            <textarea placeholder="Type your JSX code here"/>
            <button>Compare</button>
            <footer>Type your JSX answer. Click the "Compare" button to see the JSX answer</footer>
        </article>
    )
}
