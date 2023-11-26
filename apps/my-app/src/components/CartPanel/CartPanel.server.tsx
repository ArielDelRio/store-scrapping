import { Database } from "@/types/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

const ClientCartPanel = dynamic(() => import("./CartPanel"), { ssr: false });

export const CartPanel = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <ClientCartPanel user={user} />;
};
