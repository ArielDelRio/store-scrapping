import AuthUI from "@/components/AuthUI/AuthUI";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AuthPage() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return <AuthUI />;
}
