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
            case ('EDIT_NOTE'):
                const updateNote= action.payload
                const updateNotes=state.notes.map(note=>{

                    if(updateNote.id === note.id){
                        return  updateNote
                    }
                    return note
                })
            return{
                notes:updateNotes
                
            }
        default:
           return state
    }
}