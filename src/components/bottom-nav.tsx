"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scan, History, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Scan", href: "/", icon: Scan },
    { label: "History", href: "/history", icon: History },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border flex justify-around items-center px-4 h-20 safe-bottom">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 w-full h-full transition-all android-ripple",
              isActive ? "text-accent" : "text-muted-foreground"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-full transition-colors",
              isActive && "bg-accent/10"
            )}>
              <item.icon className={cn("w-6 h-6", isActive && "stroke-[2.5px]")} />
            </div>
            <span className="text-[10px] font-medium tracking-wide uppercase">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}