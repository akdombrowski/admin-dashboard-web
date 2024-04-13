import dynamoClient from '@/lib/aws-config';
import { GetCommand } from "@aws-sdk/lib-dynamodb";

/**
 * Fetches a user's responses to the coach's question form.
 *
 * @param {string} user_id - The primary key for the user entry in DynamoDB.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either indicating success or explaining the error
 *                      - answers: an array of responses
 */
export default async function getClientResponses(id) {
    const params = {
        TableName: "Users",
        Key: {
            "user_id": id
        }
    };

    try {
        const { Item } = await dynamoClient.send(new GetCommand(params));
        if (Item && Item.responses) {
            return {
                status: true,
                message: 'User answers retrieved successfully.',
                answers: Item.responses
            };
        } else {
            return {
                status: false,
                message: 'No responses found for the user.',
                answers: []
            };
        }
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: 'An error occurred while fetching user answers.',
            answers: []
        };
    }
}

