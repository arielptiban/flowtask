export default function SidebarSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h3 className="mb-3 px-3 text-xs font-bold uppercase tracking-wide text-(--text-subtle)">
                {title}
            </h3>

            <div className="space-y-1">{children}</div>
        </section>
    );
}