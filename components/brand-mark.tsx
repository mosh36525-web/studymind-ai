import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="StudyMind AI — الرئيسية">
      <span className="relative grid h-10 w-10 place-items-center rounded-[14px] bg-gradient-to-br from-mint to-violet shadow-[0_10px_28px_rgba(94,234,212,.18)]">
        <span className="absolute inset-[5px] rounded-[10px] border border-ink/20" />
        <span className="h-3 w-3 rounded-full bg-ink shadow-[0_0_0_4px_rgba(248,250,252,.5)] transition-transform duration-300 group-hover:scale-125" />
      </span>
      {!compact && <span className="text-[15px] font-bold tracking-[-.02em] text-white">StudyMind<span className="text-mint"> AI</span></span>}
    </Link>
  );
}
