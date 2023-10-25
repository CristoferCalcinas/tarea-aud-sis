import Image from "next/image";
import {
  CurrencyDollarIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  EyeDropperIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import asilo from "../../../../public/images/appvidasaludable.png";
import diagramaCasosDeUso from "../../../../public/images/DCU_AppSaludable.png";
import diagramaCS01 from "../../../../public/images/dcs01.jpg";
import diagramaCS02 from "../../../../public/images/dcs02.jpg";
import diagramaCS03 from "../../../../public/images/dcs03.jpg";
import diagramaCS04 from "../../../../public/images/dcs04.jpg";
import diagramaCS05 from "../../../../public/images/dcs05.jpg";
import diagramaCS06 from "../../../../public/images/dcs06.jpg";
import diagramaCS07 from "../../../../public/images/dcs07.jpg";
import diagramaEsp01 from "../../../../public/images/esp01.jpg";
import diagramaEsp02 from "../../../../public/images/esp02.jpg";
import diagramaEsp03 from "../../../../public/images/esp03.jpg";
import diagramaEsp04 from "../../../../public/images/esp04.jpg";
import diagramaEsp05 from "../../../../public/images/esp05.jpg";
import diagramaEsp06 from "../../../../public/images/esp06.jpg";
import diagramaEsp07 from "../../../../public/images/esp07.jpg";
import diagramaEsp08 from "../../../../public/images/esp08.jpg";
import diagramaEsp09 from "../../../../public/images/esp09.jpg";
import diagramaEsp10 from "../../../../public/images/esp10.jpg";
import diagramaEsp11 from "../../../../public/images/esp11.jpg";
import diagramaEsp12 from "../../../../public/images/esp12.jpg";

const features = [
  {
    name: "Falta de Conciencia sobre Estilos de Vida Saludables.",
    description:
      "Muchas personas carecen de información y conciencia sobre prácticas y hábitos de vida saludables, lo que conduce a problemas de salud, como la obesidad, enfermedades cardíacas y diabetes. La falta de acceso a recursos educativos adecuados puede ser un desafío.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Dificultad en la Gestión de Enfermedades Crónicas.",
    description:
      "Las personas con enfermedades crónicas a menudo enfrentan dificultades para gestionar su salud diaria y realizar un seguimiento de su progreso. Esto puede llevar a complicaciones y una calidad de vida reducida.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Escasa Motivación para el Ejercicio Físico.",
    description:
      "La falta de motivación para el ejercicio regular es un problema común. Las personas pueden tener dificultades para mantener la rutina de ejercicio, lo que afecta su salud general y su bienestar.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Dieta Inadecuada y Nutrición Desbalanceada.",
    description:
      "La mala alimentación y una nutrición desequilibrada son problemas significativos que contribuyen a la obesidad y otros problemas de salud. Muchas personas no tienen acceso a orientación nutricional adecuada.",
    icon: EyeDropperIcon,
  },
  {
    name: "Dificultades en el Monitoreo de Salud Personal.",
    description:
      "La falta de herramientas eficaces para el monitoreo de la salud personal puede dificultar que las personas hagan un seguimiento de su progreso, tomen decisiones informadas y se mantengan al tanto de su bienestar general.",
    icon: LockClosedIcon,
  },
];
export default function page() {
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
                      App Vida Saludable
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200 font-bold">
                      <span className="text-red-400 text-xl">Antecentes: </span>
                      La Evaluación del Estilo de Vida surge como respuesta a la
                      creciente preocupación por la salud y el bienestar de las
                      personas. Conscientes de la importancia de promover un
                      estilo de vida saludable entre su personal, la institución
                      ha decidido llevar a cabo este proyecto en colaboración
                      con profesionales de diversas áreas, como Ingeniería en
                      Sistemas, Nutrición, Bioquímica, Enfermería y FyK-AFD,
                      entre otros. El objetivo principal es evaluar el estado de
                      salud de los participantes, identificar posibles problemas
                      relacionados con el sobrepeso y la obesidad, y brindar
                      orientación y atención médica en función de los resultados
                      obtenidos. Poniendo un énfasis especial en la
                      confidencialidad y en garantizar que toda la información
                      médica de los empleados se maneje con la mayor discreción.
                      Además, se ha incorporado la entrega de refrigerios para
                      garantizar el bienestar de los participantes durante todo
                      el proceso. El proyecto en el cual participamos constó de
                      dos etapas, la primera etapa fue en la Universidad
                      Adventista de Bolivia. La segunda con la participación de
                      100 empleados de la Alcaldía. Este proyecto no solo se
                      limita a la evaluación inicial y la orientación, sino que
                      también se está pensando en su sostenibilidad a largo
                      plazo, buscando formas de asegurar que las prácticas
                      saludables adoptadas por los empleados perduren en el
                      tiempo.
                    </p>
                  </div>
                </div>
                <Image
                  src={asilo}
                  alt="Product screenshot"
                  className="w-[33rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[37rem] md:-ml-4 lg:-ml-0 animate__animated  animate__fadeInRight"
                  width={2432}
                  height={1442}
                  priority
                />
              </div>
              <div className="py-10">
                <span className="text-red-400 font-bold text-xl">
                  Problema:{" "}
                </span>
                <div className="space-y-5 my-5">
                  <span className="italic text-xl">
                    - Situacion Problematica:{" "}
                  </span>
                  <p>
                    En la actualidad, la falta de conciencia sobre la
                    importancia de un estilo de vida saludable y la creciente
                    prevalencia de enfermedades relacionadas con el sobrepeso y
                    la obesidad representan una preocupación significativa. Los
                    problemas de salud asociados con el estilo de vida
                    sedentario y los hábitos alimenticios poco saludables
                    afectan tanto a nivel individual como a la sociedad en su
                    conjunto. En muchas ocasiones, las personas no tienen acceso
                    a una evaluación adecuada de su estado de salud ni a la
                    orientación necesaria para llevar a cabo cambios positivos
                    en su estilo de vida.
                  </p>
                  <dl className="my-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features?.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-300">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>
                        <dd className="inline text-cyan-300 pl-2">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <span className="italic text-xl">- Problema</span>
                  <p className="mt-4">
                    El problema central es la necesidad de abordar eficazmente
                    la falta de prácticas de estilo de vida saludable entre la
                    población, específicamente entre los empleados de la
                    institución. Esto se traduce en tasas crecientes de
                    enfermedades relacionadas con el estilo de vida y una carga
                    económica significativa para la institución. La poca
                    conciencia y acceso a orientación médica adecuada son
                    obstáculos clave que dificultan la adopción de un estilo de
                    vida más saludable. El proyecto "App Vida Saludable" busca
                    abordar este problema al evaluar el estilo de vida de los
                    participantes, identificar posibles problemas relacionados
                    con el sobrepeso y la obesidad, y proporcionar orientación y
                    atención médica. Además, se busca garantizar que estas
                    prácticas saludables perduren en el tiempo, promoviendo un
                    cambio sostenible hacia un estilo de vida más saludable.
                  </p>
                </div>
              </div>
              <div>
                <span className="text-red-400 text-xl font-bold">
                  Objetivos:{" "}
                </span>
                <div className="space-y-5 mt-3">
                  <h3 className="italic text-xl">- Objetivo General: </h3>
                  <p>
                    Desarrollar una solución basada en software que promueva
                    activamente un estilo de vida saludable, mejore la
                    conciencia de la salud y aborde los desafíos relacionados
                    con la falta de motivación, la gestión de enfermedades
                    crónicas, la nutrición desequilibrada y el seguimiento de la
                    salud personal.
                  </p>
                  <h3 className="italic text-xl">- Objetivos Especificos: </h3>
                  <div>
                    <ul className="space-y-4">
                      <li>
                        Desarrollar una plataforma de educación en línea
                        accesible y efectiva que proporcione información sobre
                        prácticas de vida saludable, nutrición y ejercicio, con
                        énfasis en la prevención de enfermedades y la promoción
                        de la salud.
                      </li>
                      <li>
                        Planificar el seguimiento de salud personalizada que
                        permita a los usuarios registrar y supervisar su
                        progreso de salud, establecer metas y recibir
                        retroalimentación específica y recomendaciones.
                      </li>
                      <li>
                        Diseñar un modulo de motivación y recompensas que
                        incentive a los usuarios a mantener un estilo de vida
                        saludable y establecer rutinas de ejercicio regulares.
                      </li>
                      <li>
                        Proporcionar acceso a recursos y herramientas para la
                        gestión de enfermedades crónicas, incluyendo
                        recordatorios de medicación, seguimiento de síntomas y
                        comunicación con profesionales de la salud.
                      </li>
                      <li>
                        Desarrollar una herramienta de monitoreo de salud
                        personal altamente intuitiva y de fácil acceso que
                        permita a los usuarios realizar un seguimiento efectivo
                        de su estado de salud, incluyendo indicadores clave como
                        la actividad física, la dieta, el peso y otros factores
                        de salud relevantes. Esta herramienta proporcionará
                        información en tiempo real sobre el progreso de los
                        usuarios y les ayudará a tomar decisiones informadas
                        para mejorar su bienestar general.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <span className="text-red-400 text-xl font-bold">
                  Factibilidad:{" "}
                </span>
                <div className="space-y-5 mt-4">
                  <div>
                    <h3 className="italic text-xl">- Factibilidad Tecnica</h3>
                    <p className="font-bold my-5">
                      La factibilidad técnica se considera alta, dado que las
                      tecnologías necesarias para el desarrollo y operación de
                      un sistema de información están ampliamente disponibles y
                      son bien conocidas.
                    </p>
                    <ul className="list-disc pl-4 space-y-5">
                      <li>
                        <span>Tecnología de Desarrollo: </span> Se cuenta con
                        herramientas y lenguajes de programación ampliamente
                        utilizados en la industria, lo que facilita el
                        desarrollo del sistema.
                      </li>
                      <li>
                        <span>Hardware: </span>La infraestructura de hardware
                        necesaria para ejecutar el sistema es estándar y se
                        puede adquirir sin dificultad.
                      </li>
                      <li>
                        <span>Software: </span>Se tienen a disposición software
                        y sistemas operativos compatibles y confiables para
                        implementar el sistema.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="italic text-xl">- Factibilidad Economica</h3>
                    <p className="font-bold my-5">
                      Se requiere una inversión inicial para el desarrollo e
                      implementación del sistema, pero se espera que se traduzca
                      en ahorros y beneficios a largo plazo.
                    </p>
                    <ul className="list-disc pl-4 space-y-5">
                      <li>
                        <span>Costos de Desarrollo: </span>Se debe considerar el
                        costo de desarrollo del sistema, que incluye la
                        contratación de programadores y analistas, así como la
                        adquisición de hardware y software.
                      </li>
                      <li>
                        <span>Costos Operativos: </span>A largo plazo, se pueden
                        anticipar ahorros significativos en términos de
                        reducción de costos administrativos, mejor gestión de
                        pagos y recursos, y atención médica más eficiente.
                      </li>
                      <li>
                        <span>Retorno de Inversión (ROI)</span>El cálculo del
                        ROI debe tener en cuenta los costos iniciales frente a
                        los ahorros y beneficios esperados a lo largo del
                        tiempo. Se espera un ROI positivo.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="italic text-xl">Factibilidad Operativa</h3>
                    <p className="font-bold my-5">
                      La factibilidad operativa se refiere a si el personal y
                      los recursos disponibles son adecuados para la operación
                      del sistema propuesto.
                    </p>
                    <ul className="list-disc pl-4 space-y-5">
                      <li>
                        <span>Recursos Humanos: </span>Se deben contar con los
                        recursos humanos capacitados para el desarrollo y la
                        operación del sistema. Se pueden proporcionar
                        capacitación si es necesario.
                      </li>
                      <li>
                        <span>Recursos de Hardware y Software: </span>Se deben
                        asegurar recursos de hardware y software suficientes y
                        adecuados para la operación del sistema.
                      </li>
                      <li>
                        <span>Cambio Organizacional: </span>Se debe planificar
                        un proceso de cambio organizacional para asegurar una
                        transición efectiva de los procesos manuales a los
                        automatizados.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-red-400 text-xl font-bold">
                  Requerimientos:{" "}
                </span>
                <div className="pt-2">
                  <h3 className="italic text-xl">
                    Requerimientos Funcionales:{" "}
                  </h3>
                  <div className="my-5">
                    <ul className="list-disc pl-4 space-y-5">
                      <li>
                        <span>Admisión de Residentes:</span>
                        <ul>
                          <li>
                            -- El sistema debe permitir la admisión de nuevos
                            residentes, registrando su información personal y
                            médica de manera eficiente.
                          </li>
                          <li>
                            -- Debe verificar la disponibilidad de camas y
                            asignarlas según la capacidad de las habitaciones.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Gestión de Datos de Residentes:</span>
                        <ul>
                          <li>
                            -- El sistema debe centralizar y mantener de forma
                            segura y accesible la información personal y médica
                            de los residentes.
                          </li>
                          <li>
                            -- Debe permitir la actualización de datos de
                            residentes de manera sencilla.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Seguimiento de Pagos:</span>
                        <ul>
                          <li>
                            -- El sistema debe permitir el registro de los pagos
                            mensuales de los responsables.
                          </li>
                          <li>
                            -- Debe generar notificaciones automáticas en caso
                            de retrasos en los pagos y calcular recargos según
                            la política de la institución.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Atención Médica Estandarizada:</span>
                        <ul>
                          <li>
                            -- El sistema debe permitir a los médicos realizar
                            un seguimiento estándar de la salud de los
                            residentes, registrar diagnósticos, medicamentos y
                            tratamientos.
                          </li>
                          <li>
                            -- Debe generar recordatorios para la administración
                            de medicamentos y proporcionar informes médicos.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Generación de Informes Bimestrales:</span>
                        <ul>
                          <li>
                            -- El sistema debe generar automáticamente informes
                            bimestrales que muestren la cantidad de residentes
                            actuales, los ingresos y egresos durante el período.
                          </li>
                          <li>
                            -- Debe ofrecer herramientas de consulta y
                            visualización de datos para la administración.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="italic text-xl">
                    Requerimientos No Funcionales:{" "}
                  </h3>
                  <div className="my-5">
                    <ul className="list-disc pl-4 space-y-5">
                      <li>
                        <span>Seguridad de Datos:</span>
                        <ul>
                          <li>
                            -- El sistema debe cumplir con estándares de
                            seguridad para proteger la información personal y
                            médica de los residentes.
                          </li>
                          <li>
                            -- Debe implementar medidas de autenticación y
                            autorización para garantizar que solo usuarios
                            autorizados accedan a los datos.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Escalabilidad:</span>
                        <ul>
                          <li>
                            -- El sistema debe ser escalable para manejar un
                            aumento en el número de residentes y usuarios a
                            medida que la institución crece.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Usabilidad:</span>
                        <ul>
                          <li>
                            -- La interfaz de usuario debe ser intuitiva y fácil
                            de usar para el personal administrativo, médicos y
                            otros usuarios.
                          </li>
                          <li>
                            -- Debe minimizar la curva de aprendizaje para
                            nuevos usuarios.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Rendimiento:</span>
                        <ul>
                          <li>
                            -- El sistema debe ser capaz de manejar múltiples
                            operaciones simultáneas sin degradación
                            significativa del rendimiento.
                          </li>
                          <li>
                            -- Debe ofrecer tiempos de respuesta rápidos,
                            especialmente en el acceso a datos críticos.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-red-400 text-xl font-bold">
                  Diagrama de Casos de uso:{" "}
                </span>
                <div className="flex justify-center py-5">
                  <Image src={diagramaCasosDeUso} alt="Picture of the author" />
                </div>
              </div>

              <div>
                <span className="text-red-400 text-xl font-bold">
                  Especificacion los los casos de uso:{" "}
                </span>
                <div className="grid grid-cols-2 gap-7 py-5">
                  <Image src={diagramaEsp01} alt="Picture of the author"/>
                  <Image src={diagramaEsp02} alt="Picture of the author"/>
                  <Image src={diagramaEsp03} alt="Picture of the author"/>
                  <Image src={diagramaEsp04} alt="Picture of the author"/>
                  <Image src={diagramaEsp05} alt="Picture of the author"/>
                  <Image src={diagramaEsp06} alt="Picture of the author"/>
                  <Image src={diagramaEsp07} alt="Picture of the author"/>
                  <Image src={diagramaEsp08} alt="Picture of the author"/>
                  <Image src={diagramaEsp09} alt="Picture of the author"/>
                  <Image src={diagramaEsp10} alt="Picture of the author"/>
                  <Image src={diagramaEsp11} alt="Picture of the author"/>
                  <Image src={diagramaEsp12} alt="Picture of the author"/>
                </div>
              </div>

              <div>
                <span className="text-red-400 text-xl font-bold">
                  Diagrama de Actividad:{" "}
                </span>

                <span>Comodin del Congreso</span>
              </div>

              <div>
                <span className="text-red-400 text-xl font-bold">
                  Diagrama de Comunicacion y/o Secuencia:{" "}
                </span>
                <div className="grid grid-cols-3 py-5 gap-8">
                  <Image src={diagramaCS01} alt="Picture of the author"/>
                  <Image src={diagramaCS02} alt="Picture of the author"/>
                  <Image src={diagramaCS03} alt="Picture of the author"/>
                  <Image src={diagramaCS04} alt="Picture of the author"/>
                  <Image src={diagramaCS05} alt="Picture of the author"/>
                  <Image src={diagramaCS06} alt="Picture of the author"/>
                  <Image src={diagramaCS07} alt="Picture of the author"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
