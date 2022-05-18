import { Fragment, useState } from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";
import './FocusScreen.css';

function RealExampleRef() {

    const [show, setShow] = useState(false);

    return (
        <Fragment>
            <h1>RealExampleRef</h1>
            <hr></hr>
            { show && <MultipleCustomHooks /> 
            }
            <div className="row">
                <div className="col-12">
                    <button 
                        onClick={ () => setShow(!show) }
                        className="btn btn-outline-dark mt-3">
                            Show/Hide
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default RealExampleRef;