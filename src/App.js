import React,{useContext} from 'react'

import Search from "./Search"
import Pagination from './Pagination'
import Stories from './Stories'

import "./App.css"

// import {GlobalContextProvider} from "./Context"
// import { AppContext,GlobalContextProvider } from './Context'
function App() {

  // const {hits,nbPages,isLoading} = GlobalContextProvider();
  // const data = useContext(AppContext)
  // const data2 = GlobalContextProvider()
  
  return (
    <div>
      <Search/>
      <Pagination/>
      <Stories/>
      
    </div>
  )
}

export default App