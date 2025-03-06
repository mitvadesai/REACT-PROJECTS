const initalState = {
    Note: JSON.parse(localStorage.getItem('Note')) || [],
    Note: null,
    isCreated: false,
    isUpdate: false,
}


export const NoteReducer = (state = initalState, action) => {
    switch (action.type) {
        case "Add_Note":
            let oldData = [...state.Note, action.payload];
            localStorage.setItem('Note', JSON.stringify(oldData));
            return {
                ...state,
                Note: [...state.Note, action.payload],
                isCreated: true
            }

        case "Get_All_Note":
            let allNote = JSON.parse(localStorage.getItem('Note')) || []
            return {
                ...state,
                isCreated: false,
                isUpdate: false,
                Note: allNote,
                isLoading: false
            }

        case "Delete_Note":
            let allData = JSON.parse(localStorage.getItem('Note')) || []
            let deletedNote = allData.filter((data) => data.id != action.payload)
            localStorage.setItem('Note', JSON.stringify(deletedNote));
            return {
                ...state,
                isCreated: false,
                Note: deletedNote
            }

        case "Get_Note":
            let allDatas = JSON.parse(localStorage.getItem('Note')) || []
            let singleNote = allDatas.find(data => data.id == action.payload)
            return {
                ...state,
                recipe: singleNote
            }

        case "Update_Note":
            let data = JSON.parse(localStorage.getItem('Note')) || []
            let updatedData = data.map((Note) => {
                if (Note.id == action.payload.id) {
                    return action.payload
                } else {
                    return Note
                }
            })
            localStorage.setItem('Note', JSON.stringify(updatedData));
            return {
                ...state,
                recipe: null,
                isUpdate: true,
                Note: updatedData
            }

        case "Loading":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}