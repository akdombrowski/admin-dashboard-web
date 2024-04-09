import { auth } from "@/auth";
import { redirect } from "next/navigation";

import getRNDImg from "@/actions/getRNDImg";
import Authentication from "@/ui/features/authentication/auth-layout";

export default async function HomePage() {
  const session = await auth();
  const img = await getRNDImg();

  if (session) {
    redirect("/users");
  }

  return (
    <Authentication />
  );
}