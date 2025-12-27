import React from "react";
import avatar from "../../assets/avataaars.svg";

import Start from "../../componets/Star";

export default function Home() {
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center flex-column bg-success py-5">
        <img src={avatar}  alt=" image " />
        <h1 className='mt-5 text-white fw-bold'>Start Framework</h1>

        <Start color={'#ffffffff'}/>

        <p className=" text-white mt-1">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
