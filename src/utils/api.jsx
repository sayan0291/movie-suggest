import axios from "axios";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const FetchMovieData = async (setErrormessage,setMovies) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/discover/movie`, {
            params: {
                api_key: API_KEY,
                include_adult: false,
                include_video: false,
                language: "en-US",
                sort_by: "popularity.desc",
            }
        })

        if(!response.data || !response.data.results){
            throw new Error("invalid response");
        }else{
            setMovies(response.data.results);
        }
        
    }catch(err){
        console.log("error",err)
        setErrormessage("Error fetching movies.Try again later...")
    }
}