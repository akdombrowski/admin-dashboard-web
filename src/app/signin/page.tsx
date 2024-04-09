"use server";

import CustomSignInPage from "@/auth-pages/CustomSignInPage";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * Uses Unsplash's API to get a random image in a certain category, defaulting to 'fitness'
 *
 * @param category Category of random img from unsplash
 * @param refreshIntervalSeconds How often to force nextjs to ignore cache
 * @returns url of a random image from unsplash
 */
const getRNDImg = async (
  category: string = "fitness",
  refreshIntervalSeconds: false | 0 | number = 10,
) => {
  try {
    const res = await fetch(
      `https://source.unsplash.com/random?${category ?? "fitness"}`,
      {
        next: { revalidate: refreshIntervalSeconds ?? 10 },
      },
    );
    if (res.ok) {
      const url = res.url;
      return url;
    }
  } catch (e) {
    // TODO: come up with consistent error handling
    console.error("error fetching random img for signin page", { cause: e });
  }
  return "/healthy-lifestyle-icon.png";
};

export default async function SignInPage() {
  const session = await auth();

  if (session) {
    redirect("/users");
  }

  // Get rnd image (might be from cache)
  const img = await getRNDImg();

  return (
    /**
     * CustomSignInPage provides the wrapper for the sign in buttons with the
     * providers and is a client component. It accepts a children prop which is
     * how we pass in the provider btns as server components
     */
    <CustomSignInPage>
      {/* {signInWithProvidersComponents} */}
    </CustomSignInPage>
  );
}
