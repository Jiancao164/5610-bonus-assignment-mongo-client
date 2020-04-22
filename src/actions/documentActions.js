export const FIND_DOCUMENTS = "FIND_DOCUMENTS";
export const findDocumentsAction = (documents) => ({
    documents: documents,
    type: FIND_DOCUMENTS
});

export const CREATE_DOCUMENT = "CREATE_DOCUMENT";
export const createDocumentAction = (document) => ({
    type: CREATE_DOCUMENT,
    document: document
});
export const UPDATE_DOCUMENT = "UPDATE_DOCUMENT";
export const updateDocumentAction = (document) => ({
    type: UPDATE_DOCUMENT,
    document: document
});
export const DELETE_DOCUMENT = "DELETE_DOCUMENT";
export const deleteDocumentAction = (documentId) => ({
    type: DELETE_DOCUMENT,
    documentId: documentId
});
