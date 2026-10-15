import { Badge } from "@/components/ui";

export function SectionHeading({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: string; description?: string; align?: "center" | "right" }) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-right"}>
    <Badge className="mb-5">{eyebrow}</Badge>
    <h2 className="text-balance text-3xl font-bold tracking-[-.04em] text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-8 text-slate-400">{description}</p>}
  </div>;
}
