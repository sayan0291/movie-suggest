import { useDebounce } from "react-use";
import { Loader,Search } from "../components/ui/Search";
import { FetchMovieData } from "../utils/api"
import { useState,useEffect } from "react"
import { MovieCard } from "./MovieCard";

export default function Home(){
    const [errormessage,setErrormessage] = useState("")
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    const [search,setSearch] = useState("");
    const [debouncesearch,setDebouncesearch] = useState("");

    useDebounce(() => setDebouncesearch(search),500,[search])

    useEffect(() => {
        FetchMovieData(setErrormessage,setMovies,setLoading,debouncesearch);
    },[debouncesearch])


    return(
        <>  
            <Search search={search} setSearch={setSearch} />
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
        </>
    )
}