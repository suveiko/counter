import React from 'react';
import Counter from "../counter/Counter";
import Buttons from "../buttons/Buttons";

type BoardCountType = {
    counter: number
    callBackInc: () => void
    callBackReset: () => void
    minValue: number
    maxValue: number
}

export const BoardCount = ({counter, callBackInc, callBackReset, minValue, maxValue}: BoardCountType) => {
    return (
        <div>
            <Counter counter={counter} maxValue={maxValue}/>
            <Buttons
                counter={counter}
                callBackInc={callBackInc}
                callBackReset={callBackReset}
                minValue={minValue}
                maxValue={maxValue}
            />
        </div>
    );
};
