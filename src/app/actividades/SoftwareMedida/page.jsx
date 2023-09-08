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
    content: {
      header:
        "La observación directa podría ser un método valioso para recopilar datos sobre cómo se llevan a cabo los procesos en el hogar de ancianos. Esto permitiría a los investigadores o al personal de la institución observar de primera mano cómo se realiza el proceso de ingreso, cómo se administra la atención médica, cómo se manejan los pagos y otros aspectos operativos. La observación podría ayudar a identificar posibles áreas de mejora y comprender cómo se aplican realmente las políticas y procedimientos.",
      firstParagraph: [
        {
          "Proceso de Ingreso":
            "Cómo se recibe a los posibles residentes y cómo se verifica la disponibilidad de camas. - Tiempo promedio de espera, fluidez del proceso.",
        },
        {
          "Atención Médica":
            "Cómo se realiza el chequeo médico diario y cómo se planifican los medicamentos. - Cumplimiento de horarios, atención personalizada.",
        },

        {
          "Proceso de Pago":
            "Cómo se realiza el proceso de pago mensual y cómo se manejan los pagos atrasados. - Tasa de cumplimiento de pagos, tiempo de procesamiento. ",
        },

        {
          "Retiros y Egresos":
            "Cómo se registra y maneja el retiro de residentes por diversas razones. - Motivos comunes de retiro, eficiencia del proceso.",
        },
        {
          "Satisfacción del Residente":
            "Percepción de los residentes sobre la calidad de la atención y los servicios. - Evaluación subjetiva de la experiencia. ",
        },
        {
          "Experiencia del Personal":
            "Percepción del personal sobre la eficacia de los procesos y la administración. - Opiniones y sugerencias del personal.",
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
        "Las entrevistas con el personal administrativo, médico, enfermeros, nutricionistas y otros miembros del equipo podrían proporcionar información valiosa sobre sus experiencias, desafíos y percepciones sobre el funcionamiento del hogar de ancianos. También se podrían entrevistar a los residentes y a sus familiares para obtener comentarios sobre su experiencia en la institución.",
      firstParagraph: [
        {
          "Objetivos: ":
            "- Automatizar la recepción y registro de nuevos residentes y sus responsables. - Controlar y gestionar pagos y cobros relacionados con los servicios brindados. - Supervisar la atención médica y nutricional de los residentes. - Generar informes bimestrales para la gerencia general.",
        },
        {
          "Requerimientos: ":
            "- Sistema de gestión de clientes (CRM) para registrar datos de residentes y responsables. - Sistema de gestión de pagos para registrar pagos y generar comprobantes. - Sistema de gestión de medicamentos para registrar y controlar el suministro de medicamentos. - Sistema de generación de informes para generar informes bimestrales.",
        },
      ],
    },
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
    content: {
      header:
        "Los cuestionarios podrían ser una forma eficaz de recopilar datos sobre la experiencia de los residentes y el personal en el hogar de ancianos. Los cuestionarios podrían enviarse por correo electrónico o entregarse en persona a los residentes y al personal. Los cuestionarios podrían incluir preguntas sobre los siguientes temas:",
      firstParagraph: [
        {
          "1. Proceso de Ingreso: ":
            "¿Puede describir el proceso de ingreso de nuevos residentes? ¿Cómo se verifica la disponibilidad de camas? ¿Cuáles son los requisitos para que un residente sea aceptado? ",
        },
        {
          "2. Atención Médica: ":
            "¿Cómo se lleva a cabo el chequeo médico diario de los residentes? ¿Cómo se planifican y administran los medicamentos? ¿Qué procedimientos se siguen en caso de emergencias médicas? ",
        },

        {
          "3. Proceso de Pago: ":
            "¿Cómo se maneja el proceso de pagos mensuales? ¿Qué sucede si un residente no realiza el pago a tiempo? ¿Cómo se registran los pagos y se emiten los comprobantes?",
        },

        {
          "4. Retiros y Egresos: ":
            "¿Cuál es el procedimiento cuando un residente decide retirarse? ¿Cómo se maneja la documentación y el registro de retiros? ¿Existen patrones comunes en los motivos de retiro?",
        },

        {
          "5. Satisfacción del Residente: ":
            "¿Cómo obtienen comentarios y retroalimentación de los residentes? ¿Qué aspectos valoran más los residentes en su experiencia aquí? ¿Cómo se abordan las preocupaciones o quejas de los residentes?",
        },
        {
          "6. Experiencia del Personal: ":
            "¿Cuál es su opinión sobre la eficacia de los procesos actuales? ¿Qué desafíos enfrenta el personal en su trabajo diario? ¿Tienen sugerencias para mejorar la operación y la atención a los residentes?",
        },
      ],
    },
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
            <h3 className="my-5 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl text-center">
              Herramientas de Recoleccion de Datos
            </h3>
            <CardHerramientas posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
