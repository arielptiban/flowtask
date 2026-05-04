"use client";

import { usePathname } from "next/navigation";
import SidebarSection from "./sidebar-section";
import SidebarItem from "./sidebar-item";
import SidebarUser from "./sidebar-user";
import { mainMenu, workspaceMenu, teams } from "./sidebar.data";

type Props = {
    open?: boolean;
    onClose?: () => void;
};

export default function Sidebar({ open = false, onClose }: Props) {
    const pathname = usePathname();

    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen w-72 border border-(--border-soft) bg-(--bg-surface) px-5 py-5 transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 md:static md:flex md:flex-col`}
        >
            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--bg-elevated)">
                        <span className="icon-[akar-icons--layers] text-2xl text-(--accent)" />
                    </div>

                    <h1 className="text-xl font-semibold text-(--text-main)">
                        FlowTask
                    </h1>
                </div>

                <button
                    onClick={onClose}
                    className="md:hidden text-(--text-subtle)"
                >
                    <span className="icon-[akar-icons--cross] text-2xl" />
                </button>
            </div>

            <div className="flex-1 space-y-8 overflow-y-auto">
                <SidebarSection title="General">
                    {mainMenu.map((item) => (
                        <SidebarItem
                            key={item.href}
                            item={item}
                            active={pathname === item.href}
                        />
                    ))}
                </SidebarSection>

                <SidebarSection title="Workspace">
                    {workspaceMenu.map((item) => (
                        <SidebarItem
                            key={item.href}
                            item={item}
                            active={pathname === item.href}
                        />
                    ))}
                </SidebarSection>
            </div>

            {/* USER */}
            <SidebarUser />
        </aside>
    );
}