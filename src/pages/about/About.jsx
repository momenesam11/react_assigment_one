import React from "react";
import Star from "../../componets/Star";

export default function About() {
  return (
    <>
      <div className="about d-flex justify-content-center align-items-center flex-column bg-success py-5">
              
              <h1 className='mt-5 text-white fw-bold'>About Component</h1>
      
              <Star color={'#ffffff'}/>
      
              <div className="d-flex w-75 gap-5 mt-3 mb-5 pb-5 flex-column flex-md-row">
              <p className=" text-white mt-1">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
              <p className=" text-white mt-1">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
              </div>
            </div>
    </>
  )
}
