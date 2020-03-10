import React from 'react'
import s from './button.module.css'
const FeedbackOptions =({onHandleClick})=>{
    return(
        <div>
        <button className={s.buttonGood} onClick={onHandleClick} type="button" name="good">Good</button>
        <button className={s.buttonNeutral} onClick={onHandleClick} type="button" name="neutral">Neutral</button>
        <button className={s.buttonBad} onClick={onHandleClick} type="button" name="bad">Bad</button>
        </div>
    );
};
export default FeedbackOptions