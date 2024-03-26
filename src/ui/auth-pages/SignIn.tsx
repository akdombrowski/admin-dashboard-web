"use server";

import { getProviders } from "next-auth/react";
import SignInBtn from "@/components/signInBtn";

export default async function SignIn() {
  const providers = await getProviders();

  return Object.values(providers).map((provider) => (
    <div key={provider.name}>
      <SignInBtn provider={provider} />
    </div>
  ));
}
