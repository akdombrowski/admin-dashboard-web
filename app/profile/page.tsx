import Profile from './layout'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Profile",
    description: "Profile to display the selected user",
}
// TODO: Create an async function to fetch user, pass props to Profile component.
export default async function ProfileOverview() {
  return <Profile />
}