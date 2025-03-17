import Noty from "@/components/Common/Noty";
import Sidebar from "@/components/Common/SideBar";
import { getUser } from "@/store/reducers/auth";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import buttonImage from "../assets/customizedButtom.png";
import robot from "../assets/robot.png";

const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

export default function Dashboard() {
  const location = useLocation();
  const idUser = location.state || {}; // Récupère idUser depuis l'objet stat
  const id_user = idUser.id_user;
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const response = dispatch(getUser(id_user));

  console.log(response.data)

  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Sidebar */}
      <Sidebar userName="Jason" />

      {/* Contenu principal */}
      <div className="flex flex-col bg-secondary ml-[20%] rounded-b-3xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full px-6">
          <h1 className="font-medium text-[36px] font-poppins">Dashboard</h1>

          <div className="flex items-center space-x-6">
            <Noty width="45px" color="#122C34" count={10} />
            <div className="rounded-full w-[60px] h-[60px] bg-[#00FF73]"></div>
            <h1 className="text-black text-[25px] font-poppins">Sarobidy</h1>
          </div>
        </div>

        {/* Calendrier */}
        <div className="flex flex-col justify-center items-center w-full mt-2">
          <h1 className="text-black text-[36px] font-poppins font-medium mb-3">
            Aujourd'hui
          </h1>
          <div className="grid grid-cols-7 gap-28">
            {days.map((day, index) => (
              <div
                key={day}
                className="group flex flex-col p-2 items-center rounded-t-[3rem] rounded-b-[3rem] hover:bg-primary"
              >
                <h1 className="text-[25px] font-poppins font-medium mb-4">
                  {day}
                </h1>
                <div className="flex items-center justify-center border-2 border-black w-[40px] h-[40px] rounded-full group-hover:bg-white">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ml-[20%] rounded-b-3xl p-6">
        <h1 className="text-center font-poppins font-[500] text-[50px] w-[60%] mb-5">
          Hey! Je suis{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MindMate
          </span>
          , ton compagnon virtuel
        </h1>
        <img src={robot} alt="" width="327.93px" height="314.17px" />
      </div>
      <button
        className="flex justify-end mr-[2%]"
        onClick={() => navigate("/chatBotIa", { state: { id_user: id_user } })}
      >
        <img src={buttonImage} alt="" width="100px" height="100px" />
      </button>
    </div>
  );
}
