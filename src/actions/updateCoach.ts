'use server';

async function updateCoachQuestions(email, questions) {
    try {
        const response = await fetch('https://pyfm9jaz1a.execute-api.us-east-2.amazonaws.com/Prod/coach/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                questions: questions,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw new Error('Failed to update coach questions');
    }
}

export { updateCoachQuestions };