"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
  Badge,
  Avatar,
  Tooltip,
} from "@nextui-org/react";
import { AcmeLogo, ShoppingCartIcon } from "../../icons";
import { useCart } from "react-use-cart";
import SearchInput from "../SearchInput/SearchInput";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/database.types";
import { useRouter } from "next/navigation";
import UserIcon from "@/icons/user.icon";

function NavBar({ user }: { user: User | null }) {
  const router = useRouter();
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

  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Navbar className="bg-transparent" maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <a href="/" className="flex items-center">
            <AcmeLogo />
            <span className="hidden sm:block font-bold text-inherit">ACME</span>
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center w-1/2" justify="center">
        <SearchInput />
      </NavbarContent>
      <NavbarContent justify="end">
        {user?.aud === "authenticated" ? (
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
                name={user?.email ?? ""}
                size="sm"
                src={user?.user_metadata?.avatar_url ?? ""}
                classNames={{
                  name: "text-default-600",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="profile"
                className="h-14 gap-2"
                textValue={`Signed in as ${user.email}`}
              >
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem className="lg:flex">
            <Tooltip
              content="Auth"
              showArrow
              classNames={{
                base: "dark:bg-neutral-700 text-black transition-colors dark:text-white",
                arrow:
                  "dark:bg-neutral-700 text-black transition-colors dark:text-white",
              }}
            >
              <Button
                variant="ghost"
                className="text-white hover:text-neutral-700"
                as={"a"}
                href="/auth"
                isIconOnly
              >
                <UserIcon />
              </Button>
            </Tooltip>
          </NavbarItem>
        )}
        <Badge
          content={totalUniqueItems}
          color="primary"
          variant="solid"
          shape="rectangle"
        >
          <Tooltip
            content="Cart"
            showArrow
            classNames={{
              base: "dark:bg-neutral-700 text-black transition-colors dark:text-white",
              arrow:
                "dark:bg-neutral-700 text-black transition-colors dark:text-white",
            }}
          >
            <Button
              onClick={handleOpenCart}
              isIconOnly
              className="rounded-md border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 text-black transition-colors dark:text-white"
            >
              <ShoppingCartIcon />
            </Button>
          </Tooltip>
        </Badge>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
