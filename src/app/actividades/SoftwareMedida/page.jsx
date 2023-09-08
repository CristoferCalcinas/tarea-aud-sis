import {
  CurrencyDollarIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  EyeDropperIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import CardHerramientas from "@/components/CardHerramientas";
import observacionImage from "../../../../public/images/imagen1.png";
import entrevistaImage from "../../../../public/images/imagen2.png";
import cuentionarioImage from "../../../../public/images/imagen3.png";
import asilo from "../../../../public/images/asilo.png";
import Image from "next/image";
const features = [
  {
    name: "Pago exclusivamente en efectivo y en fechas específicas.",
    description:
      "La falta de opciones de pago flexibles y electrónicas puede generar ineficiencia, riesgos de erro y retrasos en los pagos.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Verificación manual de la disponibilidad de camas.",
    description:
      "La falta de un sistema automatizado para controlar la disponibilidad de habitaciones y camas puede resultar en errores en la asignación y el uso subóptimo de recursos.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Relación anterior con el geriátrico no registrada de forma eficiente.",
    description:
      "La falta de un sistema de gestión de clientes (CRM) que permite acceder rápidamente a la historia de los residentes y responsables puede ralentizar el proceso de admisión y causar redundancias.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Falta de un sistema de seguimiento continuo para el suministro de medicamentos.",
    description:
      "La dependencia de registros manuales por parte de la enfermera, sin alertas automáticas, puede aumentar el riesgo de errores en la administración de medicamentos.",
    icon: EyeDropperIcon,
  },
  {
    name: "Los datos de los residentes y responsables deben mantenerse bajo estricta confidencialidad.",
    description:
      "La falta de medidas adecuadas para garantizar la privacidad de los datos puede llevar a problemas legales, pérdida de confianza y daños a la reputación de la institución.",
    icon: LockClosedIcon,
  },
];
const posts = [
  {
    id: 1,
    title: "Observación Directa",
    href: "#",
    description:
      "Observar y evaluar el desempeño realizado por el trabajador dentro de la empresa.  ",
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
  {
    id: 3,
    title: "Cuestionarios",
    href: "#",
    description:
      "Los cuestionarios son una forma rápida y económica de recopilar información de una gran cantidad de usuarios. Puedes usarlos para recopilar datos demográficos, como la edad, el sexo, la ubicación, etc. También puedes usarlos para recopilar información sobre las necesidades de los usuarios, como las funciones que desean ver en el software, las tareas que realizan con mayor frecuencia, etc.",
    imageUrl: cuentionarioImage,
    category: { title: "Efectivo", href: "#" },
    efective: true,
  },
];

export default function SoftwarenMedida() {
  return (
    <div>
      <div>
        <div className="text-white pb-24">
          <div className="overflow-hidden py-12 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid place-items-center lg:place-items-start max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4 animate__animated  animate__fadeInLeft">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base text-center font-semibold leading-7 text-indigo-600">
                      Software a Medida
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                      Asilo de Ancianos
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 font-bold">
                      <span className="text-red-400">Problematica: </span>
                      El hogar de ancianos en Valle Hermoso se enfrenta a un
                      desafío crucial que resalta su importancia: la necesidad
                      apremiante de modernizar y diversificar sus servicios para
                      brindar una atención de alta calidad a los seres queridos
                      de la tercera edad. Este desafío abarca desde la falta de
                      opciones de pago más convenientes y accesibles hasta la
                      dependencia financiera en una sola fuente y la limitada
                      disponibilidad de camas para quienes requieren atención
                      inmediata. Abordar esta problemática es esencial para
                      garantizar que nuestros residentes mayores reciban la
                      atención integral y personalizada que merecen, y para
                      asegurar un futuro sostenible para la institución.
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
                  src={asilo}
                  alt="Product screenshot"
                  className="w-[33rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] md:-ml-4 lg:-ml-0 animate__animated  animate__fadeInRight"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-10">
            <h3 className="my-5 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Herramientas de Recoleccion de Datos
            </h3>
            <CardHerramientas posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
