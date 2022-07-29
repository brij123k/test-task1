import React ,{useState}from 'react'
import "./test-task.css"

const Testtask = (props) => {
    const[remark,setyRemark]=useState();
    const[date,setydate]=useState();
    const[amount,setyAmount]=useState();
    const[payment,setypayment]=useState();

   const remarkChangeHandler=(event)=>{
    setyRemark(event.target.value);
   }
   const dateChangeHandler=(event)=>{
    setydate(event.target.value);
   }
   const amountChangeHandler=(event)=>{
    setyAmount(event.target.value);
   }
   const paymentChangeHandler=(event)=>{
    setypayment(event.target.value);
   }
   const submitHandler=(event)=>{
      event.preventDefault();
      const expanseData = {
        date:new Date(date),
        amount:amount,
        payment:payment,
        remark:remark,
      }
      props.setData(expanseData);
      console.log(expanseData)
      setyAmount('');
      setyRemark('');
      setydate('');
   }
  return (
    <>
    <div className='submitform'>
        <h3>Task</h3>
    </div>
    <div className='main'>
        <h4><u>Receipt Details</u></h4>
        <form onSubmit={submitHandler} className='text'>
            <div className='tap'>
            <label>Date : </label>
               <input className="edate" type="date" value={date} placeholder= 'Enter Date' onChange={dateChangeHandler} ></input>
            </div>
            <div className='tap'>
            <label>Amount: </label>
               <input placeholder= 'Enter Amount' value={amount} onChange={amountChangeHandler}></input>
            </div>
            <div className='tap'>
            <label>Payment Mode:</label>
                <select onChange={paymentChangeHandler}> 
                    <option>Select payment method</option>
                    <option>Cash</option>
                    <option>Upi</option>
                    <option>Razorpay</option>
                    <option>Wallet</option>
                </select>
            </div>
            <div className='tap'>
            <label>Remark:</label>
               <input placeholder= 'Enter remark' value={remark} onChange={remarkChangeHandler}></input>
            </div>
            <div className='tap'>
        <div className='btn'>
        <button className='btn-2'>CANCEL</button>
            <button className='btn-1'>SUBMIT</button>
            </div>  
            </div>
        </form>
    </div>
    </>
  )
}

export default Testtask