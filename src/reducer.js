const reducer = (state,action) => {
    const current_page = state.page
    const total_page = state.nbPages

    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }
            break;
        case "GET_STORIES":
            return{
                ...state,
                hits:action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading:false

            }
            break;
        case "SEARCH_STORIES" :
            return{
                ...state,
                query: action.payload
            }
        case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter((current) => {
                    return current.objectID !== action.payload;
                }),
            }
            break;
        case "PREVIOUS_PAGE":
            return{
                ...state,
                // page: state.page - 1
                page : (state.page > 0 ? state.page-1 : 0)
            }
            break;
        case "NEXT_PAGE":
            return{
                ...state,
                // page:state.page + 1
                page : (state.page < state.nbPages-1 ? state.page + 1 : state.nbPages-1)

            }
        default:
            break;
    }
}

export default reducer;