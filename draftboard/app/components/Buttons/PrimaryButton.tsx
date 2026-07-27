// The most important action gets the primary
// new, edit, settings buttons can absolutely be primary or secondary buttons.

interface PrimaryButtonProps {
  text: string;
}

export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <button className="bg-[#FF9300] text-white font-bold px-6 py-3 rounded-full font-oswald hover:brightness-110">
      {text}
    </button>
  );
}
