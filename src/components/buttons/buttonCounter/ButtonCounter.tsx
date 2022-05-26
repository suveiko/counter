import React from 'react';

type ButtonCounterType = {
    className: string
    onClick: () => void
    disabled: boolean
    name: string
}

export const ButtonCounter = ({className,onClick, disabled, name}:ButtonCounterType) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{name}</button>
    );
};
