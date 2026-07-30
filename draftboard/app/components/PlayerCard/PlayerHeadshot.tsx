import Image from "next/image";

interface PlayerHeadshotProps {
    img: string;
    position: string;
    color?: string;
    frameColor?: string;
}

export function PlayerHeadshot({
    img,
    position,
    color = "#B7A7C9",       // background color 
    frameColor = "#C0392B",  // main red
}: PlayerHeadshotProps) {
    return (
        <div className="relative w-[200px]">
            <div
                className="overflow-hidden rounded-t-[90px] rounded-b-md border-[5px]"
                style={{ borderColor: frameColor, backgroundColor: color }}
            >
                <Image
                    src={img}
                    alt={position}
                    width={300}
                    height={100}
                    className="object-contain"
                />
            </div>
            <div
                className="absolute -bottom-3 inset-x-0 rounded py-1 text-center font-bold tracking-wide text-white"
                style={{ backgroundColor: frameColor }}
            >
                <h4>{position.toUpperCase()}</h4>
            </div>
        </div>
    );
}