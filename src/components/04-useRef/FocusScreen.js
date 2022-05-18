import { Fragment, useRef } from "react";
import './FocusScreen.css';

function FocusScreen() {

    const inputRef = useRef();
    console.log(inputRef)

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <Fragment>
            <h1>Focus Screen</h1>
            <hr></hr>
            <input
                ref={ inputRef }
                className="form-control mb-3"
                placeholder="Your name" />
            <button 
                className="btn btn-outline-dark"
                onClick={ handleClick }>
                    Focus
            </button>
        </Fragment>
    );
}

export default FocusScreen;