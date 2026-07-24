import Image from "next/image";
interface Logo {
  logo: string;
  alttext: string;
  borderColor: string;
}

export default function Logo({ logo, alttext, borderColor }: Logo) {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: `${borderColor}`,
        borderStyle: "solid",
        borderWidth: "2px",
      }}
    >
      <div style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <Image src={logo} width={500} height={500} alt={alttext} />
      </div>
    </div>
  );
}
