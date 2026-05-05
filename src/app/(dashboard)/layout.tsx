"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/sidebar/sidebar";
import MobileMenuButton from "@/components/layout/mobile-menu-button";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-(--bg-main) text-(--text-main)">

            {/* Navbar MOBILE */}
            <header className="fixed left-0 top-0 z-40 flex h-16 w-full items-center justify-between border-b border-(--border-soft) bg-(--bg-surface) px-4 md:hidden">

                {/* Botón menú */}
                {!open && <MobileMenuButton onClick={() => setOpen(true)} />}

                {/* Logo derecha */}
                <div className="ml-auto flex items-center gap-2">
                    <div className="h-6 w-6 rounded-md bg-(--bg-elevated)" />

                    <span className="text-sm font-semibold text-(--text-main)">
                        FlowTask
                    </span>
                </div>
            </header>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                />
            )}

            {/* Sidebar */}
            <Sidebar open={open} onClose={() => setOpen(false)} />

            {/* Content */}
            <main className="min-h-screen p-5 pt-24 md:ml-72 md:p-8 md:pt-8">
                {children}
            </main>
        </div>
    );
}