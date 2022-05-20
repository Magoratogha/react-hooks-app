import { Fragment, useState } from "react";
import useCounter from "../../hooks/useCounter";
import "../03-examples/MultipleCustomHooks.css";
import Small from "./Small";

function Memorize() {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <Fragment>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr></hr>
            <button onClick={ () => increment(1) } className="btn btn-outline-dark">+1</button>
            <button onClick={ () => setShow(!show) } className="btn btn-outline-dark ms-3">Show/Hide { JSON.stringify(show) }</button>
        </Fragment>
    );
}

export default Memorize;