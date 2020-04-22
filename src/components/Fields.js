import React, {Component} from 'react'
import {findField} from "../services/DomainService";

export default class Fields extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            fields: {}
        }
    }
    componentDidMount= async () => {
        this.setState({title: this.props.domain});
        this.setState({fields: await findField(this.props.nu_id, this.props.domain).then(e => e)})
    }
    render() {
        return (
            <div>
                {!this.props.editing &&
                <div>
                    <a href={`domains/${this.props.domain}`}>
                    {this.props.domain}
                    </a>
                    <button
                        onClick={() => this.props.edit(this.props.domain)}
                        className={"btn btn-warning float-right"}>
                        Edit
                    </button>
                </div>}
                {this.props.editing &&
                <div>
                    <div>
                        <div className={"float-right"}>
                            <button
                                onClick={() => this.props.edit("")}
                                className={"btn btn-info"}>
                                Cancel
                            </button>
                            <button className={"btn btn-success"}>
                                Save
                            </button>
                            <button className={"btn btn-danger"}>
                                Delete
                            </button>
                        </div>
                        <div className="form-group">
                            <label>Domain:</label>
                            <input type="text"
                                   onChange={e => this.setState({title : e.target.value})}
                                   value={this.state.title}
                                   className="form-control col-6"/>
                        </div>
                        <hr/>
                        <div className={"row"}>
                            <div className={"col-4"}>
                                Field Name
                            </div>
                            <div>
                                Type
                            </div>
                        </div>
                        <div >
                            {this.state.fields.fields &&
                            this.state.fields.fields.map(field =>
                                <div key={field._id} >
                                    <div className={"row"}>
                                        <div className={"col-4 "}>
                                            <input className={"form-control"} value={field.name}/>
                                        </div>
                                        <div className={"col-4"}>
                                            <select className={"form-control"} value={field.type}>
                                                <option value={"String"}>String</option>
                                                <option value={"Number"}>Number</option>
                                                <option value={"Date"}>Date</option>
                                                <option value={"Boolean"}>Boolean</option>
                                            </select>
                                        </div>
                                        <button className={"float-right btn btn-danger"}>
                                            Delete
                                        </button>
                                        <button className={" float-right btn btn-info"}>
                                            M
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-4 "}>
                            <input className={"form-control"}/>
                        </div>
                        <div className={"col-4"}>
                            <select className={"form-control"}>
                                <option value={"String"}>String</option>
                                <option value={"Number"}>Number</option>
                                <option value={"Date"}>Date</option>
                                <option value={"Boolean"}>Boolean</option>
                            </select>
                        </div>
                        <button className={"float-right btn btn-success"}>
                            Add
                        </button>
                    </div>
                </div>}

            </div>
        )
    }
}