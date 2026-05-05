import MiniMetricCard from "@/components/ui/mini-metric-card";
import UsersTable from "@/components/users/users-table";
import { userMetrics } from "@/components/users/users-metrics.data";

export default function UsersPage() {
    return (
        <section>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Usuarios</h1>
                    <p className="mt-1 text-sm text-(--text-muted)">
                        Gestiona miembros, roles y equipos.
                    </p>
                </div>

                <button className="rounded-xl bg-(--accent) px-4 py-2 text-sm font-semibold text-(--bg-main)">
                    Crear usuario
                </button>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {userMetrics.map((metric) => (
                    <MiniMetricCard key={metric.label} {...metric} />
                ))}
            </div>

            <UsersTable />
        </section>
    );
}