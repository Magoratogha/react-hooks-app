import { Fragment, useState } from "react";
import './CounterApp.css';

function CounterApp() {

    const [ state, setState ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2 } = state;

    return (
        <Fragment>
            <h1>Counter 1: { counter1 }</h1>
            <h1>Counter 2: { counter2 }</h1>
            <hr></hr>
            <button
                onClick={ () => setState({
                    ...state,
                    counter1: counter1 + 1
                }) } 
                className="btn btn-outline-dark">
                +1
            </button>
        </Fragment>
    );
}

export default CounterApp;