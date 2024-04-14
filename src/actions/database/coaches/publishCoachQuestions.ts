"use server"

import dynamoClient from '@/lib/aws-config';
import { GetCommand, UpdateCommand, PutCommand, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";

/**
 * Checks if the coach exists, updates if present, or creates a new coach in the DynamoDB table.
 * Sets both published_questions and saved_questions, and marks publish as true.
 *
 * @param {string} coachId - The ID of the coach to check, which serves as the primary key.
 * @param {array} coachQuestions - An array of objects with questionId, questionText, and any other values.
 * @param {string} email - The email of the coach.
 * @param {string} name - The name of the coach.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either success or error message
 */
export default async function publishCoachQuestions(coachId, coachQuestions, email, name) {
    const getParams = {
        TableName: "Coach",
        Key: { 'coach_id': coachId }
    };

    try {
        const coach = await dynamoClient.send(new GetCommand(getParams));
        if (coach.Item) {
            const updateParams: UpdateCommandInput = {
                TableName: "Coach",
                Key: { 'coach_id': coachId },
                UpdateExpression: "set published_questions = :published, saved_questions = :saved, publish = :pub",
                ExpressionAttributeValues: {
                    ":published": coachQuestions,
                    ":saved": coachQuestions,
                    ":pub": true
                },
                ReturnValues: "UPDATED_NEW"
            };
            await dynamoClient.send(new UpdateCommand(updateParams));
            console.log('Update successful');
            return {
                status: true,
                message: 'Coach questions updated successfully and published.'
            };
        } else {
            const createParams = {
                TableName: "Coach",
                Item: {
                    coach_id: coachId,
                    email: email,
                    name: name,
                    published_questions: coachQuestions,
                    saved_questions: coachQuestions,
                    users: [],
                    publish: true
                }
            };
            await dynamoClient.send(new PutCommand(createParams));
            console.log('Creation successful');
            return {
                status: true,
                message: 'New coach created successfully.'
            };
        }
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: 'Failed to process coach questions.'
        };
    }
}