import { Database } from "@/types/database.types";
import { createServerClient } from "@supabase/ssr";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

const ClientCartPanel = dynamic(() => import("./CartPanel"), { ssr: false });

export const CartPanel = async () => {
  const cookieStore = cookies();

  const supabase = createServerClient<Database>(
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
  return <ClientCartPanel user={user} />;
};
