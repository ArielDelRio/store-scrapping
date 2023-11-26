import { createServerClient } from "@supabase/ssr";

import { cookies } from "next/headers";
import dynamic from "next/dynamic";

const ClientNavbar = dynamic(() => import("./Navbar"), { ssr: false });

const Navbar = async () => {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <ClientNavbar user={user} />;
};
export default Navbar;
