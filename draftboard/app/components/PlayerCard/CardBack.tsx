import * as NBAIcons from "react-nba-logos";
import BackButton from "../Buttons/Back";
import MetricContainer from "./MetricContainer";
import PlayerInfo from "./PlayerInfo";

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
        w-[320px]
        h-[450px]
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

                < MetricContainer />
                <PlayerInfo color={borderColor} />
            </div>
        </section>
    );
}
