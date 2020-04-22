import {NUID_DOMAIN_URL, WEBDEV_SERVER_URL} from "../common/constant";

export const findDocuments = async (nu_id, collection_id) => {
    let response = await fetch(`${NUID_DOMAIN_URL}/${nu_id}/${collection_id}`);
    return await response.json()
};

export const createDocument = async (nu_id, document) => {
    let response = await fetch(`${NUID_DOMAIN_URL}/${nu_id}/${document}`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

export const upateDocument = async (nu_id, domain, document_id, newDocument) => {
    let response = await fetch(`${NUID_DOMAIN_URL}/${nu_id}/${domain}/${document_id}`, {
        method: "PUT",
        body: JSON.stringify(newDocument),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};