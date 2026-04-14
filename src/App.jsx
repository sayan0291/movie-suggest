import { useState,useEffect } from "react"
import { Navbar } from "./shared/Navbar.jsx";

export default function App(){

  return(
    <main>
        <div className="pattern" />
        <div className="wrapper">
          <Navbar />
        </div>
    </main>
  )
}