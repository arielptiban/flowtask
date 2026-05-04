export default function SidebarUser() {
    return (
        <div className="mt-6 rounded-2xl border border-(--border-soft) bg-(--bg-elevated) p-3">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-(--primary-soft) text-sm font-semibold text-white">
                        A
                    </div>

                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-(--bg-elevated) bg-(--success)" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-(--text-main)">
                        Ariel
                    </p>
                    <p className="truncate text-xs text-(--text-muted)">
                        Administrador
                    </p>
                </div>

                <span className="icon-[akar-icons--chevron-up-down] text-xl text-(--text-subtle)" />
            </div>
        </div>
    );
}