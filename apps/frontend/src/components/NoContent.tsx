import { Telescope } from "lucide-react";

export default function NoContentBanner() {
  return (
    <div className="flex flex-col items-center justify-center min-w-screen">
      <Telescope className="w-10 h-10 text-gray-600" strokeWidth={1} />
      <p className="font-medium text-gray-600 mt-2"> Aún no hay nada. </p>
    </div>
  );
}
