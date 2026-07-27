import * as NBAIcons from "react-nba-logos";
import BackButton from "../Buttons/Back";
import MetricContainer from "./MetricContainer";
import PlayerInfo from "./PlayerInfo";
import PlayerBio from "./PlayerBio";
import ScoutReportsSection from "./ScoutReports";
import CardFooter from "./CardFooter";

interface CardBackProps {
    backgroundColor?: string;
    borderColor?: string;
    teamAbbreviation: keyof typeof NBAIcons;
    playerName?: string;
}

export default function CardBack({
    backgroundColor,
    borderColor,
    teamAbbreviation,
    playerName,
}: CardBackProps) {
    const TeamIcon = NBAIcons[teamAbbreviation]; // cant use ? or else its going to cmplin keep in mind

    return (
        <section
            className="
        rounded-tl-[20px]
        rounded-tr-[20px]
        rounded-bl-[20px]
        rounded-br-[20px]
        p-[10px]
        overflow-hidden
        relative
      "
            style={{
                backgroundColor,
            }}
        >
            <div
                className="
                h-full
                flex
                flex-col
                border-[3px]
            rounded-tl-[20px]
            rounded-tr-[20px]
            rounded-bl-[20px]
            rounded-br-[20px]"
                style={{ borderColor: borderColor }}
            >
                <BackButton />
                <div className="size-25">
                    <TeamIcon />
                </div>
                <h3 style={{ color: borderColor }}>{playerName} </h3>
                <PlayerInfo color={borderColor} />
                <MetricContainer color={borderColor} />
                <PlayerBio
                    color={borderColor}
                    bio="Four-time champion and the league's all-time leading scorer. Still running the offense at an elite level deep into his twenties year."
                />
                <ScoutReportsSection color={borderColor} />
                <CardFooter />
            </div>
        </section>
    );
}
