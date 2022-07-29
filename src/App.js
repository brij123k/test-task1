import React, { useState } from 'react';
import Expanses from "./component/expanses";
import Test from "./component/test-task"
// import NewExpanse from './component/newex/newExpanse';
const App = () => {
  const [new1,setNew1]=useState([]);


  const setData = (data) => {
    console.log("set data called");
    setNew1([...new1, data]);

    console.log("new1 is ", new1);
  }
//  let expanseData=[
//   {
//     id:"a1",
//     date: new Date(2022, 5, 2),
//     amount:400,
//     remark:"pocket money"
//   },
//   {
//     id:"a2",
//     date: new Date(2023, 3, 3),
//     amount:4070,
//     remark:"pocket money"
//   },
//   {
//     id:"a3",
//     date: new Date(2021, 1, 1),
//     amount:4700,
//     remark:"pocket money"
//   },
//  ];
  return (
    <>
    <Test setData={setData}/>
    <Expanses items={new1}/>
    </>
  )
}

export default App