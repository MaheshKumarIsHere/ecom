import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import NavbarSidebar from "./NavbarSidebar";
import { Menu } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between gap-2 px-5 h-20 border-b border">
      <div className="flex items-center gap-2">
        <NavbarSidebar open={open} onOpenChange={setOpen} />
        <Button size="icon" className="lg:hidden" onClick={() => setOpen(true)}>
          <Menu />
        </Button>
        <span className={cn("text-3xl font-semibold", poppins.className)}>
          E-Shop
        </span>
      </div>
      <div className="items-center gap-4 hidden lg:flex">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">Services</Link>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm">Sign in</Button>
        <Button size="sm">Sign up</Button>
      </div>
    </div>
  );
}

export default Navbar;
