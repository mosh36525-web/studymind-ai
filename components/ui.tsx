import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", size = "md", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "outline"; size?: "sm" | "md" | "lg" }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-mint text-ink shadow-[0_12px_34px_rgba(94,234,212,.18)] hover:-translate-y-0.5 hover:bg-[#8af5e2]",
        variant === "secondary" && "bg-white/[.07] text-slate-100 ring-1 ring-white/10 hover:bg-white/[.12]",
        variant === "outline" && "bg-transparent text-slate-200 ring-1 ring-white/15 hover:bg-white/[.07] hover:ring-white/25",
        variant === "ghost" && "text-slate-300 hover:bg-white/[.06] hover:text-white",
        size === "sm" && "min-h-9 px-4 text-xs",
        size === "md" && "min-h-11 px-5 text-sm",
        size === "lg" && "min-h-13 px-7 text-base",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/[.08] px-3 py-1.5 text-xs font-semibold text-mint", className)}>{children}</span>;
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("glass rounded-[24px]", className)}>{children}</div>;
}

export function ProgressBar({ value, color = "mint" }: { value: number; color?: "mint" | "violet" | "amber" }) {
  const colors = { mint: "bg-mint", violet: "bg-violet", amber: "bg-amber" };
  return <div className="h-2 overflow-hidden rounded-full bg-white/[.07]"><div className={cn("h-full rounded-full transition-all duration-700", colors[color])} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} /></div>;
}
