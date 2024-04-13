import dynamoClient from '@/lib/aws-config';
import { UpdateCommand, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";

/**
 * Adds or updates questions for a coach in the DynamoDB table.
 *
 * @param {string} coachEmail - The email of the coach to check, which serves as the primary key.
 * @param {array} coachQuestions - An array of objects with questionId, questionText, and any other values.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either success or error message
 */
export default async function addCoachQuestions(id, coachQuestions) {
    const params: UpdateCommandInput = {
        TableName: "Coach",
        Key: { 'coach_id': id },
        UpdateExpression: "set questions = :questions",
        ExpressionAttributeValues: {
            ":questions": coachQuestions
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        const data = await dynamoClient.send(new UpdateCommand(params));
        console.log('Update successful:', data);
        return {
            status: true,
            message: 'Coach questions added successfully.'
        };
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: 'Failed to add coach questions.'
        };
    }
}
