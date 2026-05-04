import { topUsers } from "./top-users.data";

export default function TopUsers() {
    return (
        <aside className="xl:pl-2">
            <div className="mb-6">
                <h2 className="text-sm font-semibold text-(--text-main)">
                    Top usuarios
                </h2>
            </div>

            <div className="space-y-5">
                {topUsers.map((user) => (
                    <div key={user.name} className="flex items-center gap-3">
                        <div className="relative shrink-0">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--bg-elevated) text-xs font-semibold text-(--accent)">
                                {user.initials}
                            </div>

                            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-(--bg-main) bg-(--success)" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-(--text-main)">
                                {user.name}
                            </p>
                            <p className="truncate text-xs text-(--text-muted)">
                                {user.effectiveness}% efectividad · {user.completedTasks} tareas
                            </p>
                        </div>

                        <span className="text-sm font-semibold text-(--success)">
                            {user.effectiveness}%
                        </span>
                    </div>
                ))}
            </div>
        </aside>
    );
}
