import BotonHome from "@/components/BotonHome";
import CardItems from "@/components/CardItems";


export default function ActividadesPage() {
  const cardItemContent = [
    {
      id: 1,
      title: "Análisis y Diseño de Sistemas",
      subtitle: "Sistema Comercial",
      userAdmin: "Adrian Calcinas",
      disponible: "Disponible",
      fecha: "2023-8-09",
      tituloPromblema: "Mi Tienda",
    },
    {
      id: 2,
      title: "Análisis y Diseño de Sistemas",
      subtitle: "Sistema de Medida",
      userAdmin: "Adrian Calcinas",
      disponible: "Disponible",
      fecha: "2023-8-29",
      tituloPromblema: "Asilo de Ancianos",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl mt-10 font-bold tracking-tight text-gray-300 sm:text-4xl">
          Proyectos
        </h2>
        <div className="">
          <CardItems link={"SoftwareComercial"} content={cardItemContent[0]} />
          <CardItems link={"SoftwareMedida"} content={cardItemContent[1]} />
        </div>
      </div>
      <div>{/* mas contenido pronto */}</div>
    </div>
  );
}
