import React from 'react'

export default function Reto4() {

    const crearElementos = (n=10) => {
        const elementos = [];
        for (let i=1; i<=n; i++) {
            
            for (let j=1; j<=n; j++) {
                elementos.push(<div>{i} x {j} = {i * j}//</div>)
            }
        }
        return elementos;
    }
    return (
        <article className="card">
            <header>
                <h2>4.- Print all the multiplication tables with numbers from 1 to 10 </h2>
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
