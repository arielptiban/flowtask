type Props = {
    title: string;
    value: number;
    icon: string;
    color?: string;
};

export default function MetricCard({
    title,
    value,
    icon,
    color = "text-(--accent)",
}: Props) {
    return (
        <div className="rounded-2xl border border-(--border-soft) bg-(--bg-surface) p-5 transition hover:bg-(--bg-elevated)">
            <div className="flex items-center justify-between">
                <p className="text-sm text-(--text-muted)">{title}</p>

                <span className={`${icon} text-xl ${color}`} />
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-(--text-main)">
                {value}
            </h2>
        </div>
    );
}