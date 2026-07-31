interface TableDividerProps {
    text: string;
    secondaryColor?: string
}

export default function TableDivider({ text, secondaryColor }: TableDividerProps) {
    return (
        <div

            className="px-4 py-2.5 font-bold tracking-wider text-lg"
            style={{
                background: secondaryColor,
            }}
        >
            <h3 className="uppercase font-bold tracking-wider text-lg text-white">
                {text.toUpperCase()}
            </h3>
        </div>
    );
}
