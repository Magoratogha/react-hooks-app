import { Fragment } from 'react';
import useCounter from '../../hooks/useCounter';
import './CounterApp.css';

function CounterWithCustomHook() {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <Fragment>
            <h1>Counter with Hook: { counter }</h1>
            <hr></hr>
            <button
                className="btn btn-outline-dark"
                onClick={ () => increment(2) }>
                +1
            </button>
            <button
                className="btn btn-outline-dark"
                onClick={ reset }>
                Reset
            </button>
            <button
                className="btn btn-outline-dark"
                onClick={ () => decrement(2) }>
                -1
            </button>
        </Fragment>
    );
}

export default CounterWithCustomHook;