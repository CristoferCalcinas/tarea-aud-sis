import Image from "next/image";
import {
  CurrencyDollarIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  EyeDropperIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import asilo from "../../../../public/images/asilo.png";
import diagramaCasosDeUso from "../../../../public/images/DCU_Asilo.jpg";
import especificacion01 from '../../../../public/images/es01.jpg'
import especificacion02 from '../../../../public/images/es02.jpg'
import especificacion03 from '../../../../public/images/es03.jpg'
import especificacion04 from '../../../../public/images/es04.jpg'
import especificacion05 from '../../../../public/images/es05.jpg'
import especificacion06 from '../../../../public/images/es06.jpg'
import especificacion07 from '../../../../public/images/es07.jpg'
import especificacion08 from '../../../../public/images/es08.jpg'
import digramaSecCom01 from '../../../../public/images/ds01.jpg'
import digramaSecCom02 from '../../../../public/images/ds02.jpg'
import digramaSecCom03 from '../../../../public/images/ds03.jpg'
import digramaSecCom04 from '../../../../public/images/ds04.jpg'
import digramaSecCom05 from '../../../../public/images/ds05.jpg'
import digramaSecCom06 from '../../../../public/images/ds06.jpg'
import digramaSecCom07 from '../../../../public/images/ds07.jpg'
import digramaSecCom08 from '../../../../public/images/ds08.jpg'
import digramaSecCom09 from '../../../../public/images/ds09.jpg'
import digramaSecCom10 from '../../../../public/images/ds10.jpg'
import digramaActiv01 from '../../../../public/images/da01.jpg'
import digramaActiv02 from '../../../../public/images/da02.jpg'
import digramaActiv03 from '../../../../public/images/da03.jpg'
import digramaActiv04 from '../../../../public/images/da04.jpg'
import digramaActiv05 from '../../../../public/images/da05.jpg'
import digramaActiv06 from '../../../../public/images/da06.jpg'
import digramaActiv08 from '../../../../public/images/da08.jpg'
const features = [
  {
    name: "Admisión y Registro Manual.",
    description:
      "El proceso de admisión y registro de nuevos residentes se realiza de manera manual y, a menudo, requiere una significativa carga de trabajo administrativo, lo que puede generar retrasos en la atención.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Gestión de Datos Descentralizada.",
    description:
      "La información personal y médica de los residentes se mantiene en sistemas descentralizados o en papel, lo que dificulta la accesibilidad, la integridad y la seguridad de los datos.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Seguimiento de Pagos Ineficiente.",
    description:
      "La gestión de pagos mensuales es propensa a retrasos y errores, lo que puede impactar negativamente en los ingresos del hogar de ancianos.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Atención Médica No Estandarizada.",
    description:
      "La atención médica y el seguimiento de medicamentos no siguen un proceso estandarizado, lo que puede dar lugar a inconsistencias en la atención de los residentes.",
    icon: EyeDropperIcon,
  },
  {
    name: "Informes Manuales y Tiempo-Consumidores.",
    description:
      "La generación de informes bimestrales requiere una considerable inversión de tiempo y esfuerzo del personal, lo que afecta la capacidad de la administración para tomar decisiones informadas.",
    icon: LockClosedIcon,
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
                      <span className="text-red-400 text-xl">Antecentes: </span>
                      El Hogar de Ancianos de Valle Hermoso, una institución de
                      larga trayectoria dedicada al alojamiento y cuidado de
                      personas mayores, ha servido a la comunidad con notoria
                      dedicación. Proporcionando atención integral a los
                      ancianos, ya sean residentes particulares o beneficiarios
                      de la obra social, principalmente a través de PAMI. A lo
                      largo de su historia, el hogar ha enfrentado desafíos
                      operativos significativos, que incluyen la necesidad de
                      una admisión eficiente, la gestión precisa de la
                      información residente y la atención médica adecuada. El
                      crecimiento de la población de ancianos y la evolución de
                      los sistemas de salud y seguros sociales han motivado la
                      búsqueda de una solución eficaz y moderna. La
                      implementación de un sistema de información integral se
                      presenta como una respuesta esencial para optimizar la
                      administración del hogar y brindar una atención de calidad
                      a los residentes.
                    </p>
                  </div>
                </div>
                <Image
                  src={asilo}
                  alt="Product screenshot"
                  className="w-[33rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] md:-ml-4 lg:-ml-0 animate__animated  animate__fadeInRight"
                  width={2432}
                  height={1442}
                  priority
                />
              </div>
              <div className="py-2 space-y-5">
                <span className="text-red-400 font-bold text-xl">
                  Problema:{" "}
                </span>
                <div>
                  <span className="italic text-xl">
                    - Situacion Problematica:{" "}
                  </span>
                  <p className="mt-2">
                    El Hogar de Ancianos de Valle Hermoso, a pesar de su larga
                    historia de atención dedicada a los ancianos de la
                    comunidad, se enfrenta a una serie de desafíos operativos y
                    administrativos que afectan su eficiencia y la calidad de
                    los servicios prestados. Entre las principales situaciones
                    problemáticas se encuentran:
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
                        <dd className="inline text-cyan-300 pl-2">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <span className="italic text-xl">- Problema</span>
                  <p className="mt-2">
                    El Hogar de Ancianos de Valle Hermoso enfrenta desafíos en
                    la admisión, la gestión de datos, el seguimiento de pagos,
                    la atención médica y la generación de informes, lo que
                    impacta la eficiencia y calidad de sus servicios. Para
                    abordar estas dificultades, se requiere un sistema de
                    información integral que automatice y optimice estos
                    procesos, mejorando la gestión y atención brindada a los
                    residentes.
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <span className="text-red-400 text-xl font-bold">
                  Objetivos:{" "}
                </span>
                <div className="space-y-5 text-justify">
                  <h3 className="italic text-xl">- Objetivo General: </h3>
                  <p>
                    Implementar un sistema de información integral en el Hogar
                    de Ancianos de Valle Hermoso, que mejore la eficiencia de
                    las operaciones, garantice la calidad de la atención
                    brindada a los residentes y optimice la gestión de la
                    institución.
                  </p>
                  <h3 className="italic text-xl">- Objetivos Especificos: </h3>
                  <div>
                    <ul className="space-y-4">
                      <li>
                        Automatizar el proceso de admisión y registro de
                        residentes, reduciendo el tiempo y esfuerzo
                        administrativo involucrado y eliminando retrasos en la
                        atención.
                      </li>
                      <li>
                        Centralizar y digitalizar la información personal y
                        médica de los residentes, garantizando la integridad y
                        accesibilidad de los datos, y cumplir con los estándares
                        de seguridad de la información.
                      </li>
                      <li>
                        Establecer un sistema de seguimiento de pagos mensuales
                        eficiente que minimice los retrasos y errores, mejorando
                        la gestión financiera del hogar de ancianos.
                      </li>
                      <li>
                        Estandarizar la atención médica, permitiendo un
                        seguimiento preciso de los medicamentos y los
                        tratamientos de cada residente, lo que conduce a una
                        atención médica más consistente y de alta calidad.
                      </li>
                      <li>
                        Implementar un módulo de generación de informes
                        automatizado que simplifique y acelere la creación de
                        informes bimestrales, proporcionando a la administración
                        una visión clara y oportuna de los datos relevantes para
                        la toma de decisiones.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <span className="text-red-400 text-xl font-bold">
                  Factibilidad:{" "}
                </span>
                <div className="pt-2">
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
                  <div className="mt-7">
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
                  <div className="mt-7">
                    <h3 className="italic text-xl">- Factibilidad Operativa</h3>
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
              <div className="my-5">
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
                  <Image src={diagramaCasosDeUso} alt="Picture of the author"></Image>
                </div>
              </div>

              <div>
                <span className="text-red-400 text-xl font-bold">
                  Especificacion los los casos de uso:{" "}
                </span>
                <div className="grid grid-cols-3 py-5 gap-3">
                  <Image src={especificacion01} alt="Picture of the author"></Image>
                  <Image src={especificacion02} alt="Picture of the author"></Image>
                  <Image src={especificacion03} alt="Picture of the author"></Image>
                  <Image src={especificacion04} alt="Picture of the author"></Image>
                  <Image src={especificacion05} alt="Picture of the author"></Image>
                  <Image src={especificacion06} alt="Picture of the author"></Image>
                  <Image src={especificacion07} alt="Picture of the author"></Image>
                  <Image src={especificacion08} alt="Picture of the author"></Image>
                </div>
              </div>

              <div>
                <span className="text-red-400 text-xl font-bold">
                  Diagrama de Actividad:{" "}
                </span>
                <div className="grid grid-cols-3 py-5 gap-3">
                  <Image src={digramaActiv01} alt="Picture of the author"></Image>
                  <Image src={digramaActiv02} alt="Picture of the author"></Image>
                  <Image src={digramaActiv03} alt="Picture of the author"></Image>
                  <Image src={digramaActiv04} alt="Picture of the author"></Image>
                  <Image src={digramaActiv05} alt="Picture of the author"></Image>
                  <Image src={digramaActiv06} alt="Picture of the author"></Image>
                  <Image src={digramaActiv08} alt="Picture of the author"></Image>
                </div>
              </div>

              <div>
                <span className="text-red-400 text-xl font-bold">
                  Diagrama de Comunicacion y/o Secuencia:{" "}
                </span>
                <div className="grid grid-cols-3 py-5 gap-3">
                  <Image src={digramaSecCom01} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom02} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom03} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom04} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom05} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom06} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom07} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom08} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom09} alt="Picture of the author"></Image>
                  <Image src={digramaSecCom10} alt="Picture of the author"></Image>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center my-10">
            <h3 className="my-5 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl text-center">
              Herramientas de Recoleccion de Datos
            </h3>
            <CardHerramientas posts={posts} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
