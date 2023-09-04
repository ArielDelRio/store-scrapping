import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import NavBar from "./Navbar";
import { Database } from "@/types/database.types";

import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const NavbarServer = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <NavBar user={user} />;
};
export default NavbarServer;
