import BotonHome from "@/components/BotonHome";
import React from "react";

export default function NewPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-white text-6xl italic font-bold mb-5 lg:text-8xl">
        Pendiente
      </h2>
      <BotonHome />
    </div>
  );
}
