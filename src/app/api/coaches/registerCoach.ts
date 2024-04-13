import dynamoClient from '@/lib/aws-config';
import { PutCommand } from "@aws-sdk/lib-dynamodb";

/**
 * Registers a new coach in the DynamoDB table with initial values.
 *
 * @param {string} coachId - The primary key for the coach.
 * @param {string} email - The email of the coach.
 * @param {string} name - The name of the coach.
 * @returns {Promise} - A promise that resolves to an object indicating the success or failure of the operation.
 */
export default async function registerCoach(coachId: string, email: string, name: string) {
    const params = {
        TableName: "Coach",
        Item: {
            coach_id: coachId,
            email: email,
            name: name,
            questions: [],
            users: [],
            publish: false
        }
    };

    try {
        await dynamoClient.send(new PutCommand(params));
        return {
            status: true,
            message: 'Coach registered successfully.'
        };
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: `Failed to register coach. Error: ${error}`
        };
    }
}

// Example usage of the function
// registerCoach('tommyp', 'coach@example.com', 'Jane Doe').then(result => {
//     console.log(result.message);
// }).catch(error => {
//     console.error("Error:", error);
// });