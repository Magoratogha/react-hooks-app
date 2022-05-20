import { useEffect, useState } from "react";

function useFetch(url) {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        setState({
            data: null,
            isLoading: true,
            error: null
        });

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setState({ data, isLoading: false, error: null });
            })
            .catch((error) => setState({ data: null, isLoading: false, error }));
    }, [url]);

    return state;
}

export default useFetch;