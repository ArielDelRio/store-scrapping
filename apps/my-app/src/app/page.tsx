import Navbar from "@/components/Navbar/Navbar.server";
import NavbarServer from "@/components/Navbar/Navbar.server";
import HomePage from "@/components/pages/home/home";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
