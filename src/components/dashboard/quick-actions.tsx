export default function QuickActions() {
    return (
        <section>
            <div className="mb-5 border-b border-(--border-soft) pb-4">
                <h2 className="text-sm font-semibold text-(--text-main)">
                    Acciones rápidas
                </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {/* NUEVA TAREA */}
                <button className="flex items-center gap-4 rounded-2xl border border-(--border-soft) bg-(--bg-surface) p-5 text-left transition hover:bg-(--bg-elevated)">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--border-soft)">
                        <span className="icon-[akar-icons--plus] text-xl text-(--accent)" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-(--text-main)">
                            Crear nueva tarea
                        </p>
                        <p className="mt-1 text-xs text-(--text-muted)">
                            Asigna responsables y fechas límite
                        </p>
                    </div>
                </button>

                {/* NUEVO EQUIPO */}
                <button className="flex items-center gap-4 rounded-2xl border border-(--border-soft) bg-(--bg-surface) p-5 text-left transition hover:bg-(--bg-elevated)">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--border-soft)">
                        <span className="icon-[akar-icons--people-group] text-xl text-(--accent)" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-(--text-main)">
                            Crear nuevo equipo
                        </p>
                        <p className="mt-1 text-xs text-(--text-muted)">
                            Organiza usuarios por áreas
                        </p>
                    </div>
                </button>
            </div>
        </section>
    );
}