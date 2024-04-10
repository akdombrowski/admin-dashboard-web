import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Authentication from "@/ui/features/authentication/auth-layout";

export default async function HomePage() {
  const session = await auth();
  if (session) {
    try {
      const response = await fetch('https://tiz0drahvk.execute-api.us-east-2.amazonaws.com/default/registerCoach-RegisterCoachFunction-hmyke4bLdhAf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: session.user.email, name: session.user.name }),
      });

      const data = await response.json();
      const redirectPath = data.message === 'Coach added successfully' || (data.coach && data.coach.questions_finished === false) ? '/questions' : '/users';
      redirect(redirectPath);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  return <Authentication />;
}