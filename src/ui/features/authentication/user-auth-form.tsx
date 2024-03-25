"use client"

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [reenteredPassword, setReenteredPassword] = React.useState<string>("");

  async function onContinue(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setIsSubmitted(true);
    setIsLoading(false);
  }

  async function onSubmit(event: React.SyntheticEvent) {

  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onContinue}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder={isSubmitted ? email : "name@example.com"}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {isSubmitted && (
            <form onSubmit={onSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    disabled={isLoading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="reenterPassword">
                    Re-enter Password
                  </Label>
                  <Input
                    id="reenterPassword"
                    placeholder="Re-enter Password"
                    type="password"
                    autoComplete="new-password"
                    disabled={isLoading}
                    value={reenteredPassword}
                    onChange={(e) => setReenteredPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          )}
          <Button disabled={isLoading} type="submit">
            Sign up with Email
          </Button>
        </div>
      </form>
    </div>
  );
}