/**
 * API Stub to Add Questions to the Database and Check Status
 * 
 * @param {string} coachEmail - The email of the coach to check.
 * @param {array} coachQuestions - An array of objects with questionId, questionText, and answerType.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either success or error message
 */

export default async function addCoachQuestions(coachEmail, coachQuestions) {
    return fetch('https://api.example.com/add-coach-questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: coachEmail, questions: coachQuestions })
    })
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns data in the format of { success: true }
            console.log('API Call Successful:', data);
            return {
                status: data.success, // true or false
                message: data.success ? 'Coach questions added successfully.' : 'Failed to add coach questions.',
            };
        })
        .catch(error => {
            console.error('API Call Failed:', error);
            return {
                status: false,
                message: 'An error occurred while adding coach questions.',
            };
        });
}

// *-- Example usage: --*
addCoachQuestions('coach@example.com',
    [
        {
            "questionId": 'q1',
            "questionText": 'Question Text?',
            "answerType": 'text'
        },
        {
            "questionId": 'q2',
            "questionText": 'Question Text?',
            "answerType": 'numeric'
        },
    ]
).then(result => {
    console.log(result); // Logs the result of the API call
});