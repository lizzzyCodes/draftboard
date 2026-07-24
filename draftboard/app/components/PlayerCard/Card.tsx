import CardHeader from "./CardHeader";
import Image from "next/image";
import PlayerName from "./PlayerName";
import Team from "./TeamName";
import Logo from "./Logo";
import styles from "./Card.module.css";

interface CardColors {
  backgroundColor: string;
  borderColor: string;
}
export default function Card({ backgroundColor, borderColor }: CardColors) {
  return (
    <section
      className="rounded-[20px] overflow-hidden w-[320px] h-[450px] rounded-br-[0]"
      style={{
        backgroundColor,
        padding: "5px",
      }}
    >
      <div
        className="rounded-[16px] overflow-hidden"
        style={{
          border: "3px solid white", // idk if this will change :()
          height: "90%",
          padding: "3px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "0",
        }}
      >
        <div
          className="rounded-[12px] overflow-hidden"
          style={{
            border: "3px solid #FEB54C", // will change to secondary
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "0",
            height: "100%",
          }}
        >
          {/* card content */}
          <CardHeader />
          <hr className="border-t-[1.5px]" />
          <Image
            src="/player-images/lebron.jpg"
            width={50}
            height={500}
            alt={"example"}
          />
          <div className={styles.playerNameContainer}>
            <div className={styles.playerName}>
              <PlayerName name="LeBRON JAMES" />
            </div>
          </div>
        </div>
      </div>
      <Logo
        logo="/player-images/lakers.jpg"
        alttext="Los Angeles Lakers"
        borderColor={borderColor}
      />
      <Team team="LAKERS" />
    </section>
  );
}
