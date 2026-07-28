import Image from "next/image";
import * as NBAIcons from "react-nba-logos";
import PlayerName from "./PlayerName";

const basketballPositions = {
    pointGuard: "POINT GUARD",
    shootingGuard: "SHOOTING GUARD",
    smallForward: "SMALL FORWARD",
    powerForward: "POWER FORWARD",
    center: "CENTER",
}
interface HeadshotProps {
    src?: string;
    alt?: string;
}

export default function Headshot({ src, alt }: HeadshotProps) {
    return (
        <>
            <div className="flex items-end inline-block overflow-hidden">
                <Image
                    src={'/player-images/Steph.png'}
                    alt={'Stephen Curry'}
                    width={260}
                    height={200}
                    className="rounded-t-full border-b-100 border-blue-500"
                />

                <PlayerName name={basketballPositions.center} />
            </div>

        </>

    );
}
