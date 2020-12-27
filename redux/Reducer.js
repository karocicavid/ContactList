const firstState = {
    list:[]
}

function Reducer(state = firstState, action){

    switch(action.type) {
        case 'add':
            if(action.payload.name &&  action.payload.surname ){ //checking nulls
                return {
                    list:[...state.list,action.payload]
                }
            }
            else{
                return {list :[...state.list]}
            }
        case 'clear':
            return {
                list : []
            }
        default: return state;
    }
}

export default Reducer