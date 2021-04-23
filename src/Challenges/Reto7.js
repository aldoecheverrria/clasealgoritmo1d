import React from 'react'

export default function Reto7() {

    const crearElementos = (n=10) => {
        const elementos = [];
        let k = 0;
        for (let i=11; i<30; i++) {
                if (i%2) elementos.push(<div>//{i} its an odd number, we had {k}, now we have: {k=k+i} //</div>)
        }
        return elementos;
    }

    return (
        <article className="card">
            <header>
                <h2>7.- Sum all odd numbers greater than 10 and less than 30 </h2>
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
