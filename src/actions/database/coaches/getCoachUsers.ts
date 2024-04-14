"use server"

import dynamoClient from '@/lib/aws-config';
import { GetCommand } from "@aws-sdk/lib-dynamodb";

/**
 * Fetches a coach's associated users from DynamoDB based on the primary key, coach_id.
 *
 * @param {string} coachId - The primary key for the coach entry in DynamoDB.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either indicating success or explaining the error
 *                      - users: an array of user identifiers associated with the coach
 */
export default async function getCoachUsers(coachId) {
    const params = {
        TableName: "Coach",
        Key: {
            "coach_id": coachId
        }
    };

    try {
        const { Item } = await dynamoClient.send(new GetCommand(params));
        if (Item && Item.users) {
            return {
                status: true,
                message: 'Coach users retrieved successfully.',
                users: Item.users
            };
        } else if (Item && !Item.users) {
            return {
                status: false,
                message: 'No users associated with the coach.',
                users: []
            };
        } else {
            return {
                status: false,
                message: 'Coach not found.',
                users: []
            };
        }
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: 'An error occurred while fetching coach users.',
            users: []
        };
    }
}
