/**
 * API Stub to Add Client Responses to Questions
 * 
 * @param {string} clientId - The email or phone number of the client submitting the response.
 * @param {array} clientResponses - An array of objects, each containing a questionId and the client's answer.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either success or error message
 */

export default async function addClientResponses(clientId, clientResponses) {
    return fetch('https://api.example.com/add-client-responses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clientId: clientId, responses: clientResponses })
    })
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns data in the format of { success: true }
            console.log('API Call Successful:', data);
            return {
                status: data.success, // true or false
                message: data.success ? 'Client responses added successfully.' : 'Failed to add client responses.',
            };
        })
        .catch(error => {
            console.error('API Call Failed:', error);
            return {
                status: false,
                message: 'An error occurred while adding client responses.',
            };
        });
}

// *-- Example usage: --*
addClientResponses('client@example.com',
    [
        {
            "questionId": 'q1',
            "answer": 'Answer1'
        },
        {
            "questionId": 'q2',
            "answer": 'Answer2'
        },
    ]
).then(result => {
    console.log(result); // Logs the result of the API call
});