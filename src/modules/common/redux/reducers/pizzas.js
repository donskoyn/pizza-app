const initialState={
    items:[]
}

const pizzasReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_PIZZAS":
            return  {...state,items:action.payload}
        default:
            return state
    }
}

export default pizzasReducer;