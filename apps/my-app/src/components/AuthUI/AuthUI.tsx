"use client";
import { Database } from "@/types/database.types";
import { Card, CardBody } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const AuthUI = () => {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        router.push("/");
      }
    });
  }, [router, supabase.auth]);

  console.log({ pathname });
  return (
    <main className="min-h-screen grid place-content-center">
      <Card className="w-[30vw] dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
        <CardBody>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
            }}
            theme="dark"
            providers={["google", "facebook"]}
            redirectTo={`${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/callback`}
          />
        </CardBody>
      </Card>
    </main>
  );
};

export default AuthUI;
