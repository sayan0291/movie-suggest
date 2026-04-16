import { FetchMovieData } from "../utils/api"
import { useState,useEffect } from "react"

export default function Home(){
    const [errormessage,setErrormessage] = useState("")
    const [movies,setMovies] = useState([])

    useEffect(() => {
        FetchMovieData(setErrormessage,setMovies);
    },[])


    return(
        <h2 className="text-white">hello{errormessage}</h2>
    )
}