import Link from "next/link";
import observacionImage from "../../../../public/images/imagen1.png";
import entrevistaImage from "../../../../public/images/imagen2.png";
import miTienda from "../../../../public/images/miTienda.png";
import "animate.css";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import CardHerramientas from "@/components/CardHerramientas";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
const features = [
  {
    name: "Falta de una tienda Virtual.",
    description:
      "Ofrecer un servicio de desarrollo de software comercial para que puedas vender tus productos en linea y llegar a mas clientes.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Obtención de datos precisos.",
    description:
      "A travez de la interaccion con el aplicativo poder recopilar los datos del usuario para sacar la mediana, media y moda.",
    icon: LockClosedIcon,
  },
  {
    name: "Entendimiento del comportamiento del cliente.",
    description:
      "Al contar con un asistente impulsado por IA, brindar atencion especializada al usuario para mejorar la experiencia al adquirir un producto.",
    icon: ServerIcon,
  },
];

const posts = [
  {
    id: 1,
    title: "Observación Directa",
    href: "#",
    description:
      "Observar y evaluar el desempeño realizado por el trabajador dentro de la empresa. Asi como el flujo de ventas, analizando los datos de los clientes y los productos mas vendidos.",
    imageUrl: observacionImage,
    category: { title: "Efectivo", href: "#" },
    efective: true,
  },
  {
    id: 2,
    title: "Entrevistas",
    href: "#",
    description:
      "Las entrevistas permiten obtener información detallada y específica. Puedes profundizar en aspectos clave del software, identificar problemas específicos y obtener una comprensión más completa de las necesidades de los usuarios.",
    imageUrl: entrevistaImage,
    category: { title: "Efectivo", href: "#" },
    efective: true,
  },
];

export default function SoftwareComercialPage() {
  return (
    <div>
      <div className="text-white">
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-items-center">
              <div className="lg:pr-8 lg:pt-4 animate__animated  animate__fadeInLeft">
                <div className="lg:max-w-lg">
                  <h2 className="text-base text-center font-semibold leading-7 text-indigo-600">
                    Software Comercial
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                    Mi Tienda
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-200 font-bold">
                    <span className="text-red-400">Problematica: </span>
                    Ventas manuales en muchas tiendas.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-300">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                src={miTienda}
                alt="Product screenshot"
                className="w-[10rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0 animate__animated animate__fadeInRight"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="my-5 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Lienzo Canvas
          </h3>
          <img src="/LienzoCanvas.svg" alt="lienzocanvas" />
        </div>
        <div className="flex flex-col items-center justify-center my-10">
          <h3 className="my-5 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Herramientas de Recoleccion de Datos
          </h3>
          <CardHerramientas posts={posts} />
        </div>
        <div className="flex justify-center my-10">
          <Link
            href="https://www.figma.com/file/sLAASbxSYNEiDM2MHK7YoG/Mi-Tienda?type=design&node-id=0%3A1&mode=design&t=IuJPU7jKuPU2D4vK-1"
            target="_blank"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Ver Mockup en Figma
            <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
