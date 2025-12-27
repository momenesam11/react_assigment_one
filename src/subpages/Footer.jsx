import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialDribbbleCircular,
} from "react-icons/ti";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid py-5">
        <div className="row text-white gap-5 gap-md-0">
          <div className="col-md-4 text-center">
            <h4>LOCATION</h4>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p className="mb-0 mt-2">Clark, MO 65243</p>
          </div>

          <div className="col-md-4 text-center">
            <h4>AROUND THE WEB</h4>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <TiSocialFacebookCircular className="fs-1" />
              <TiSocialTwitterCircular className="fs-1" />
              <TiSocialLinkedinCircular className="fs-1" />
              <TiSocialDribbbleCircular className="fs-1" />
            </div>
          </div>

          <div className="col-md-4 text-center ">
            <h4>ABOUT FREELANCER</h4>
            <p className="mb-0 px-5">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>

        
      </footer>
      <div className="copy w-100 text-center text-white py-4">
          Copyright © Your Website 2021
        </div>
    </>
  );
}
