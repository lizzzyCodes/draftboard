import Image from "next/image";
export const Stars = Array.from({ length: 3 }).map((stars, index) => (
  <Image
    key={index}
    src="/player-images/star.png"
    width={10}
    height={10}
    alt="Star"
  />
));
