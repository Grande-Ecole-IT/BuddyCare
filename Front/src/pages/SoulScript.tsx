import CustomizeButton from "@/components/Common/Boutton";
import Sidebar from "@/components/Common/SideBar";


export default function SoulScript() {
  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Sidebar */}
      <Sidebar userName="Jason" />

      {/* Contenu principal */}
      <div className="flex flex-col ml-[20%] rounded-b-3xl p-6">
        <h1 className="font-medium text-[36px] font-poppins ml-11">
          SoulScript
        </h1>
        <div className="flex flex-col justify-center items-center w-[900px] ml-[15%] mt-[10%]">
          <h1 className="font-poppins font-semibold text-[52px] text-center">
            Vous n’avez pas encore ajouter de feuille dans{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SoulScrypt{" "}
            </span>
          </h1>
          <div className="mt-24 w-[400px]">
            <CustomizeButton nameOfButton="Ajouter" onSubmit={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
