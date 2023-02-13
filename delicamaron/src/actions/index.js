import axios from "axios";

export function getRecetas(){
    return async function(dispatch){
        var json = await axios.get("/recetas")

        return dispatch({
            type:"GET_RECETAS",
            payload:json.data
        })
    }
}

export function CreateFood(payload){
    return async function(dispatch){
        const response = await axios.post("/recetas",payload);
        return response
    }
}

export function getBebidas(){
    return async function(dispatch){
   let infobe = await axios.get("/bebidas")
   return dispatch({
    type:"GET_BEBIDAS",
    payload:infobe.data
   })
   }
}

export function createBebidas(payload){
    return async function (dispatch){
        const response = await axios.post("/bebidas",payload);
        return response
    }
}

