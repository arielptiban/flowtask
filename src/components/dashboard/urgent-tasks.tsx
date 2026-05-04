import { urgentTasks } from "./urgent-tasks.data";

export default function UrgentTasks() {
    return (
        <section>
            {/* HEADER */}
            <div className="mb-5 border-b border-(--border-soft) pb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-(--text-main)">
                        Tareas urgentes
                    </h2>

                    <button className="text-xs text-(--text-muted) hover:text-(--text-main)">
                        Ver todas
                    </button>
                </div>
            </div>

            {/* LISTA */}
            <div className="space-y-3">
                {urgentTasks.map((task) => (
                    <div
                        key={task.title}
                        className="flex items-center justify-between gap-4 rounded-xl px-3 py-3 transition hover:bg-(--bg-elevated)"
                    >
                        {/* INFO */}
                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-(--text-main)">
                                {task.title}
                            </p>

                            <p className="mt-1 text-xs text-(--text-muted)">
                                {task.responsible} · {task.status} · {task.dueDate}
                            </p>
                        </div>

                        {/* PRIORIDAD */}
                        <span className="rounded-lg border border-(--border-soft) px-2 py-1 text-xs text-(--text-muted)">
                            {task.priority}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}