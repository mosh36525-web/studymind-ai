import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard-shell";
export const metadata: Metadata = { title: "لوحة التحكم" };
export default function DashboardPage() { return <DashboardShell />; }
