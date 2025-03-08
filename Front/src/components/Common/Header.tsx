import { useNavigate } from "react-router-dom";

type HeaderProps = {
  bouttonRole: string,
  style: string
};

export default function Header({ bouttonRole, style }: HeaderProps) {
  const initials = bouttonRole
    .split(" ")
    .map((name) => name[0])
    .join("");
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center fixed w-full shadow-xl z-10"
      style={{ backgroundColor: "white" }}
    >
      <div className="p-2 w-[80%] grid grid-cols-[1fr_2fr] items-center gap-5x">
        {/* Cercle avec les initiales */}
        <div className="flex justify-start items-center">
          <div
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-black font-bold text-dynamic-2xl rounded-full"
            style={{
              backgroundColor: "#F87777",
              fontFamily: "Island Moments, cursive",
            }}
          >
            {initials}
          </div>
        </div>

        <div className="flex justify-end items-center space-x-5">
          <a
            href="#homePage "
            className="text-lg font-medium text-black p-4 relative group"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("accueil")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: style
            }}
          >
            Accueil
            <div className="absolute bottom-0 left-0 bg-black h-[2px] transition-all duration-300 w-0 group-hover:w-[70%] ml-4"></div>
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-black p-4 relative group"
            style={{
              display: style
            }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            À Propos
            <div className="absolute bottom-0 left-0 bg-black h-[2px] transition-all duration-300 w-0 group-hover:w-[70%] ml-4"></div>
          </a>
          <a
            className="text-lg font-medium text-primary border-2 border-[#8738F5] p-4"
            onClick={() => {
              navigate("/question1");
            }}
          >
            {bouttonRole}
            <div className="absolute bottom-0 left-0 bg-black h-[2px] transition-all duration-300 w-0 group-hover:w-[80%] ml-4"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
