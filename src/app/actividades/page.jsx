import CardItems from "@/components/CardItems";
import SoftwareComercialPage from "./SoftwareComercial/page";

export default function ActividadesPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-white text-5xl mt-10">Proyectos</h2>
        <div className="">
          <CardItems link={"SoftwareComercial"} />
          <CardItems link={"SoftwareMedida"} />
        </div>
      </div>
      <div>{/* mas contenido pronto */}</div>
    </div>
  );
}
