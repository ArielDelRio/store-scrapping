import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { AcmeLogo, SearchIcon, ShoppingCartIcon } from "../../icons";
import { signIn, signOut, useSession } from "next-auth/react";
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
    <Navbar className="bg-transparent" maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center w-1/2" justify="center">
        <Input
          classNames={{
            base: "max-w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Paste a Shein URL to get product data"
          size="sm"
          endContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        {status === "authenticated" ? (
          <Dropdown
            placement="bottom-end"
            className="dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
          >
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={session.user?.name ?? ""}
                size="sm"
                src={session.user?.image ?? ""}
                classNames={{
                  name: "text-default-600",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session.user?.name}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => signOut()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Button variant="solid" onClick={() => signIn()}>
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                className="text-white hover:text-neutral-700"
                variant="ghost"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
        <Button
          onClick={handleOpenCart}
          isIconOnly
          className="rounded-md border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 text-black transition-colors dark:text-white"
        >
          <ShoppingCartIcon />
        </Button>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
