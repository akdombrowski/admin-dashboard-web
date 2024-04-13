import dynamoClient from '@/lib/aws-config';
import { GetCommand } from "@aws-sdk/lib-dynamodb";

/**
 * Fetches a coach's details from DynamoDB based on the primary key, coach_id, and checks the publish status.
 *
 * @param {string} coachId - The primary key for the coach entry in DynamoDB.
 * @returns {Promise} - A promise that resolves to an object containing:
 *                      - status: boolean indicating if the operation was successful
 *                      - message: a string message, either indicating success or explaining the error
 *                      - isPublished: boolean indicating whether the coach's status is published (true/false)
 */
export default async function getCoachPublishedStatusById(coachId) {
    const params = {
        TableName: "Coach",
        Key: {
            "coach_id": coachId
        }
    };

    try {
        const { Item } = await dynamoClient.send(new GetCommand(params));
        if (Item) {
            const isPublished = Item.publish === false ? false : true;
            return {
                status: true,
                message: 'Coach found.',
                isPublished: isPublished
            };
        } else {
            return {
                status: false,
                message: 'Coach not found.',
                isPublished: false
            };
        }
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            status: false,
            message: `${error} Failed to retrieve coach details.`,
            isPublished: false
        };
    }
}

// Example usage of the function
getCoachPublishedStatusById('example-coach-id').then(result => {
    console.log(result.isPublished);
}).catch(error => {
    console.error("Error:", error);
});