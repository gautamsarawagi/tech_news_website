import React, { useEffect } from "react";
import { GlobalContextProvider } from "./Context";

function Stories() {
  const { hits, nbPages, isLoading,removePost } = GlobalContextProvider();
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span> {author}</span> | <span> {num_comments} </span>
                comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(objectID)}>Remove</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stories;
