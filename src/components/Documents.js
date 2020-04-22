import React, {Component} from 'react'
import Fields from "./Fields";
import {createDocument, findDocuments, upateDocument} from "../services/DocumentService";
import {createDocumentAction, findDocumentsAction, updateDocumentAction} from "../actions/documentActions";
import connect from "react-redux/es/connect/connect";
import DocumentItem from "./DocumentItem";

class Documents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            editing: ""
        }
    }

    componentDidMount() {
        console.log(this.props.findDocuments(this.props.match.params.nu_id, this.props.match.params.collection_id))
    }

    edit = (document) => {
        this.setState({editing: document._id})
    };
    
    render() {
        return (
            <div>
                <h1>{this.props.match.params.collection_id}</h1>
                <button
                    onClick={() => {this.props.history.push(`/nuids/${this.props.match.params.nu_id}/domains`);}}
                    className={"btn btn-primary"}>Back</button>
                <hr/>
                <ul className={"list-group"}>
                    {this.props.documents && this.props.documents.map(document =>
                        <li key={document._id} className={`list-group-item ${document._id===this.state.editing? `active` : ''} `}>
                            <DocumentItem
                                updateDocument={this.props.updateDocument}
                                edit={this.edit}
                                document={document}
                                editing={document._id===this.state.editing}/>
                        </li>
                    )}
                </ul>
                <hr/>
                <div className="input-group mb-3">
                    <input type="text"
                           onChange={(e) => this.setState({title: e.target.value})}
                           value={this.state.title}
                           className="form-control"
                           placeholder="Document title"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button
                            onClick={() => this.props.createDocument(this.props.match.params.nu_id, this.state.title)}
                            className="btn btn-primary" type="button" id="button-addon2">
                            Add Document
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    documents: state.documents.documents
});

const dispatchToPropertyMapper = (dispatch) => ({
    createDocument: (nu_id, document) =>
        createDocument(nu_id, document)
            .then(actualDocument =>
                dispatch(createDocumentAction(actualDocument._document))),
    findDocuments: (nu_id, collection_id) =>
        findDocuments(nu_id, collection_id)
            .then(documents =>
                dispatch(findDocumentsAction(documents))),

    updateDocument: (nu_id, domain, document_id, newDocument) => {
        upateDocument(nu_id, domain, document_id, newDocument)
            .then(actualDocument =>
                dispatch(updateDocumentAction(actualDocument)))
    },
    // deleteDocument: (documentId) => {
    //     deleteDocument(documentId)
    //         .then(status =>
    //             dispatch(deleteDocumentAction(documentId)))
    //}
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Documents)