export const addNote = (data) => {
    return {
        type: "Add_Note",
        payload: data
    }
}
export const updateNote = (data) => {
    return {
        type: "Update_Note",
        payload: data
    }
}
export const getAllNote = () => {
    return {
        type: "Get_All_Note",
    }
}
export const deleteNote = (id) => {
    return {
        type: "Delete_Note",
        payload: id
    }
}
export const getNote = (id) => {
    return {
        type: "Get_Note",
        payload: id
    }
}
export const loading = () => {
    return {
        type: "Loading",
    }
}
export const getAllNotesAsync = () => {
    return (dispatch) => {
        dispatch(loading())

        setTimeout(()=> {
            dispatch(getAllNote())
        }, 2000)
    }
}
