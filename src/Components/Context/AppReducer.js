export default (state, action)=>{
    switch (action.type) {
        case('REMOVE_NOTE'):
        return {
            notes:state.notes.filter(note=> {
                return note.id !== action.payload
            })
        }
        case ('ADD_NOTE'):
            return{
                notes:[action.payload, ...state.notes]
            }
        default:
           return state
    }
}