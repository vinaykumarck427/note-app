
const reducerInitialNotes = []
const notesReducer = (state=reducerInitialNotes, action) => {
	switch(action.type){
		case 'SET_NOTES':{
			return [...action.payload]
		}
		case 'REMOVE_NOTE':{
			return state.filter(note => note._id !== action.payload)
		}
		case 'SET_NOTE' : {
			return [...state, action.payload]
		}
		default : {
			return[...state]
		}
	}
}
export default notesReducer