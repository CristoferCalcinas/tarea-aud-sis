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
    content: {
      header:
        "Enfocados en validar la idea de negocio, y analizar muchos puntos de venta.",
      firstParagraph: [
        {
          "Diseño del registro: ":
            "Decide qué información deseas recopilar y cómo organizarla. Esto puede incluir categorías, comportamientos específicos, frecuencia de concurrencia y cualquier otra información relevante, como ingresos semanales.",
        },
        {
          "Obtención de datos precisos: ":
            "La observación directa permite recopilar datos de manera objetiva y precisa, ya que estás capturando directamente las acciones y transacciones que ocurren en el negocio, eliminando la posibilidad de errores de registro.",
        },
        {
          "Entendimiento del comportamiento del cliente:":
            "Al observar cómo los clientes navegan por la tienda digital, qué productos exploran, añaden al carrito y comprar, puedes obtener información valiosa sobre sus preferencias y patrones de compra.",
        },
        {
          " Optimización de la experiencia de usuario: ":
            "La observación te permite identificar obstáculos o dificultades que los clientes pueden enfrentar al navegar por la tienda en línea. Esto te permite mejorar la usabilidad y la experiencia general del usuario.",
        },
        {
          "Identificación de productos populares: ":
            "Mediante la observación de las compras y navegación de los clientes, puedes identificar rápidamente los productos más populares y aquellos que podrían necesitar más promoción.",
        },
      ],
    },
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
    content: {
      header:
        "Escoger el método de la entrevista para recopilar información sobre un software comercial puede ser una excelente elección por varias razones, especialmente cuando se trata de comprender las necesidades y expectativas de los usuarios y otros stakeholders. Aquí hay algunas razones para considerar este enfoque:",
      firstParagraph: [
        {
          "1. Obtención de Información Detallada: ":
            "Las entrevistas permiten obtener información detallada y específica. Puedes profundizar en aspectos clave del software, identificar problemas específicos y obtener una comprensión más completa de las necesidades de los usuarios.",
        },
        {
          "2. Aclaración de Dudas: ":
            "Durante una entrevista, puedes hacer preguntas de seguimiento para aclarar cualquier ambigüedad o confusión. Esto te ayuda a obtener una comprensión más clara de los requisitos y expectativas.",
        },
        {
          "3. Contexto Personalizado: ":
            "Las entrevistas permiten capturar el contexto personalizado de cada usuario. Esto es importante en un software comercial, donde diferentes usuarios pueden tener diferentes flujos de trabajo y requisitos.",
        },
        {
          "4. Construcción de Relaciones: ":
            "Las entrevistas también son oportunidades para construir relaciones sólidas con los stakeholders. Puedes demostrar que valoras sus opiniones y estás comprometido en satisfacer sus necesidades.",
        },
        {
          "5. Identificación de Problemas no Evidentes:":
            "En ocasiones, los usuarios pueden no ser conscientes de ciertos problemas o necesidades hasta que se les pregunta directamente. Las entrevistas pueden ayudar a identificar problemas no evidentes en una etapa temprana.",
        },
        {
          "6. Exploración de Ideas de Valor Agregado:":
            "Además de comprender las necesidades básicas, las entrevistas pueden servir para explorar ideas de valor agregado. Los usuarios pueden sugerir características o funcionalidades que no habías considerado inicialmente.",
        },
        {
          "7. Validación de Ideas: ":
            "Si ya tienes algunas ideas para el software, las entrevistas te permiten validarlas directamente con los usuarios. Puedes obtener retroalimentación instantánea sobre si tus ideas son adecuadas o necesitan ajustes.",
        },
        {
          "8. Detección de Preferencias y Prioridades: ":
            "Las entrevistas son útiles para descubrir las preferencias y prioridades de los usuarios. Esto puede ser crucial para determinar qué características deben desarrollarse primero.",
        },
      ],
    },
  },
];

export default function SoftwareComercialPage() {
  return (
    <div>
      <div className="text-white pb-24 mt-5 md:mt-0">
        <div className="overflow-hidden sm:py-12">
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
          <h3 className="my-5 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl text-center">
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
