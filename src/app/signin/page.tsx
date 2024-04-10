// import CustomSignInPage from "@/auth-pages/CustomSignInPage";
import SignInPageAlternate from "@/auth-pages/SignInPageAlternate";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) {
      const response = await fetch(
        "https://tiz0drahvk.execute-api.us-east-2.amazonaws.com/default/registerCoach-RegisterCoachFunction-hmyke4bLdhAf",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: session.user.email,
            name: session.user.name,
          }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        const shouldRedirectToQuestions =
          data.message === "Coach added successfully" ||
          (data.coach && !data.coach.questions_finished);

        redirect("/users");
      } else {
        console.error(`API call failed with status: ${response.status}`);
      }
  }

  return (
    /**
     * CustomSignInPage provides the wrapper for the sign in buttons with the
     * providers and is a client component. It accepts a children prop which is
     * how we pass in the provider btns as server components
     */
    <SignInPageAlternate />
  );
}
