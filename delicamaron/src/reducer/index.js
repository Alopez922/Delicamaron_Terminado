const initialState = {
    recetas: [],
    allrecetas:[],
    camarones:[],
    bebidas:[],
  };

  function rootReducer(state = initialState,action){
    switch(action.type){
        case "GET_RECETAS":
            return{
                ...state,
                recetas:action.payload,
                allrecetas:action.payload,
            }

        case "CREATE_FOOD":
            return{
                ...state,
              }
        case "GET_BEBIDAS":
            return{
              ...state,
              bebidas:action.payload
            }

        case "CREATE_BEBIDAS":
              return{
                  ...state,
                }

      
        
            default:
                return state;
    }
  }

  export default rootReducer;