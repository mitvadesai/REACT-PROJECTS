export const addNote = (data) => {
    return {
        type: "Add_Note",
        payload: data
    }
}
export const deleteNote = (id) => {
    return {
        type: "Delete_Note",
        payload: id
    }
}


