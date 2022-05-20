import { Fragment, useMemo, useState } from "react";
import heavyProcess from "../../helpers/heavyProcess";
import useCounter from "../../hooks/useCounter";
import "../03-examples/MultipleCustomHooks.css";

function MemoHook() {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);
    const heavyProccessMemo = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <Fragment>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr></hr>
            <p>{ heavyProccessMemo }</p>
            <button onClick={ () => increment(1) } className="btn btn-outline-dark">+1</button>
            <button onClick={ () => setShow(!show) } className="btn btn-outline-dark ms-3">Show/Hide { JSON.stringify(show) }</button>
        </Fragment>
    );
}

export default MemoHook;