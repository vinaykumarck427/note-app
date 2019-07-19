export const setNote = (note) => {
    return {type:'SET_NOTE', payload:note}
}
export const setNotes = (notes) => {
    return { type: 'SET_NOTES', payload: notes }
}

export const removeNote = (id) => {
    return {type:'REMOVE_NOTE', payload:id}
}



