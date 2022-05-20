import { renderHook, act } from "@testing-library/react";
import useCounter from "../../hooks/useCounter";

describe('Test for useCounter custom hook', () => {
    
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(0);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
    });

    test('should return default values when there is prop value', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('should increment the counter value plus 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('should decrement the counter value minus 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
        });
        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('should reset the counter value', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;
        act(() => {
            increment();
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(100);
    });
});