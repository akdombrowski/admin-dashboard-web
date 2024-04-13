import dynamoClient from '@/lib/aws-config';
import { PutCommand, UpdateCommand, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";

/**
 * Registers a new user with initial responses and links them to a coach in DynamoDB.
 * 
 * @param {string} userId - The unique ID for the user.
 * @param {string} name - The name of the user.
 * @param {string} coachId - The ID of the coach to link the user to.
 * @param {Array<any>} responses - An array of response objects.
 * @returns {Promise} - A promise that resolves to an object indicating the success or failure of each operation.
 */
export default async function registerUserAndLinkToCoach(userId: string, name: string, coachId: string, responses: Array<any>) {
    const userParams = {
        TableName: "Users",
        Item: {
            user_id: userId,
            name: name,
            responses: responses,
            coach: coachId
        }
    };

    try {
        await dynamoClient.send(new PutCommand(userParams));
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: `Failed to create user. Error: ${error}`
        };
    }

    const updateCoachParams: UpdateCommandInput = {
        TableName: "Coach",
        Key: { 'coach_id': coachId },
        UpdateExpression: "SET users = list_append(if_not_exists(users, :empty_list), :newUser)",
        ExpressionAttributeValues: {
            ":newUser": [userId],
            ":empty_list": []
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        await dynamoClient.send(new UpdateCommand(updateCoachParams));
        return {
            status: true,
            message: 'User created and added to coach successfully.'
        };
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: `Failed to add user to coach. Error: ${error}`
        };
    }
}
