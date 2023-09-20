export const initialState={
    user:null,
    firstName:'',
    lastName:'',
    company:[]
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
                firstName:action.firstName,
            }
        case 'ADD_COMPANY':
            return {
                ...state,
                company:action.company
            }
        default:
            return state;
    }
}

export default reducer;