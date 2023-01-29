import React, { useState } from "react";
import Card from './Component/Card';
import Navbar from './Component/Navbar';
import Data from './Data';


export default function App(props) {

  const [info, setInfo] = useState(Data);
 
function togglebutton(id){
  setInfo(preInfo => {
    return preInfo.map((square) => {
      return {
        ...square, isFavorite: !square.isFavorite,
      }
    })
  })
}

  // function togglebutton(id) {
  //   setInfo((preInfo) => {
  //     return {
  //       ...preInfo,                 // here took the whole value of info from the hook and changed the isFavorite value to opposite whenever its clicked
  //       isFavorite: !preInfo.isFavorite,
  //     };
  //   });
  // }

  const Element = info.map((square) => (
    <Card info={info} togglebutton={togglebutton} key={square.id} everything={square} />
  ))
  // console.log(info)

  return (
    <>
      <Navbar />
      <div className="flex justify-cente items-center">
        {Element}
        {/* <Card info={info} togglebutton={togglebutton} /> */}
      </div>
    </>
  );
}
