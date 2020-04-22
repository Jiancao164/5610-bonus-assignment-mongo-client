import {CREATE_DOCUMENT, DELETE_DOCUMENT, FIND_DOCUMENTS, UPDATE_DOCUMENT} from "../actions/documentActions";

const documentReducer = (state = {documents: []}, action) => {
    switch(action.type) {
        case CREATE_DOCUMENT:
            return {
                documents: [
                    ...state.documents,
                    action.document
                ]
            };
        case FIND_DOCUMENTS:
            return {
                documents: action.documents
            };
        case UPDATE_DOCUMENT:
            return {
                documents: state.documents.map(document =>
                    document._id === action.documentId ? action.document : document
                )
            };
        case DELETE_DOCUMENT:
            return {
                documents: state.documents.filter(document =>
                    document._id !== action.documentId
                )
            };
        default:
            return state
    }
};

export default documentReducer
