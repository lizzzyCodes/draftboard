import Image from "next/image";

interface PlayerHeadshotProps {
    img: string;
    position: string;
    color?: string;
    secondaryColor?: string;
}

export function PlayerHeadshot({
    img,
    position,
    color,      // background color 
    secondaryColor, // main red
}: PlayerHeadshotProps) {

    return (
        <div className="relative w-[200px]">
            <div
                className="overflow-hidden rounded-t-[90px] rounded-b-md border-[5px]"
                style={{ borderColor: secondaryColor, backgroundColor: color }}
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
                style={{ backgroundColor: secondaryColor }}
            >
                <h4>{position.toUpperCase()}</h4>
            </div>
        </div>
    );
}