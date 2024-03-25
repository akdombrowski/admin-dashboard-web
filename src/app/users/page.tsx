import { Metadata } from 'next'
import Users from './layout'

export const metadata: Metadata = {
    title: "Users",
    description: "A user tracker to quickly display all users.",
}

// TODO:  Fetch data here.

export default async function UserList() {
    return <Users />
}