export const initialState={
    user:false,
    firstName:'',
    lastName:'',
    company:[],
    jobSeekersImage:''
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
        case 'CHANGE_JOB_SEEKER_IMAGE':
            return{
                ...state,
                jobSeekersImage:action.image
            }
        default:
            return state;
    }
}

export default reducer;