interface TableDividerProps {
    text: string;
    secondaryColor?: string
}

export default function TableDivider({ text, secondaryColor }: TableDividerProps) {
    return (
        <div
            className="px-4 py-2.5"
            style={{
                background: secondaryColor,
            }}
        >
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                {text.toUpperCase()}
            </h3>
        </div>
    );
}
