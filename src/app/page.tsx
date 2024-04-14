import { auth } from "@/auth";
import type { Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function LandingPage() {
  const session = await auth();

  const registerCoach = async (session: Session) => {
    try {
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

      const data = await response.json();
      const redirectPath = "/home";
      redirect(redirectPath);
    } catch (error) {
      /**
       * TODO: Need to have a fallback whether it's to try the api call again or
       *       send the user to an error page or back to start ...
       */
      console.error("Error fetching user data:", error);
    }
  };

  if (session) {
    // TODO: where does this need to go
    // registerCoach(session)

    redirect("/home");
  }

  redirect("/signin");
}
