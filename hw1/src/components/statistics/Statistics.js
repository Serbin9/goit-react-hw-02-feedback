import React from 'react'
import s from './statistics.module.css'

const Statistics = ({good, neutral, bad, total, percentage})=>{

return(
    <>
    <p className={s.text}>Good : {good}</p>
    <p className={s.text}>Neutral: {neutral}</p>
    <p className={s.text}>Bad: {bad}</p>
    <p className={s.text}>Total: {total()}</p>
    <p className={s.text}>Percentage: {percentage()}%</p>
    </>
)
}
export default Statistics