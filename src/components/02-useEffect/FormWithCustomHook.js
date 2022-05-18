import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import './SimpleForm.css';

function FormWithCustomHook() {

    const [ formValue, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValue;

    useEffect(() => {
      console.log('email changed');
    }, [ email ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValue);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
            <div className="form-group mb-2">
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
            <div className="form-group mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <button type="submit" className="btn btn-outline-dark">Save changes</button>
        </form>
    );
}

export default FormWithCustomHook;