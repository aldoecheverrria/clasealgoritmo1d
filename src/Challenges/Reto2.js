import React from 'react'

export default function Reto2() {

    const crearElementos = (n=40) => {
        const elementos = [];
        for (let i=0; i<=n; i=i+2) {
            elementos.push(<div>Element: {i} //</div>)
        }
        return elementos;
    }

    return (
        <article className="card">
            <header>
                <h2>2.- Print pair numbers with an increment: until 100</h2>
            </header>

            <img src="https://mdn.github.io/css-examples/css-cookbook/balloons.jpg" alt="Hot air balloons"/>
            <div className="content">
                <p>{crearElementos(100)}</p>
            </div>
            <button>Compare</button>
            <footer>Type your JSX answer. Click the "Compare" button to see the JSX answer</footer>
        </article>
    )
}
