import React from 'react'

const expanseDate = (props) => {
    const month=props.date.toLocaleString('en-Us',{month: 'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-Us',{day: '2-digit'});
  return (
    <div>{month} {year} {day}</div>
  )
}

export default expanseDate