import CardItems from "@/components/CardItems";

export default function ActividadesPage() {
  const cardItemContent = [
    {
      id: 1,
      title: "Análisis y Diseño de Sistemas",
      subtitle: "Tipos de Sistemas",
      userAdmin: "Adrian Calcinas",
      disponible: "Disponible",
      fecha: "2023-8-01",
      tituloPromblema: "GDSS",
    },
    {
      id: 2,
      title: "Análisis y Diseño de Sistemas",
      subtitle: "Sistema Comercial",
      userAdmin: "Adrian Calcinas",
      disponible: "Disponible",
      fecha: "2023-8-09",
      tituloPromblema: "Mi Tienda",
    },
    {
      id: 3,
      title: "Análisis y Diseño de Sistemas",
      subtitle: "Sistema de Medida",
      userAdmin: "Adrian Calcinas",
      disponible: "Actualizando",
      fecha: "2023-8-29",
      tituloPromblema: "Asilo de Ancianos",
    },
    {
      id: 4,
      title: "Análisis y Diseño de Sistemas",
      subtitle: "App Vida Saludable",
      userAdmin: "Adrian Calcinas",
      disponible: "Nuevo",
      fecha: "2023-9-19",
      tituloPromblema: "App Vida Saludable",
    },
  ];
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl mt-10 font-bold tracking-tight text-gray-300 sm:text-6xl animate__animated animate__bounceInUp">
          Proyectos
        </h2>
        <div className="">
          <CardItems link={"TiposDeSistemas"} content={cardItemContent[0]} />
          <CardItems link={"SoftwareComercial"} content={cardItemContent[1]} />
          <CardItems link={"SoftwareMedida"} content={cardItemContent[2]} />
          <CardItems link={"AppVidaSaludable"} content={cardItemContent[3]} />
        </div>
      </div>
      <div>{/* mas contenido pronto */}</div>
    </div>
  );
}
