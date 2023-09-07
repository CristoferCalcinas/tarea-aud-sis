import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="/new" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                Lo Nuevo
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Portafolio de Actividades y Tareas
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Este es un portafolio de actividades y tareas de la materia de
            Análisis y Diseño de Sistemas, en el cual se irán subiendo las
            actividades y tareas que se vayan realizando en la materia.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/actividades"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Ver Actividades
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-white italic"
            >
              Mas información
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://econsultoria.net/wp-content/uploads/2021/08/que-es_portafolio.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[20rem] lg:w-[76rem] rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10 "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
