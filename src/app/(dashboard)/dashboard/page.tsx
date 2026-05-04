import MetricCard from "@/components/dashboard/metric-card";
import { dashboardMetrics } from "@/components/dashboard/metric-card.data";
import QuickActions from "@/components/dashboard/quick-actions";
import UrgentTasks from "@/components/dashboard/urgent-tasks";
import TopUsers from "@/components/dashboard/top-users";
import RecentActivity from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
    return (
        <section>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
                <p className="mt-1 text-sm text-(--text-muted)">
                    Resumen general del sistema
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {dashboardMetrics.map((metric) => (
                    <MetricCard key={metric.title} {...metric} />
                ))}
            </div>

            <div className="mt-6 grid gap-8 xl:grid-cols-[1fr_280px]">
                <div className="space-y-8">
                    <QuickActions />
                    <UrgentTasks />
                    <RecentActivity />
                </div>

                <TopUsers />
            </div>
        </section>
    );
}

