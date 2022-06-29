import React from "react";
import { GlobalContextProvider } from "./Context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = GlobalContextProvider();
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;