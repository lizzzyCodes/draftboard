import { fullName, formatBirthday } from "@/lib/api/utils/utils";
import { displayValue } from "@/lib/api/utils/utils";
import { PlayerHeadshot } from './PlayerHeadshot';

export interface PlayerMetricProps {
  first_name: string;
  last_name: string;
  birthday: string;
  height: string;
  weight: string;
  position: string;
  draft_year: number;
  jersey: number;
  wingspan?: string;
  standing_reach?: string;
  color?: string;
  secondaryColor?: string;

}

export default function PlayerMetric({
  first_name,
  last_name,
  birthday,
  height,
  weight,
  position,
  draft_year,
  jersey,
  color,
  secondaryColor,
  wingspan,
  standing_reach,
}: PlayerMetricProps) {

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
            img={`/player-images/${first_name}_${last_name}_headshot.avif`}
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

