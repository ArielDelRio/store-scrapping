import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import OrdersTable from "./OrdersTable/OrdersTable";

const OrdersPage = async () => {
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

  const { data: orders, error } = await supabase.from("orders").select("*");

  return (
    <main className="mx-auto max-w-screen-2xl p-4">
      <p className="text-2xl font-bold mb-2">My Orders</p>
      {orders && <OrdersTable orders={orders} />}
    </main>
  );
};
export default OrdersPage;
