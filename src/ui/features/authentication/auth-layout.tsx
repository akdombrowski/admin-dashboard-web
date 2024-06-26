import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/components/button";

export default function Authentication() {
    return (
        <>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    href="/api/auth/signin"
                    className={cn("absolute right-4 top-4 md:right-8 md:top-8")}
                >
                    Login
                </Link>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-300 to-white"></div>
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        Guide
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Click the button below to continue.
                            </p>
                        </div>
                        <Link href={"/api/auth/signin"}>
                            <div className="grid gap-2">
                                <Button>
                                    Get Started
                                </Button>
                            </div>
                        </Link>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                // TODO: Change this into a proper link when clicking terms.
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                // TODO: Change this into a proper link when clicking privacy.
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}