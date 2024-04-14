"use server"

import dynamoClient from '@/lib/aws-config';
import { GetCommand } from "@aws-sdk/lib-dynamodb";

/**
 * Fetches a coach's published questions from DynamoDB based on the primary key, coach_id, and checks the publish status.
 *
 * @param {string} id - The primary key for the coach entry in DynamoDB.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either indicating success or explaining the error
 *                      - questions: an array of published questions submitted by the coach
 */
export default async function getPublishedCoachQuestions(id) {
    const params = {
        TableName: "Coach",
        Key: {
            "coach_id": id
        }
    };

    try {
        const { Item } = await dynamoClient.send(new GetCommand(params));
        if (Item && Item.published_questions) {
            return {
                status: true,
                message: 'Published coach questions retrieved successfully.',
                questions: Item.published_questions
            };
        } else {
            return {
                status: false,
                message: 'No published questions found for the coach.',
                questions: []
            };
        }
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: 'An error occurred while fetching published coach questions.',
            questions: []
        };
    }
}
