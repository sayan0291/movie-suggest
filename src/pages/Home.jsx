import { Loader } from "../components/ui/Search";
import { FetchMovieData } from "../utils/api"
import { useState,useEffect } from "react"
import { MovieCard } from "./MovieCard";

export default function Home(){
    const [errormessage,setErrormessage] = useState("")
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        
        FetchMovieData(setErrormessage,setMovies,setLoading);
    },[])


    return(
        <section className="all-movies">
            <h2 className="text-white">All Movies:</h2>
            {loading ? (
                <Loader />
            ) : errormessage ? (
                <p className="text-red-500">{errormessage}</p>
            ) : (
                <ul>
                    {movies.map((movie) => 
                        (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    )}
                </ul>
            )}
        </section>
    )
}