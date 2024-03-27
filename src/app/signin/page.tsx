"use server";

import CustomSignInPage from "@/auth-pages/CustomSignInPage";
import AuthProvidersSignInBtns from "@/components/authProvidersSignInBtns";
import getRNDImg from "@/actions/getRNDImg";

export default async function SignInPage() {
  // Get rnd image (might be from cache)
  const img = await getRNDImg();

  const signInWithProvidersComponents = await AuthProvidersSignInBtns();

  return (
    /**
     * CustomSignInPage provides the wrapper for the sign in buttons with the
     * providers and is a client component. It accepts a children prop which is
     * how we pass in the provider btns as server components
     */
    <CustomSignInPage img={img}>
      {signInWithProvidersComponents}
    </CustomSignInPage>
  );
}
