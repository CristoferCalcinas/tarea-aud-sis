import Link from "next/link";

export default function BotonHome() {
  return (
    <Link href="/">
      <div>
        <button
          type="button"
          className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        >
          Pagina de Inicio
        </button>
      </div>
    </Link>
  );
}
