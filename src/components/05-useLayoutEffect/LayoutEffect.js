import { Fragment, useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./LayoutEffect.css";

function LayoutEffect() {

    const { counter, increment } = useCounter(1);
    const requestEndpoint = 'https://www.breakingbadapi.com/api/quotes/' + counter;
    const { data } = useFetch(requestEndpoint);
    const { quote } = !!data && data[0];

    const paragraphElement = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
      setBoxSize(paragraphElement.current.getBoundingClientRect());
    }, [ quote ]);
    
    return (
        <Fragment>
            <h1>Layout Effect</h1>
            <hr></hr>
            <blockquote className="blockquote text-end">
                <p ref={ paragraphElement } className="mb-3">{ quote }</p>
            </blockquote>
            <pre>{ JSON.stringify(boxSize, null, 3) }</pre>
            <button
                onClick={ () => increment(1) }
                className="btn btn-outline-dark">
                    Next quote
                </button>
        </Fragment>
    );
}

export default LayoutEffect;