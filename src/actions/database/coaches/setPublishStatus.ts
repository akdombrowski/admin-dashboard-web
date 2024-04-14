"use server"

import dynamoClient from '@/lib/aws-config';
import { UpdateCommand, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";

/**
 * Sets the publish status for a coach in the DynamoDB based on the primary key, coach_id.
 *
 * @param {string} coachId - The primary key for the coach entry in DynamoDB.
 * @param {boolean} publishStatus - The new publish status to set (true or false).
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message indicating success or error
 */
export default async function setPublishStatus(coachId, publishStatus) {
    const params: UpdateCommandInput = {
        TableName: "Coach",
        Key: {
            "coach_id": coachId
        },
        UpdateExpression: "set publish = :p",
        ExpressionAttributeValues: {
            ":p": publishStatus
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        const data = await dynamoClient.send(new UpdateCommand(params));
        console.log('Update successful:', data);
        return {
            status: true,
            message: 'Coach publish status updated successfully.'
        };
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: `Failed to update coach publish status. Error: ${error}`
        };
    }
}
