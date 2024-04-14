"use server"

import dynamoClient from '@/lib/aws-config';
import { GetCommand } from "@aws-sdk/lib-dynamodb";

/**
 * Fetches a coach's saved questions from DynamoDB based on the primary key, coach_id.
 *
 * @param {string} coachId - The primary key for the coach entry in DynamoDB.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either indicating success or explaining the error
 *                      - questions: an array of saved questions submitted by the coach
 */
export default async function getSavedQuestions(coachId) {
    const params = {
        TableName: "Coach",
        Key: {
            "coach_id": coachId
        }
    };

    try {
        const { Item } = await dynamoClient.send(new GetCommand(params));
        if (Item && Item.saved_questions) {
            return {
                status: true,
                message: 'Saved questions retrieved successfully.',
                questions: Item.saved_questions
            };
        } else {
            return {
                status: false,
                message: 'No saved questions found for the coach.',
                questions: []
            };
        }
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: `${error} An error occurred while fetching saved coach questions.`,
            questions: []
        };
    }
}