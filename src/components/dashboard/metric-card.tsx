type MetricCardProps = {
    title: string;
    value: string | number;
    trend?: string;
    icon: string;
    color?: string;
};

export default function MetricCard({
    title,
    value,
    trend,
    icon,
    color = "text-(--accent)",
}: MetricCardProps) {
    return (
        <article className="rounded-2xl border border-(--border-soft) bg-(--bg-surface) p-4">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-(--text-muted)">
                        {title}
                    </p>

                    <div className="mt-2 flex items-end gap-2">
                        <h3 className="text-3xl font-semibold tracking-tight text-(--text-main)">
                            {value}
                        </h3>

                        {trend && (
                            <span className="mb-1 flex items-center gap-1 text-xs font-medium text-(--success)">
                                <span className="icon-[akar-icons--arrow-up-right]" />
                                {trend}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--bg-elevated)">
                    <span className={`${icon} ${color} text-xl`} />
                </div>
            </div>
        </article>
    );
}