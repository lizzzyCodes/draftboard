import Image from "next/image";

export default function CardFooter() {
  return (
    <footer className=" text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm">
        <Image
          src="/player-images/NBAPNG.png"
          alt="NBA Logo"
          width={20}
          height={20}
        />
        <p>Copr. © 2026 NBA Properties, Inc. </p>
        <p>The Official NFT Basketball Card </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <p>© 2026 SKYBOX INTERNATIONAL </p>
          <p>Created in USA</p>
        </div>
      </div>
    </footer>
  );
}
