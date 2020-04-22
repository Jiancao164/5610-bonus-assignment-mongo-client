import React, {Component} from 'react'
import Fields from "./Fields";
import EachProperty from "./EachProperty";

export default class DocumentItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            fields: {}
        }
    }
    componentDidMount() {
        this.setState({title: this.props.document.title});
        this.setState({fields: this.props.document})
    }
    render() {
        return (

            <div>
                {!this.props.editing &&
                <div>
                    <a href={`documents/${this.props.document}`}>
                    {this.props.document.title}
                    </a>
                    <button
                        onClick={() => this.props.edit(this.props.document)}
                        className={"btn btn-warning float-right"}>
                        Edit
                    </button>
                </div>}
                {this.props.editing &&
                <div>
                    <div className={"row"}>
                        <div className={"col-10"}>
                            <ul className={"list-group"}>
                                {this.state.fields && Object.entries(this.state.fields).map(([key,value]) =>
                                    <li key={key} className={"list-group-item"}>
                                        <div className={"form-group row"}>
                                            <label className={"document-field-name col-2 form-label"}>
                                                {key}
                                            </label>
                                            <input
                                                onChange={(e) => this.setState({value: e.target.value})}
                                                value={value}
                                                className={"document-field-name col-10 form-control"}/>
                                        </div>
                                            {/*<EachProperty name={key} value={value} updateDocument={this.props.updateDocument}/>*/}
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className={"col-2"}>
                            <div>
                                <button
                                    onClick={() => this.props.edit("")}
                                    className={"btn btn-block btn-info"}>
                                    Cancel
                                </button>
                            </div>
                            <div>
                                <button
                                    className={"btn btn-block btn-success"}>
                                    Save
                                </button>
                            </div>
                            <div>
                                <button className={"btn btn-block btn-danger"}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}