import { useState } from "react";

function useForm(initialState = {}) {
    const [ formValue, setFormValue ] = useState(initialState);

    const handleValueChange = ({ target }) => {
        setFormValue({
            ...formValue,
            [ target.name ] : target.value
        });
    };

    return [ formValue, handleValueChange ];
}

export default useForm;