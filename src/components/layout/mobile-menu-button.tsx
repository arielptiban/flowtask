type Props = {
    onClick: () => void;
};

export default function MobileMenuButton({ onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="fixed left-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border-soft) bg-(--bg-surface) text-(--text-main) md:hidden"
        >
            <span className="icon-[akar-icons--three-line-horizontal] text-xl" />
        </button>
    );
}