import { fullName, formatBirthday } from "@/lib/api/utils/utils";
import Image from "next/image";
import { PlayerHeadshot } from './PlayerHeadshot';

interface PlayerMetricProps {
  first_name: string;
  last_name: string;
  birthday: string;
  height: string;
  weight: string;
  position: string;
  draft_year: number;
  jersey: number;
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
}: PlayerMetricProps) {

  const info = [
    {
      label: "Born",
      value: formatBirthday(birthday),
    },
    {
      label: "Height",
      value: height,
    },
    {
      label: "Weight",
      value: weight,
    },
    {
      label: "Position",
      value: position,
    },
    {
      label: "Drafted",
      value: draft_year,
    },
    {
      label: "Jersey",
      value: `#${jersey}`,
    },
  ];

  return (
    <>

      <div className="grid grid-cols-[auto_1fr] gap-4 items-center  p-4">
        <div className="row-span-2 flex">
          <PlayerHeadshot
            img={'/player-images/lebronheadshot.avif'}
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

