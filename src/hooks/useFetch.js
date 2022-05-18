import { useEffect, useRef, useState } from "react";

function useFetch(url) {

    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {
        setState({
            data: null,
            isLoading: true,
            error: null
        });

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted.current) {
                    setState({ data, isLoading: false, error: null });
                }
            })
            .catch((error) => setState({ data: null, isLoading: false, error }));
    }, [url]);

    return state;
}

export default useFetch;