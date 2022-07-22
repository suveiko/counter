import {ChangeEvent, memo, useCallback} from 'react';

import s from './UniversalInput.module.css'


type UniversalInputType = {
    value: number
    changeValue: (value: number) => void
    error: boolean
}


export const UniversalInput = memo(({value, changeValue, error}: UniversalInputType) => {

    const onChangeInputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.currentTarget.valueAsNumber ? e.currentTarget.valueAsNumber : 0)
    }, [changeValue])
    const inputClassName = error ? s.error : s.input

    return (
        <input
            className={inputClassName}
            type="number"
            value={value.toFixed()}
            onChange={onChangeInputHandler}
        />
    )
})
