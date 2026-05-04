import { recentActivity } from "./recent-activity.data";

export default function RecentActivity() {
    return (
        <section>
            <div className="mb-5 border-b border-(--border-soft) pb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-(--text-main)">
                        Actividad reciente
                    </h2>

                    <button className="text-(--text-subtle) hover:text-(--text-main)">
                        <span className="icon-[akar-icons--more-vertical] text-lg" />
                    </button>
                </div>

            </div>

            <div className="divide-y divide-(--border-soft)">
                {recentActivity.map((activity) => (
                    <div key={`${activity.user}-${activity.time}`} className="flex gap-4 py-4">
                        <div className="relative shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--bg-elevated) text-sm font-semibold text-(--accent)">
                                {activity.initials}
                            </div>

                            <span
                                className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-(--bg-main) ${activity.status === "online"
                                    ? "bg-(--success)"
                                    : "bg-(--text-subtle)"
                                    }`}
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm text-(--text-muted)">
                                <span className="font-semibold text-(--text-main)">
                                    {activity.user}
                                </span>{" "}
                                <span className="text-xs">{activity.time}</span>
                            </p>

                            <p className="mt-1 text-sm text-(--text-muted)">
                                {activity.action}{" "}
                                <span className="font-medium text-(--accent)">
                                    {activity.target}
                                </span>
                            </p>
                        </div>

                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-(--success)" />
                    </div>
                ))}
            </div>
        </section>
    );
}