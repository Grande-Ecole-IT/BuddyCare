import { useNavigate } from "react-router-dom";
import IconDash from "../Dashboard/Icons/dashboard";
import FlowSyncIcon from "../Dashboard/Icons/FlowSync";
import { MoodTrackrIcon } from "../Dashboard/Icons/MoodTrackr";
import { SoulScryptIcon } from "../Dashboard/Icons/SoulScrypt";
import { SynergyHubIcon } from "../Dashboard/Icons/SynergyHub";

type HeaderProps = {
  userName: string;
};

const menuItems = [
  { name: "Dashboard", icon: <IconDash />, path: "/dashboard" },
  { name: "FlowSync", icon: <FlowSyncIcon />, path: "/flowsync" },
  { name: "SoulScrypt", icon: <SoulScryptIcon />, path: "/soulscrypt" },
  { name: "MoodTrackr", icon: <MoodTrackrIcon />, path: "/moodtrackr" },
  { name: "SynergyHub", icon: <SynergyHubIcon />, path: "/synergyhub" },
];

export default function Sidebar({ userName }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col fixed w-[20%] h-full shadow-2xl z-10"
      style={{ backgroundColor: "white" }}
    >
      <div className="flex flex-row h-[10%] w-full justify-center items-center cursor-pointer" onClick={() => {
        navigate("/homePage")
      }}>
        <h1 className="font-semibold text-[30px] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          BuddyCare +
        </h1>
      </div>
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex pl-16 items-center cursor-pointer hover:bg-gray-100 transition duration-200"
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <h2 className="font-poppins text-[22px] m-10">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
