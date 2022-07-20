export const initialState = {
    basket: [],
    user:null,
};
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":return {
            ...state,
            basket: [...state.basket,action.item]
        }; break;
        case "REMOVE_TO_CART":return {...state}; break;
        default: 
            return state;
    }
}

export default reducer;