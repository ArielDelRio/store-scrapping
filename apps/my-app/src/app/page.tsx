import NavBar from "@/components/Navbar/Navbar";
import HomePage from "@/components/pages/home/home";
import { Database } from "@/types/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <NavBar user={user} />
      <HomePage />
    </>
  );
}
