import React from 'react'

export default function Reto6() {

    const crearElementos = (n=10) => {
        const elementos = [];
        let k = 1;
        for (let i=1; i<n; i++) {
                elementos.push(<div> {i} * {k}  = {k*=i}//</div>)
        }
        return elementos;
    }

    return (
        <article className="card">
            <header>
                <h2>6.- Calculate and print in the screen 10! (10 factorial, or 10 shriek or 10 bang)</h2>
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
