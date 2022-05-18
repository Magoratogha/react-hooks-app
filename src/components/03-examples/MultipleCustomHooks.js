import { Fragment } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./MultipleCustomHooks.css";

function MultipleCustomHooks() {

    const { counter, increment } = useCounter(1);
    const requestEndpoint = 'https://www.breakingbadapi.com/api/quotes/' + counter;
    const { isLoading, data } = useFetch(requestEndpoint);
    const { quote, author } = !!data && data[0];
    
    return (
        <Fragment>
            <h1>Breaking Bad quotes</h1>
            <hr></hr>
            { isLoading ? 
                <div className="alert alert-info text-center">Loading...</div>
                :
                <blockquote className="blockquote text-end">
                    <p className="mb-3">{ quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                </blockquote>
            }
            <button
                onClick={ () => increment(1) }
                className="btn btn-outline-dark">
                    Next quote
                </button>
        </Fragment>
    );
}

export default MultipleCustomHooks;