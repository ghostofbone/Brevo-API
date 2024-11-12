/*
const Brevo = require('@getbrevo/brevo');



// Initialize the API client
let defaultClient = Brevo.ApiClient.instance;

// Set your API key
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

const apiInstance = new Brevo.ContactsApi(defaultClient);


let createContact = new Brevo.CreateContact({
    email: 'bukhantcovk@gmail.com',
// Replace with the user's email
    attributes: {FIRSTNAME: "First", LASTNAME: "Last"},
// Optional attributes
    listIds: [2]
// Replace with your desired list ID
});

apiInstance.createContact(createContact)
    .then(data => {
        console.log('Contact added successfully:', data);
    })
    .catch(error => {
        console.error('Error adding contact:', error);
    });
*/



const axios = require('axios');

const fakeData = [
    {
        email: 'bukhantcovk@gmail.com',
        attributes: {FIRSTNAME: "Kirill", LASTNAME: "Last"},
        listIds: [2]
    },
    {
        email: 'gb6793035@gmail.com',
        attributes:{FIRSTNAME: "Gang", LASTNAME:"Last"},
        listIds: [2]
}]


function addContact(contact) {
    return axios.post('https://api.brevo.com/v3/contacts', contact, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': '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' // replace with actual key
        }
    })
}

async function addContacts() {
    const promises = fakeData.map(contact => addContact(contact)
    .then(response => console.log('Contact added successfully:', response.data))
    .catch(error => console.error('Error adding contact:', error))
);
    await Promise.all(promises)
}

addContacts()