// import React from 'react'

// function Search() {
//   return (
//     <div>Search</div>
//   )
// }

// export default Search
import React from "react";
import { GlobalContextProvider } from "./Context";

const Search = () => {
  const { query, searchPost } = GlobalContextProvider();
  return (
    <>
      <h1>Gautam Tech Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;