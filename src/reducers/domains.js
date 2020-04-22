import {CREATE_DOMAIN, DELETE_DOMAIN, FIND_DOMAINS, UPDATE_DOMAIN} from "../actions/domainActions";

const domainReducer = (state = {domains: []}, action) => {
    switch(action.type) {
        case CREATE_DOMAIN:
            return {
                domains: [
                    ...state.domains,
                    action.domain
                ]
            };
        case FIND_DOMAINS:
            return {
                domains: action.domains
            };
        case UPDATE_DOMAIN:
            return {
                domains: state.domains.map(domain =>
                    domain._id === action.domainId ? action.domain : domain
                )
            };
        case DELETE_DOMAIN:
            return {
                domains: state.domains.filter(domain =>
                    domain._id !== action.domainId
                )
            };
        default:
            return state
    }
};

export default domainReducer
