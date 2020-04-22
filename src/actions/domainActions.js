export const FIND_DOMAINS = "FIND_DOMAINS";
export const findDomainsAction = (domains) => ({
    domains: domains,
    type: FIND_DOMAINS
});

export const CREATE_DOMAIN = "CREATE_DOMAIN";
export const createDomainAction = (domain) => ({
    type: CREATE_DOMAIN,
    domain: domain
});
export const UPDATE_DOMAIN = "UPDATE_DOMAIN";
export const updateDomainAction = (domain) => ({
    type: UPDATE_DOMAIN,
    domain: domain
});
export const DELETE_DOMAIN = "DELETE_DOMAIN";
export const deleteDomainAction = (domainId) => ({
    type: DELETE_DOMAIN,
    domainId: domainId
});
