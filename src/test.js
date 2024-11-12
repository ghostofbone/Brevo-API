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
            'api-key': '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' 
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
