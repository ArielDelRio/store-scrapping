"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import AuthMenu from "../AuthMenu/AuthMenu";
import { ShoppingCartIcon } from "@/icons";
import { useCart } from "react-use-cart";

function NavBar() {
  const { data: session, status } = useSession();

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const handleOpenCart = () => {
    console.log({
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    });
  };

  return (
    <Navbar className="bg-transparent">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">STORE SCRAPPING</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      {status === "unauthenticated" && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button color="primary" variant="solid" onClick={() => signIn()}>
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="ghost">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      {status === "authenticated" && <AuthMenu user={session.user!} />}
      <Button onClick={handleOpenCart} isIconOnly color="primary">
        <ShoppingCartIcon />
      </Button>
    </Navbar>
  );
}

export default NavBar;
