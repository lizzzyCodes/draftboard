//                 <h4>BORN: JANE, 21, 1962, - LAGOS, NIGERIA</h4>

import { collectStagedSegmentData } from "next/dist/server/app-render/instant-validation/instant-validation";

export const mockPlayerInfo = {
    id: "fakeId",
    born: "Jan. 21, 1964 - Lagos, Nigeria",
    height: "7-0",
    weight: "250",
    college: "Houston",
    drafted: "1st Rd-Pick 1 - Houston, 19843",
    jersey: "#34",
};

interface PlayerInfoProps {
    color?: string;
}

export default function PlayerInfo({ color }: PlayerInfoProps) {
    return (
        <>
            {Object.entries(mockPlayerInfo).map(([key, value]) => {
                return (
                    <h4 style={{ color: color, fontWeight: "bold" }}>
                        {/** TODO: if key === jersey then append # wont add for now bc still waiting on more data */}
                        {key.toUpperCase()}{" "}
                    </h4>
                );
            })}
        </>
    );
}
