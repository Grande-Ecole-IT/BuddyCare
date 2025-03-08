import Noty from "@/components/Common/Noty";
import Sidebar from "@/components/Common/SideBar";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import robot2 from "../assets/robot2.png";
import SendIcon from '@mui/icons-material/Send';

const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

export default function ChatBotIA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
            <h1 className="text-black text-[25px] font-poppins">Pseudo</h1>
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
      <div className="flex flex-col justify-center items-center ml-[20%] rounded-b-3xl p-6 overflow-hidden h-[640px]">
        <div className="relative">
          <div
            className="absolute w-[557px] h-[415px] top-[-400px] left-[250px] bg-[#F0DCFF]"
            style={{
              borderRadius: "34% 66% 52% 48% / 41% 74% 26% 59% ",
            }}
          ></div>
          <div
            className="absolute w-[557px] h-[415px] top-[0px] right-[270px] bg-secondary"
            style={{
              borderRadius: "34% 66% 52% 48% / 41% 74% 26% 59% ",
              transform: "rotate(190deg)",
            }}
          ></div>
        </div>
        <img
          src={robot2}
          alt=""
          width="217.93px"
          height="204.17px"
          className="absolute top-64 left-[25%]"
        />
        <h2 className="text-[25px]">De quoi veux-tu discuter ?</h2>
        <div
          className="relative p-[4px] rounded-[16.36px] mt-3 top-[40%]"
          style={{
            background:
              "linear-gradient(to bottom, hsla(265, 90%, 59%, 1) 30%, hsla(265, 90%, 59%, 0) 70%)",
          }}
        >
          <TextField
            id="outlined-basic"
            fullWidth
            placeholder="Écrire"
            variant="outlined"
            {...register("message", {
              required: `Message est réquis.`,
            })}
            error={Boolean(errors.message)}
            InputProps={{
              endAdornment: (
                  <SendIcon
                    onClick={() => {}}
                    className="text-primary"
                  >
                  </SendIcon>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12.36px",
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "transparent", // On masque la bordure par défaut
                  borderWidth: "2.47px",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)", // Ombre
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
