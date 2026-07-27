// Card header NBA Hoops and Stars
import Image from "next/image";
import { Stars } from "./Stars";

export default function CardHeader() {
  return (
    <section className="flex justify-center items-baseline gap-2 pt-1">
      <div className="flex gap-2">{Stars}</div>
      <h1 className="flex items-center text-black">
        NBA HO
        <Image
          src="/player-images/basketball.svg"
          width={15}
          height={15}
          style={{ paddingBottom: "5px" }}
          alt="Basketball"
        />
        PS
      </h1>
      <div className="flex gap-2">{Stars}</div>
    </section>
  );
}
