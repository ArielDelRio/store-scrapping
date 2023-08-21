import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

type Props = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export default function AuthMenu({ user }: Props) {
  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "p-0 border-small border-divider bg-background",
        arrow: "bg-default-200",
      }}
    >
      <DropdownTrigger>
        <User
          name={user?.name}
          description=""
          avatarProps={{
            src: user?.image ?? "",
          }}
          className="cursor-pointer"
          classNames={{
            name: "text-default-600",
            description: "text-default-500",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="logout" onClick={() => signOut()}>
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
