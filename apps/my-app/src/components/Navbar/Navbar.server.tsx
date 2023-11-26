import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";

import { cookies } from "next/headers";
import dynamic from "next/dynamic";

const ClientNavbar = dynamic(() => import("./Navbar"), { ssr: false });

const Navbar = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <ClientNavbar user={user} />;
};
export default Navbar;
