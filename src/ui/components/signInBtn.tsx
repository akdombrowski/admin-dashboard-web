"use client";

import { signIn } from "next-auth/react";

export default async function SignInBtn({ provider }) {
  return (
    <button onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </button>
  );
}
