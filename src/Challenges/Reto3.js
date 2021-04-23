import React from 'react'

export default function Reto3() {

    const crearElementos = (n=10) => {
        const elementos = [];
        for (let i=1; i<=n; i++) {
            elementos.push(<div>9 x {i} = {9 * i}//</div>)
        }
        return elementos;
    }

    return (
        <article className="card">
                    <header>
                        <h2>3.- Print table number 9: </h2>
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