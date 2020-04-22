import React, {Component} from 'react'
import {createDomain, findDomains} from "../services/DomainService";
import {createDomainAction, findDomainsAction} from "../actions/domainActions";
import {connect} from "react-redux";
import {WEBDEV_SERVER_URL} from "../common/constant";
import Fields from "./Fields";

class Domains extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            editing: ""
        }
    }

    componentDidMount() {
        this.props.findDomains(this.props.match.params.nu_id)
    }

    edit = (domain) => {
        this.setState({editing: domain})
    };

    render() {
        return (
            <div className={"container-fluid"}>
                <div>
                    <h1>Domains</h1>
                </div>
                <button
                    onClick={() => {this.props.history.push(`/`);}}
                    className={"btn btn-primary"}>
                    Back
                </button>
                <hr/>
                <ul className={"list-group"}>
                    {this.props.domains && this.props.domains.map(domain =>
                        <li key={domain} className={`list-group-item ${domain===this.state.editing? `active` : ''}`}>
                            <Fields
                                nu_id={this.props.match.params.nu_id}
                                edit={this.edit}
                                domain={domain}
                                editing={domain===this.state.editing}/>
                        </li>
                    )}
                </ul>
                <hr/>
                <div className="input-group mb-3">
                    <input type="text"
                           onChange={(e) => this.setState({title: e.target.value})}
                           value={this.state.title}
                           className="form-control"
                           placeholder="Domain title"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button
                                onClick={() => this.props.createDomain(this.props.match.params.nu_id, this.state.title)}
                                className="btn btn-primary" type="button" id="button-addon2">
                                Add Domain
                            </button>
                        </div>
                </div>
            </div>
        )
    }
}
const stateToPropertyMapper = (state) => ({
    domains: state.domains.domains
});

const dispatchToPropertyMapper = (dispatch) => ({
    createDomain: (nu_id, domain) =>
        createDomain(nu_id, domain)
            .then(actualDomain =>
                dispatch(createDomainAction(actualDomain._domain))),
    findDomains: (nu_id) =>
        findDomains(nu_id)
            .then(domains =>
                dispatch(findDomainsAction(domains)))

    // updateDomain: (domainId, domain) => {
    //     updateDomain(domainId, domain)
    //         .then(actualDomain =>
    //             dispatch(updateDomainAction(actualDomain)))
    // },
    // deleteDomain: (domainId) => {
    //     deleteDomain(domainId)
    //         .then(status =>
    //             dispatch(deleteDomainAction(domainId)))
    //}
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Domains)