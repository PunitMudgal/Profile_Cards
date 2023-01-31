import React from 'react'
import Profile from "../Images/default_image.jpg";
import nonfav from "../Images/star.png";
import fav from "../Images/yellowStar.png";
// import Star from '../Component/Card';

export default function Card(props) {

  let starIcon = props.info.isFavorite ? fav : nonfav;

  return (
    <main>
      <div className="h-auto  rounded-md shadow-lg m-10 justify-center w-72 flex-col items-center bg-slate-200 border-solid border-2 border-gray-300">
        <div className="flex justify-center">

          {/* Images */}
          <img
            className="h-40 mt-1 border-solid border-2 border-gray-300 rounded-full "
            src={Profile}
            alt="Profile"
          />
        </div>

        <div className="flex-col m-5">
          {/* <Star togglebutton = {togglebutton} starIcon={starIcon} /> */}
          {/* Star button */}
          <img
            onClick={() => props.togglebutton(props.id)}
            className="h-9 mb-3"
            src={starIcon}
            alt="starIcon"
          />

          {/* first and last name  */}
          <h1 className="font-bold text-2xl text-start my-2">
            {props.everything.firstName} {props.everything.lastName}
          </h1>

          {/* Mobile number  */}
          <p className="font-light text-gray-700 my-1">91+ {props.everything.mobileNo}</p>

          {/* email id  */}
          <p className="font-light tracking-tight hover:tracking-wider text-gray-700">{props.everything.emailId}</p>
        </div>
      </div>
    </main>
  )
}
