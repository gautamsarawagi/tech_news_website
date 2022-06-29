import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const Api = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  page: 0,
  nbPages: 0,
  query: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   dispatch({
  //     type:"SET_LOADING"
  // })
  const searchPost = (searching_content) => {
    dispatch({
      type:"SEARCH_STORIES",
      payload:searching_content
    })
  }
  const fetchApiData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({
      type:"REMOVE_POST",
      payload: post_ID
    })
  }

  const getPrevPage = () => {
    dispatch({
      type: "PREVIOUS_PAGE",
    })
  }

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    })
  }

  useEffect(() => {
    fetchApiData(`${Api}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider value={{ ...state,removePost,searchPost,getPrevPage,getNextPage }}>{children}</AppContext.Provider>
  );
};

const GlobalContextProvider = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, GlobalContextProvider };
