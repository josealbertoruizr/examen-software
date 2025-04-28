"use client";
import { useSearchParams } from "next/navigation";

export default function WelcomePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const ticket = searchParams.get("ticket");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">¡Bienvenido, {name}!</h1>
        <p className="text-gray-700 mb-2">
          Disfruta tu experiencia en GreenPark.
        </p>
        <p className="text-gray-900 font-semibold">
          Tu número de boleto es: {ticket}
        </p>
      </div>
    </div>
  );
}
