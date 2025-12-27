import React from 'react'
import Navbar from '../subpages/Navbar'
import Footer from '../subpages/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>    
    <Outlet/>
    <Footer/>
    </>
  )
}
