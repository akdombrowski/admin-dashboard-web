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
      className="container flex flex-wrap justify-center items-stretch h-screen space-y-20"
    >
      <div className="w-screen p-20 text-9xl font-black text-center">Guide</div>
      <div className="basis-full text-5xl text-center p-20 ">
        <Link href="/api/auth/signin" className="py-1 px-6 border-4 border-black border-solid">
          Login
        </Link>
      </div>
    </div>
  );
}
