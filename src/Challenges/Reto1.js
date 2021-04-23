import React from 'react'

export default function Reto1() {
    const crearElementos = (n=40) => {
        const elementos = [];
        for (let i=0; i<=n; i++) {
            elementos.push(<div>//Element {i}</div>)
        }
        return elementos;
    }


    return (
            <article className="card">
                    <header>
                        <h2>1.- Print numbers with an increment</h2>
                    </header>

                    <img src="https://mdn.github.io/css-examples/css-cookbook/balloons.jpg" alt="Hot air balloons"/>
                    <div className="content">
                        <p>{crearElementos(20)}</p>
                    </div>
                    <textarea placeholder="Type your JSX code here"/>
                    <footer>Type your JSX answer. Click the "Compare" button to see the JSX answer</footer>
                </article>
    )
}


/*ç
 <article className="card">
                    <header>
                        <h2>Print numbers with an increment</h2>
                    </header>

                    <img src="https://mdn.github.io/css-examples/css-cookbook/balloons.jpg" alt="Hot air balloons"/>
                    <div className="content">
                        <p>Short content.</p>
                    </div>
                    <footer>I have a footer!</footer>
                </article>


*/