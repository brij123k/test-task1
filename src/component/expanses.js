import React from 'react'
import Expanse from "./expanseItem";

const expanses = (props) => {
  
  return (
    <div>
      { 
      props.items.map((val, index) =>{
        return <Expanse date={val.date}
        amount={val.amount} 
        remark={val.remark}
        payment={val.payment}
        />
      }) 
      }
     </div>
  )
}

export default expanses