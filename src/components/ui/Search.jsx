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

export const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
      </div>
    </div>
  );
}
