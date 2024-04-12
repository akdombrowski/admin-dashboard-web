'use server';

import { nanoid } from 'nanoid'; // Or any other method for generating unique IDs

export default async function generateLink() {
    const linkId = nanoid(); // Generates a unique ID
    // Save linkId and any associated data to your database
    
    const baseUrl = process.env.ORIGIN
    const newLink = `${baseUrl}/onboarding/${linkId}`;
    return newLink;
}

