"use client"

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");

  async function onContinue(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  }

  async function onSubmit(event: React.SyntheticEvent) {

  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onContinue}>
        <div className="grid gap-2">
          <Button disabled={isLoading} type="submit">
            Sign up with Google
          </Button>
        </div>
      </form>
    </div>
  );
}