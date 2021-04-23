import React from 'react'

export default function Reto5() {

    const crearElementos = (n=10) => {
        const elementos = [];
        let k = 1;
        for (let i=1; i<2; i++) {
            
            for (let j=2; j<=n; j++) {
                elementos.push(<div> {k} + {j}  = {k=k+j}//</div>)
            }
        }
        return elementos;
    }

    return (
        <article className="card">
            <header>
                <h2>5.- Print in the screen the sum of numbers from 1 to 11, calculate with a loop</h2>
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
