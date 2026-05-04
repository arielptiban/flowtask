"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/sidebar/sidebar";
import MobileMenuButton from "@/components/layout/mobile-menu-button";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-(--bg-main) text-(--text-main)">
            {!open && <MobileMenuButton onClick={() => setOpen(true)} />}

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                />
            )}

            <Sidebar open={open} onClose={() => setOpen(false)} />

            <main className="min-h-screen p-5 pt-28 md:ml-72 md:p-8 md:pt-8">
                {children}
            </main>
        </div>
    );
}