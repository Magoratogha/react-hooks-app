import { memo } from "react";

const ShowIncrement = memo(({ increment }) => {

    console.log('regenerated :c');

    return (
        <button
            className="btn btn-outline-dark"
            onClick={ () => increment(5) }>
            Increment
        </button>
    );
});

export default ShowIncrement;