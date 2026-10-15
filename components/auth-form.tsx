"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, CheckCircle2, Eye, EyeOff, Loader2, LockKeyhole, Mail, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { BrandMark } from "@/components/brand-mark";
import { Button, Card } from "@/components/ui";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const supabase = getSupabaseBrowserClient();
  const isRegister = mode === "register";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(""); setMessage("");
    if (!supabase) { setError("أضف قيم Supabase في ملف البيئة لتفعيل المصادقة الحقيقية."); return; }
    setLoading(true);
    const result = isRegister
      ? await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } })
      : await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (result.error) { setError(result.error.message); return; }
    if (isRegister) {
      setMessage("تم إنشاء حسابك. إذا كان تأكيد البريد مفعّلًا، راجع صندوق الوارد ثم سجّل الدخول.");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return <main className="relative min-h-screen overflow-hidden px-5 py-6 lg:px-8"><div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-mint/10 blur-[120px]" /><div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet/10 blur-[130px]" /><div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col"><div className="flex items-center justify-between"><BrandMark /><Link href="/" className="inline-flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-white"><ArrowLeft size={14} /> العودة للرئيسية</Link></div><div className="flex flex-1 items-center justify-center py-14"><div className="w-full max-w-[430px]"><div className="mb-8 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-mint/10 text-mint"><LockKeyhole size={21} /></span><h1 className="mt-6 text-3xl font-bold tracking-[-.04em] text-white">{isRegister ? "ابدأ مساحتك" : "أهلًا بعودتك"}</h1><p className="mt-3 text-sm leading-6 text-slate-400">{isRegister ? "أنشئ حسابك المجاني وابدأ في بناء عادة تعلّم أفضل." : "سجّل الدخول لتعود إلى أهدافك وجلسات تركيزك."}</p></div><Card className="p-6 sm:p-8"><form onSubmit={handleSubmit} className="space-y-4">{isRegister && <Field label="الاسم" icon={<UserRound size={16} />} value={name} onChange={setName} placeholder="كيف نُناديك؟" required /> }<Field label="البريد الإلكتروني" icon={<Mail size={16} />} type="email" value={email} onChange={setEmail} placeholder="you@example.com" required /><div><label className="mb-2 block text-xs font-semibold text-slate-300">كلمة المرور</label><div className="relative"><LockKeyhole className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} /><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" minLength={6} required className="h-12 w-full rounded-xl border border-white/[.1] bg-white/[.04] px-10 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-mint/50 focus:bg-white/[.06]" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white" aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></div>{error && <div role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-xs leading-5 text-red-200">{error}</div>}{message && <div role="status" className="flex gap-2 rounded-xl border border-mint/20 bg-mint/10 px-4 py-3 text-xs leading-5 text-mint"><CheckCircle2 className="mt-0.5 shrink-0" size={15} />{message}</div>}<Button type="submit" size="lg" className="w-full">{loading ? <><Loader2 className="animate-spin" size={17} /> جارٍ التحميل...</> : isRegister ? "أنشئ حسابي مجانًا" : "تسجيل الدخول"}</Button></form><div className="mt-6 text-center text-xs text-slate-500">{isRegister ? "لديك حساب بالفعل؟" : "ليس لديك حساب؟"} <Link className="font-semibold text-mint hover:text-white" href={isRegister ? "/login" : "/register"}>{isRegister ? "سجّل الدخول" : "أنشئ حسابًا مجانيًا"}</Link></div></Card><p className="mt-5 text-center text-[11px] leading-5 text-slate-600">باستخدامك StudyMind AI، أنت تختار مساحة تعلّم مجانية وهادئة بلا اشتراكات أو مدفوعات.</p></div></div></div></main>;
}
function Field({ label, icon, value, onChange, placeholder, type = "text", required = false }: { label: string; icon: React.ReactNode; value: string; onChange: (value: string) => void; placeholder: string; type?: string; required?: boolean }) { return <div><label className="mb-2 block text-xs font-semibold text-slate-300">{label}</label><div className="relative"><span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">{icon}</span><input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} className="h-12 w-full rounded-xl border border-white/[.1] bg-white/[.04] px-10 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-mint/50 focus:bg-white/[.06]" /></div></div>; }
