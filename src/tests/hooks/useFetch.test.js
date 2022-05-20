import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";

describe('Test for useFetch custom hook', () => {

    test('should return default values', () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { data, isLoading, error } = result.current;
        expect(data).toBe(null);
        expect(isLoading).toBe(true);
        expect(error).toBe(null);
    });

    test('should return requested data', async () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const initialResult = result.current;
        await waitFor(() => {
            expect(result.current).not.toBe(initialResult);
        });
        const { data, isLoading, error } = result.current;
        expect(data.length).toBe(1);
        expect(isLoading).toBe(false);
        expect(error).toBe(null);
    });

    test('should handle an error if requested fails', async () => {
        global.fetch = jest.fn(() => Promise.reject('internal server error'));
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const initialResult = result.current;
        await waitFor(() => {
            expect(result.current).not.toBe(initialResult);
        });
        const { data, isLoading, error } = result.current;
        expect(data).toBe(null);
        expect(isLoading).toBe(false);
        expect(error).toBe('internal server error');
    });
});