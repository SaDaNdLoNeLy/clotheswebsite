"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: "/admin/collects",
      label: "Collects",
      active: pathname === "/admin/collects",
    },
    {
      href: "/admin/types",
      label: "Types",
      active: pathname === "/admin/types",
    },
    {
      href: "/admin/colors",
      label: "Colors",
      active: pathname === "/admin/colors",
    },
    {
      href: "/admin/sizes",
      label: "Sizes",
      active: pathname === "/admin/sizes",
    },
    {
      href: "/admin/products",
      label: "Products",
      active: pathname === "/admin/products",
    },
  ];

  return (
    <nav className={cn("flex items-center spcae-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-md font-medium transition-colors hover:text-primary",
            route.active ? "text-black" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
