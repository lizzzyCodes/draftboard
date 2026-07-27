// The most important action gets the primary
// new, edit, settings buttons can absolutely be primary or secondary buttons.

import { ArrowLeft } from "lucide-react";

interface BackButtonProps {}

export default function BackButton() {
  return (
    <>
      <button className="w-6 h-6 bg-gray-300 rounded-full hover:brightness-110">
        <ArrowLeft />
      </button>
    </>
  );
}
