import Image from "next/image";
import * as NBAIcons from "react-nba-logos";

interface Logo {
  logo: keyof typeof NBAIcons; // tkaes in the ABREV, LAL, UTA etc.
  alttext: string;
  borderColor: string;
}

export default function Logo({ logo, alttext, borderColor }: Logo) {
  const TeamLogo = NBAIcons[logo];
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        overflow: "hidden",
        borderColor: `${borderColor}`,
        borderStyle: "solid",
        borderWidth: "2px",
      }}
    >
      <div style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <TeamLogo />
      </div>
    </div>
  );
}
