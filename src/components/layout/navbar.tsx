export default function Navbar() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-(--border-soft) bg-(--bg-surface) px-6">
            <div>
                <h2 className="text-sm font-medium text-(--text-muted)">
                    Panel general
                </h2>
                <p className="text-lg font-semibold text-(--text-main)">
                    Dashboard
                </p>
            </div>

            <div className="flex items-center gap-4">
                <button className="rounded-xl bg-(--primary) px-4 py-2 text-sm font-medium text-white transition hover:bg-(--primary-dark)">
                    Nueva tarea
                </button>

                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-sm font-medium text-(--text-main)">
                            Ariel
                        </p>
                        <p className="text-xs text-(--text-subtle)">
                            Administrador
                        </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--bg-elevated) text-sm font-semibold text-(--accent)">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}