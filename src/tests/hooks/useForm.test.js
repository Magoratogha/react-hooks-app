import { renderHook, act } from "@testing-library/react";
import useForm from "../../hooks/useForm";

describe('Test for useForm custom hook', () => {

    const initialForm = {
        name: 'Magora',
        email: 'test@test.com'
    };

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [formValue, handleValueChange, resetValues] = result.current;
        expect(formValue).toEqual(initialForm);
        expect(typeof handleValueChange).toBe('function');
        expect(typeof resetValues).toBe('function');
    });

    test('should change form values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleValueChange] = result.current;
        act(() => {
            handleValueChange({
                target: {
                    name: 'email',
                    value: 'another-test@test.com'
                }
            });
        });
        const [formValue] = result.current;
        expect(formValue).toEqual({
            ...initialForm,
            email: 'another-test@test.com'
        });
    });

    test('should reset form to default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleValueChange, reset] = result.current;
        act(() => {
            handleValueChange({
                target: {
                    name: 'email',
                    value: 'another-test@test.com'
                }
            });
            reset();
        });
        const [formValue] = result.current;
        expect(formValue).toEqual(initialForm);
    });

});