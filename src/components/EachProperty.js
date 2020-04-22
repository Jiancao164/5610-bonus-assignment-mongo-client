import React, {Component} from 'react'

export default class EachProperty extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            name: ""
        }
    }

    componentDidMount() {
        this.setState({value: this.props.value});
        this.setState({name: this.props.name})
    }

    render() {
        return(
            <div className={"form-group row"}>
                <label className={"document-field-name col-2 form-label"}>
                    {this.state.name}
                </label>
                <input
                    onChange={(e) => this.setState({value: e.target.value})}
                    value={this.state.value}
                    className={"document-field-name col-10 form-control"}/>
            </div>
        )
    }
}