"use server";

import { getProviders } from "next-auth/react";

export default async function GetProviders() {
  const providers = await getProviders();
  return providers;
}
