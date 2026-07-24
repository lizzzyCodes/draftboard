import CardHeader from "./CardHeader";
import Image from "next/image";
import PlayerName from "./PlayerName";
import Team from "./TeamName";
import * as NBAIcons from "react-nba-logos";

interface CardColors {
  backgroundColor: string;
  borderColor: string;
}

export default function Card({ backgroundColor, borderColor }: CardColors) {
  return (
    <section
      className="
        w-[320px]
        h-[450px]
        rounded-tl-[20px]
        rounded-tr-[20px]
        rounded-bl-[40px]
        rounded-br-none
        p-[5px]
        overflow-hidden
        relative
      "
      style={{
        backgroundColor,
      }}
    >
      <div
        className="
          h-[90%]
          p-[3px]
          border-[3px]
          border-white
          rounded-tl-[20px]
          rounded-tr-[20px]
          rounded-bl-[20px]
          rounded-br-none

        "
      >
        <div
          className="
            h-full
            flex
            flex-col
            border-[3px]
            border-[#FEB54C]
            rounded-tl-[16px]
            rounded-tr-[16px]
            rounded-bl-[16px]
            rounded-br-none
          "
        >
          <CardHeader />

          <hr className="border-t-[1.5px] border-white" />
          <div className="flex-1 min-h-0 relative w-full">
            <Image
              src="/player-images/lebron.jpg"
              alt="LeBron James"
              fill
              className="object-cover"
            />
          </div>

          <hr className="border-t-[1.5px] border-white" />

          <div className=" flex justify-center items-center">
            <PlayerName name="LeBRON JAMES" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-50 border-2 border-[#FEB54C] bg-white rounded-full size-25 flex items-center justify-center overflow-hidden">
        <NBAIcons.LAL className="w-full h-full p-2" />
      </div>

      <div className="absolute right-4 -mt-2">
        {" "}
        {/** -mt moves the container up */}
        <Team team="LAKERS" />
      </div>
    </section>
  );
}
