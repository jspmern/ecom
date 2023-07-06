const filterReducer=(state,action)=>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            //here i am taking array because i dont want to use orignal array i want to return new array
            return {
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload]

            }
            
           
    
        default:
             return state
    }

}
export default filterReducer