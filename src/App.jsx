import { useState,useEffect } from "react"
import { Navbar } from "./components/shared/Navbar.jsx";
import Home from "./pages/Home.jsx";

export default function App(){

  return(
    <main>
        <div className="pattern" />
        <div className="wrapper">
          <Navbar />
          <Home />
        </div>
    </main>
  )
}