type MiniMetricCardProps = {
    label: string;
    value: number | string;
    icon: string;
    iconColor?: string;
};

export default function MiniMetricCard({
    label,
    value,
    icon,
    iconColor = "text-(--accent)",
}: MiniMetricCardProps) {
    return (
        <article className="rounded-2xl border border-(--border-soft) bg-(--bg-surface) p-5">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-(--text-muted)">
                        {label}
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-(--text-main)">
                        {value}
                    </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--bg-elevated)">
                    <span className={`${icon} ${iconColor} text-xl`} />
                </div>
            </div>
        </article>
    );
}