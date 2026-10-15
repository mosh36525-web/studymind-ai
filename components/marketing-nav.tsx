"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui";

const links = [
  { href: "/features", label: "المزايا" },
  { href: "/about", label: "عن StudyMind" },
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 border-b border-white/[.06]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="التنقل الرئيسي">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login"><Button variant="ghost" size="sm">تسجيل الدخول</Button></Link>
          <Link href="/register"><Button size="sm">ابدأ مجانًا <span aria-hidden="true">←</span></Button></Link>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full text-slate-200 hover:bg-white/[.06] md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute inset-x-4 top-[84px] rounded-2xl border border-white/10 bg-[#0c1828]/95 p-3 shadow-panel backdrop-blur-xl md:hidden">
          {links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/[.06]">{link.label}</Link>)}
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/[.07] pt-3"><Link href="/login" onClick={() => setOpen(false)}><Button className="w-full" variant="ghost" size="sm">دخول</Button></Link><Link href="/register" onClick={() => setOpen(false)}><Button className="w-full" size="sm">ابدأ مجانًا</Button></Link></div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
