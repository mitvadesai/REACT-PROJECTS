const initialState = {
    Note: JSON.parse(localStorage.getItem('Note')) || [],
    isCreated: false 
};

export const NoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Note":
            let updatedNotes = [...state.Note, action.payload];
            localStorage.setItem('Note', JSON.stringify(updatedNotes));
            return {
                ...state,
                Note: updatedNotes,
                isCreated: true, 
            };

        case "Delete_Note":
            let filteredNotes = state.Note.filter((data) => data.id !== action.payload);
            localStorage.setItem('Note', JSON.stringify(filteredNotes));
            return {
                ...state,
                Note: filteredNotes,
            };

        default:
            return state;
    }
};
