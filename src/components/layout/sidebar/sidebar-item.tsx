"use client";

import Link from "next/link";

type SidebarItemProps = {
    item: {
        label: string;
        href: string;
        icon: string;
        badge?: string;
    };
    active: boolean;
};

export default function SidebarItem({ item, active }: SidebarItemProps) {
    return (
        <Link
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active
                ? "bg-(--bg-elevated) text-(--text-main)"
                : "text-(--text-muted) hover:bg-(--bg-elevated) hover:text-(--text-main)"
                }`}
        >
            <span className={`${item.icon} text-xl`} />

            <span className="flex-1">{item.label}</span>

            {item.badge && (
                <span className="rounded-lg border border-(--border-soft) px-2 py-0.5 text-xs text-(--text-muted)">
                    {item.badge}
                </span>
            )}
        </Link>
    );
}