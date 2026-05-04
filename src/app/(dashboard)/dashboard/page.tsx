import MetricCard from "@/components/dashboard/metric-card";

export default function DashboardPage() {
    const stats = [
        {
            title: "Total de tareas",
            value: 24,
            icon: "icon-[akar-icons--list]",
        },
        {
            title: "Pendientes",
            value: 10,
            icon: "icon-[akar-icons--circle]",
            color: "text-yellow-400",
        },
        {
            title: "En proceso",
            value: 8,
            icon: "icon-[akar-icons--clock]",
            color: "text-blue-400",
        },
        {
            title: "Atrasadas",
            value: 3,
            icon: "icon-[tabler--alert-circle]",
            color: "text-red-400",
        },
        {
            title: "Completadas",
            value: 3,
            icon: "icon-[akar-icons--check]",
            color: "text-green-400",
        },
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">
                Dashboard 🚀
            </h1>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {stats.map((stat) => (
                    <MetricCard key={stat.title} {...stat} />
                ))}
            </div>
        </div>
    );
}