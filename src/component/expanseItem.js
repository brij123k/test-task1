import React,{useState} from 'react'
import '../component/expanseItem.css'
import Date from "./expanseDate.js"
const ExpanseItem = (props) => {
  return (
    <div className="expanse-data">
       <Date date={props.date}/>
        <div className="expanse-amount">{props.amount} $</div>
        <div>{props.payment}</div>
        <div className="expanse-remark">
        {props.remark}
        </div>
    </div>
  )
}
export default ExpanseItem
