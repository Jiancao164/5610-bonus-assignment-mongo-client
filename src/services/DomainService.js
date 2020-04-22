import {NUID_DOMAIN_URL, SCHEMA_DOMAIN_URL, WEBDEV_SERVER_URL} from "../common/constant";

export const findDomains = async (nu_id) => {
    let response = await fetch(`${WEBDEV_SERVER_URL}/nuids/${nu_id}/domains`);
    return await response.json()
};

export const createDomain = async (nu_id, domain) => {
    let response = await fetch(`${NUID_DOMAIN_URL}/${nu_id}/${domain}`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

export const findField = async (nu_id, domain) => {
    let response = await fetch(`${SCHEMA_DOMAIN_URL}/${nu_id}/${domain}`);
    return await response.json()
};

export const upateDomain = async (nu_id, domain) => {
    let response = await fetch(`${NUID_DOMAIN_URL}/${nu_id}/${domain}`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};