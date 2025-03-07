// const initialState = {
//     Note: JSON.parse(localStorage.getItem('Note')) || [],
// }


// export const NoteReducer = (state = initalState, action) => {
//     switch (action.type) {
//         case "Add_Note":
//             let oldData = [...state.Note, action.payload];
//             localStorage.setItem('Note', JSON.stringify(oldData));
//             return {
//                 ...state,
//                 Note: [...state.Note, action.payload],
               
//             }

    

//         case "Delete_Note":
//             let allData = JSON.parse(localStorage.getItem('Note')) || []
//             let deletedNote = allData.filter((data) => data.id != action.payload)
//             localStorage.setItem('Note', JSON.stringify(deletedNote));
//             return {
//                 ...state,
//                 Note: deletedNote
//             }
            
//     }
// }


// export const NoteReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "Add_Note":
//             let updatedNotes = [...state.Note, action.payload];
//             localStorage.setItem('Note', JSON.stringify(updatedNotes));
//             return {
//                 ...state,
//                 Note: updatedNotes,
//             };

//         case "Delete_Note":
//             let filteredNotes = state.Note.filter((data) => data.id !== action.payload);
//             localStorage.setItem('Note', JSON.stringify(filteredNotes));
//             return {
//                 ...state,
//                 Note: filteredNotes,
//             };

//         default:
//             return state; // Always return state if action type is not matched
//     }
// };


const initialState = {
    Note: JSON.parse(localStorage.getItem('Note')) || [],
    isCreated: false // ✅ Added `isCreated` flag
};

export const NoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Note":
            let updatedNotes = [...state.Note, action.payload];
            localStorage.setItem('Note', JSON.stringify(updatedNotes));
            return {
                ...state,
                Note: updatedNotes,
                isCreated: true, // ✅ Set flag after adding note
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
