"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import batman from "@/public/batmanreal.png"

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <Link href="/">Web Development</Link>
            <Link href="/interface-design">Interface Design</Link>
            <Link href="/seo">Search Engine Optimization</Link>
            <Link href="/branding">Branding</Link>
          </div>
        </MenuItem>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Finance.io"
                href="https://github.com/amanxxp/finance.app"
                src="/batmanreal.png"
                description="Track every penny with precision and manage your finances effortlessly."
              />
              <ProductItem
                title="VibeNet"
                href="https://github.com/amanxxp/Twitter"
                src="/batmanreal.png"
                description="Engage with a vibrant community, Where every interaction brings people closer together."
                // Join VibeNet to engage with a vibrant community, share your passions, and discover new connections. Where every interaction brings people closer together.
                // Engage with a vibrant community and discover new connections. Where every interaction brings people closer together.
              />
              <ProductItem
                title="Saarthi"
                href="https://github.com/amanxxp/Saarthi"
                src="/whiteBatman.jpg"
                description="Empower every woman with job opportunities, health resources, education, and government schemes for a brighter future."
              />
            </div>
          </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
