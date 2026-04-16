import { useState,useEffect } from "react"
import { Navbar } from "./components/shared/Navbar.jsx";
import { Search } from "./components/ui/Search.jsx";
import Home from "./pages/Home.jsx";

export default function App(){
  const [search,setSearch] = useState("");

  return(
    <main>
        <div className="pattern" />
        <div className="wrapper">
          <Navbar />
          <Search search={search} setSearch={setSearch} />
          <Home />
        </div>
    </main>
  )
}