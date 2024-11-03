"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Laptop } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Laptop className="h-6 w-6" />
          <span className="font-bold">Portfolio Builder</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/themes" className="transition-colors hover:text-primary">
            Themes
          </Link>
          <Link href="/features" className="transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-primary">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/auth/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}