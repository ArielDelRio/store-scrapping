"use client";

import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return <Link href={`/dashboard`}>{session.user?.name}</Link>;
  }

  return (
    <Button color="primary" variant="solid" onClick={() => signIn()}>
      Login
    </Button>
  );
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
