import React from 'react';
import { RegisterOptions, FieldErrors } from 'react-hook-form';

type InputFieldProps = {
    register: any;
    name: string;
    type: string;
    errors: FieldErrors;
    validation?: RegisterOptions
};

const InputField: React.FC<InputFieldProps> = ({ register, name, type, errors, validation }) => (
    <>
        <input type={type} {...register(name, validation)} />
        {errors[name] && <p>This field is required</p>}
    </>
);

export default InputField;