export const Search = ({search,setSearch}) => {
    

    return(
        <div className="search">
            <div>
                <img src="search.svg" alt="search image" />
                <input type="text" 
                placeholder="Search for a movie"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />
            </div>
        </div>
    )
}