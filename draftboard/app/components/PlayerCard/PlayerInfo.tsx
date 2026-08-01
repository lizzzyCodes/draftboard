import { fullName, formatBirthday } from "@/lib/api/utils/utils";
import { displayValue } from "@/lib/api/utils/utils";
import { PlayerHeadshot } from './PlayerHeadshot';
import type { Player, Combine } from "@/lib/api/types/types";
import { headshotUrl } from "@/lib/api/utils/utils";

interface PlayerMetricProps {
  player: Player;
  combine: Combine | null;
  color?: string;
  secondaryColor?: string;
}

export default function PlayerMetric({
  player,
  combine,
  color,
  secondaryColor,
}: PlayerMetricProps) {
  const {
    first_name,
    last_name,
    birthday,
    height,
    weight,
    position,
    draft_year,
    jersey,
    nba_player_id
  } = player;

  const wingspan = combine?.wingspan;
  const standing_reach = combine?.standing_reach;

  const info = [
    {
      label: "Born",
      value: formatBirthday(birthday),
    },
    {
      label: "Height",
      value: displayValue(height),
    },
    {
      label: "Weight",
      value: displayValue(weight),
    },
    {
      label: "Position",
      value: displayValue(position),
    },
    {
      label: "Drafted",
      value: displayValue(draft_year),
    },
    {
      label: "Jersey",
      value: jersey ? `#${jersey}` : "-",
    },
    {
      label: "Wingspan",
      value: displayValue(wingspan),
    },
    {
      label: "Standing Reach",
      value: displayValue(standing_reach),
    },
  ];

  return (
    <>

      <div className="grid grid-cols-[auto_1fr] gap-4 items-center  p-4">
        <div className="row-span-2 flex">
          <PlayerHeadshot
            img={headshotUrl(nba_player_id)}
            //  img={`/player-images/${first_name}_${last_name}_headshot.avif`}
            position={position}
            color={secondaryColor}
            secondaryColor={color}
          />
        </div>

        <h3

          className="text-7xl"
          style={{ borderColor: secondaryColor, color: secondaryColor }}
        >
          {fullName(first_name, last_name).toUpperCase()}
        </h3>

        <div>
          {info.map((item) => (
            <div key={item.label} className="flex items-baseline gap-1 font-bold">
              <h4>
                {item.label.toUpperCase() + ":"}
              </h4>
              <h4>{item.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

