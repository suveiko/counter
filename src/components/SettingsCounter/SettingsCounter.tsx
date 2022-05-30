import React from 'react';
import {UniversalButton} from "../UniversalButton/UniversalButton";
import s from './SettingsCounter.module.css'
import {UniversalInput} from "../UniversalInput/UniversalInput";

type SettingsCounter = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    counter: number
    // setStatus: () => void
    // status: StatusType
}

export const SettingsCounter = ({
                                    minValue,
                                    maxValue,
                                    changeMaxValue,
                                    changeMinValue,
                                    // setStatus,
                                    // status
                                }: SettingsCounter) => {
    const error = maxValue <= minValue ? s.settingStringError : s.settingString
    return (
        <div className={s.setting}>
            <div className={error}>
                <span style={{color: 'white'}}>Min Value:</span>
                <UniversalInput value={minValue} changeValue={changeMinValue} error={maxValue <= minValue}/>
            </div>
            <div className={error}>
                <span style={{color: 'white'}}>Max Value:</span>
                <UniversalInput value={maxValue} changeValue={changeMaxValue} error={maxValue <= minValue}/>
            </div>

            <UniversalButton  onClick={() => {
            }} disabled={false} name='set'/>
        </div>
    );
};


// <div className={style.setting}>
//     <div className={style.values}>
//         <div className={error}>
//             <div className={style.inputName}>
//                 MAX VALUE
//             </div>
//             <div>
//                 <InputNumber callBack={ChangeMaxValue}
//                              value={maxValue}
//                              error={maxValue <= startValue}
//                 />
//             </div>
//         </div>
//         <div className={error}>
//             <div className={style.inputName}>
//                 START VALUE
//             </div>
//             <div>
//                 <InputNumber callBack={ChangeStartValue}
//                              value={startValue}
//                              error={maxValue <= startValue}
//                 />
//             </div>
//         </div>
//     </div>
//     <div className={style.button}>
//         <div>
//             <Button name={'SET'}
//                     callBack={() => {
//                     }}
//                     disabled={false}/>
//         </div>
//     </div>
// </div>
// )
// }