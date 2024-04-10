"use server"

import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import ParentContainer from './client-page';

export default async function Page() {
    const session = await auth();
    if (!session) {
        redirect("/api/auth/signin");
    }
    console.log(session)
    return <ParentContainer />;
}