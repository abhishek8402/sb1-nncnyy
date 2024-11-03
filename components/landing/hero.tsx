"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Code, Share2 } from "lucide-react";
import Link from "next/link";

export function LandingHero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[120px] pb-16 md:pt-[160px] md:pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Create Your Dream Portfolio in Minutes
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Build a stunning portfolio website that showcases your work beautifully. 
              Choose from professionally designed themes, customize every detail, and launch 
              your site with just a few clicks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/auth/register">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/themes">
                <Button variant="outline" size="lg">
                  View Themes
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center">
              <div className="rounded-2xl bg-primary/10 p-3">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold">Beautiful Themes</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Choose from our collection of professionally designed themes
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-2xl bg-primary/10 p-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold">Easy Customization</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Customize colors, fonts, and layouts with no coding required
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-2xl bg-primary/10 p-3">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold">Instant Sharing</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Get a custom URL to share your portfolio instantly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}