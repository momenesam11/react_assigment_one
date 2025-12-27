import React from "react";
import image1 from "../../assets/N2014-016-panorama-cascade-langevin_uxga.jpg";
import image2 from "../../assets/OIP.webp";
import Start from "../../componets/Star";
import { FaPlus } from "react-icons/fa";


export default function Portfolio() {
  return (
    <>
      <div className="contact d-flex justify-content-center align-items-center flex-column bg-success py-5">
        <h1 className="mt-5 fw-bold" style={{ color: "#2C3E50" }}>
          portfolio component

        </h1>
        <Start color={"#2C3E50"} />


        <div className="container mt-5">
          <div className="row g-4">
            <div className="col-md-4 ">
              
              <img src={image1} className="rounded-2 w-100"/> 
            </div>

            <div className="col-md-4 ">
              <img src={image2} className="rounded-2 w-100"/> 
            </div>

            <div className="col-md-4 ">
              <img src={image2} className="rounded-2 w-100"/> 
            </div>

            <div className="col-md-4 ">
              <img src={image1} className="rounded-2 w-100"/> 
            </div>

            <div className="col-md-4 ">
              <img src={image2} className="rounded-2 w-100"/> 
            </div>

            <div className="col-md-4 ">
              <img src={image2} className="rounded-2 w-100"/> 
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
