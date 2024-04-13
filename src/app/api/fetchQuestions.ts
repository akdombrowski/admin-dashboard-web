import dynamoClient from '@/lib/aws-config';
import { GetCommand } from "@aws-sdk/lib-dynamodb";

/**
 * Fetches a coach's questions from DynamoDB based on the primary key, coach_id, and checks the publish status.
 *
 * @param {string} id - The primary key for the User entry in DynamoDB.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either indicating success or explaining the error
 *                      - questions: an array of questions submitted by the coach
 */
export default async function getCoachQuestions(id) {
    const params = {
        TableName: "Coach",
        Key: {
            "coach_id": id
        }
    };

    try {
        const { Item } = await dynamoClient.send(new GetCommand(params));
        if (Item && Item.questions) {
            return {
                status: true,
                message: 'Coach questions retrieved successfully.',
                questions: Item.questions
            };
        } else {
            return {
                status: false,
                message: 'No questions found for the coach.',
                questions: []
            };
        }
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: 'An error occurred while fetching coach questions.',
            answers: []
        };
    }
}


// Example usage of the function
getCoachQuestions('example-coach-id').then(result => {
    console.log(result);
}).catch(error => {
    console.error("Error:", error);
});