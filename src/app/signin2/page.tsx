// import CustomSignInPage from "@/auth-pages/CustomSignInPage";
import SignInPageAlternate from "@/auth-pages/SignInPageAlternate";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Authentication from "@/ui/features/authentication/auth-layout";
import TestOption from "@/app/signin2/TestOption";

export default async function SignInPage2() {
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
    <>
      <TestOption
        option="2"
        alternate="/signin"
        textColor="#000"
        textAlpha={0.65}
      />
      <Authentication />
    </>
  );
}
