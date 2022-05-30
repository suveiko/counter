import React from 'react';
import s from './UniversalButton.module.css'

type ButtonCounterType = {
    onClick: () => void
    disabled: boolean
    name: string
}

export const UniversalButton = ({onClick, disabled, name}:ButtonCounterType) => {
    return (
        <button className={s.button} onClick={onClick} disabled={disabled}>{name}</button>
    );
};
