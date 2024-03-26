import Link from "next/link";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthenticationPage() {
  const session = await auth();

  if (session) {
    redirect("/users");
  }

  return (
    <div
      id="rootcontainer"
      className="container flex flex-wrap justify-center	items-stretch"
    >
      <div className="basis-full flex-auto w-100 text-9xl font-black text-center">
        Guide
      </div>
      <div className="basis-full text-5xl text-center">
        <Link href="/api/auth/signin" className={""}>
          Login
        </Link>
      </div>
    </div>
  );
}
