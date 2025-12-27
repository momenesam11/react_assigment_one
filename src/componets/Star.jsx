import React from 'react'
import { FaStar } from "react-icons/fa";
export default function Star(probs) {
    console.log(probs);
   let {color} = probs;
  return <>
  <div className="d-flex w-25 justify-content-center align-items-center gap-3 " style={{color:color}}>
          <hr className="w-25  opacity-100" style={{borderColor:color,border:"3px", borderStyle:'solid'}} />
          <FaStar />
          <hr className="w-25  opacity-100" style={{borderColor:color,border:"3px", borderStyle:'solid'}} />
        </div>
  </>
}
