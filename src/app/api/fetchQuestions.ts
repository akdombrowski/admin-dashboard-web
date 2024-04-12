/**
 * API Stub to Fetch Questions Assigned to a Coach
 * 
 * @param {string} coachEmail - The email of the coach to retrieve questions for.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either success or error message
 *                      - questions: an array of objects with questionId, questionText, and answerType.
 */

export default async function fetchCoachQuestions(coachEmail) {
    return fetch('https://api.example.com/fetch-questions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // TODO:  This would either be in the header/query of the request, since it's a GET request, remove if necessary.
        body: JSON.stringify({ email: coachEmail })

    })
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns data in the format of { success: true, questions: [] }
            console.log('API Call Successful:', data);
            return {
                status: data.success, // true or false
                message: data.success ? 'Coach questions retrieved successfully.' : 'Failed to retrieve coach questions.',
                questions: data.questions // Array of questions
            };
        })
        .catch(error => {
            console.error('API Call Failed:', error);
            return {
                status: false,
                message: 'An error occurred while fetching coach questions.',
            };
        });
}

// *-- Example usage: --*
fetchCoachQuestions('coach@example.com').then(result => {
    console.log(result); // Logs the result of the API call
});