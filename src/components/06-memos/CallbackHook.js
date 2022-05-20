import { Fragment, useCallback, useState } from "react";
import "../03-examples/MultipleCustomHooks.css";
import ShowIncrement from "./ShowIncrement";

function CallbackHook() {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    const increment = useCallback((num) => {
        setCounter((c) => c + num);
    }, [ setCounter ]);


    return (
        <Fragment>
            <h1>useCallback Hook: {counter}</h1>
            <hr></hr>
            <ShowIncrement increment={increment} />
        </Fragment>
    );
}

export default CallbackHook;