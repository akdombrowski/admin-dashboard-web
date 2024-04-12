/**
 * API Stub to Check Coach Questions Status
 * 
 * @param {string} coachEmail - The email of the coach to check, this is the primary key.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either success or error message
 *                      - questionStatus: boolean indicating the coach's question status (true/false)
 */

export default async function getCoachQuestionStatus(coachEmail) {
    return fetch('https://api.example.com/check-question-status', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // TODO:  This would either be in the header/query of the request, since it's a GET request, remove if necessary.
        body: JSON.stringify({ email: coachEmail })
    })
        .then(response => response.json())
        .then(data => {
            console.log('API Call Successful:', data);
            return {
                status: data.success, // true or false
                message: data.success ? 'Coach status retrieved successfully.' : 'Failed to retrieve coach status.',
                coachStatus: data.questionStatus // true or false
            };
        })
        .catch(error => {
            console.error('API Call Failed:', error);
            return {
                status: false,
                message: 'An error occurred while fetching coach status.',
                coachStatus: false
            };
        });
}

// *-- Example usage: --*
getCoachQuestionStatus('coach@example.com').then(result => {
    console.log(result); // Logs the result of the API call
});