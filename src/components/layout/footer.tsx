"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        {/* Top: Brand + Links */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand and description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-lg font-semibold">
              DevTinder
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Discover, match, and collaborate with developers. Build your network,
              find collaborators, and share opportunities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/posts" className="hover:text-foreground transition-colors">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/matches" className="hover:text-foreground transition-colors">
                  Matches
                </Link>
              </li>
              <li>
                <Link href="/messages" className="hover:text-foreground transition-colors">
                  Messages
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-border" />

        {/* Bottom: Social + Copyright */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevTinder. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Link
              href="https://github.com/"
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/"
              aria-label="Twitter"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
