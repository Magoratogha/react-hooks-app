import { Fragment, useEffect, useState } from "react";
import Message from "./Message";
import './SimpleForm.css';

function SimpleForm() {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('name changed');
    }, [ name ]);
    
    useEffect(() => {
        // console.log('email changed');
    }, [ email ]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ] : target.value
        });
    };

    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr></hr>
            <div className="form-group mb-2">
                <input
                    type="Text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group mb-3">
                <input
                    type="Text"
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            { (name === '123') && <Message />}
        </Fragment>
    );
}

export default SimpleForm;