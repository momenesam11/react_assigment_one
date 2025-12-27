import React from 'react'
import Start from "../../componets/Star";


export default function Contact() {
  return (
    <>
      <div className="contact d-flex justify-content-center align-items-center flex-column bg-success py-5">
              
              <h1 className='mt-5 fw-bold' style={{color:'#2C3E50'}}>conatct section</h1>
      
              <Start color={'#2C3E50'}/>
      
              <div className="contanier w-100 mx-5 px-5">
                <div className="row w-75 align-items-center justify-content-center me-auto ms-auto  mt-5">
                <div className="col-md-9 ">
                  
              <div>
              <div className="mb-5">
                <input type="text" className="form-control border border-bottom-2 border-top-0 border-end-0 border-start-0 py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='userName'/>
              </div>
              <div className="mb-5">
                <input type="number" className="form-control border border-bottom-2 border-top-0 border-end-0 border-start-0 py-2" id="exampleInputPassword1"placeholder='userAge' />
              </div>
              <div className="mb-5">
                <input type="email" className="form-control border border-bottom-2 border-top-0 border-end-0 border-start-0 py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='userEmail'/>
              </div>
              <div className="mb-5">
                <input type="password" className="form-control border border-bottom-2 border-top-0 border-end-0 border-start-0 py-2" id="exampleInputPassword1"placeholder='userPassword' />
              </div>
              
              <button type="submit" className="btn text-white" style={{backgroundColor:"#1ABC9C"}}>Send Message</button>
            </div>

                </div>
              </div>
              </div>
            </div>
    </>
  )
}
