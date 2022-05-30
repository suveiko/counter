import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'

type UniversalInputType = {
    value: number
    changeValue: (value: number) => void
    error?: boolean
}

export const UniversalInput = ({value, changeValue, error}: UniversalInputType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => changeValue(e.currentTarget.valueAsNumber)
    const inputClassName = error ? s.error : s.input

    return (
        <input
            className={inputClassName}
            type="number"
            value={value}
            onChange={onChangeInputHandler}
        />
    );
};
