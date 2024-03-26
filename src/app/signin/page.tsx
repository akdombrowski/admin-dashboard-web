import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserAuthForm } from "@/features/authentication/user-auth-form";
import SignIn from "@/authPages/SignIn";

export default async function SignInPage() {
  return (
    <div
      id="rootcontainer"
      className="container flex flex-wrap justify-center items-stretch h-screen space-y-20"
    >
      <div className="w-screen p-20 text-9xl font-black text-center">Guide</div>
      <div className="basis-full text-5xl text-center p-20 ">
        <SignIn />
      </div>
    </div>
  );
}
