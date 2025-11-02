"use client";
import { SchoolProvider } from "@/lib/store";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
      <SchoolProvider>
            {children}
                </SchoolProvider>
                  );
}