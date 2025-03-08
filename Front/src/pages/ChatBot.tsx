import Noty from "@/components/Common/Noty";
import Sidebar from "@/components/Common/SideBar";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, TextField } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import robot2 from "../assets/robot2.png";

const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

export default function ChatBotIA() {
  const location = useLocation();
  const { id_user } = location.state || {}; // Récupère id_user depuis l'objet state
  const [messages, setMessages] = useState([]);
  const [inputMess, setInputMess] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    if (!id_user) return;

    // Adaptez l'URL en fonction de votre domaine et port
    const ws = new WebSocket(`ws://localhost:8000/ws/${id_user}`);
    socket.current = ws;

    ws.onopen = () => {
      console.log("Connexion WebSocket établie");
    };

    ws.onmessage = (event) => {
      const newMessage = {
        text: event.data,
        sender: "received",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    ws.onerror = (error) => {
      console.error("Erreur WebSocket :", error);
    };

    ws.onclose = () => {
      console.log("Connexion WebSocket fermée");
    };

    // Nettoyage lors du démontage
    return () => {
      ws.close();
    };
  }, [id_user]);

  // Fonction pour gérer l'envoi du message
  const handleSendMessage = () => {
    if (inputMess.trim() === "") return; // Ne pas envoyer de message vide

    const newMessage = {
      text: inputMess,
      sender: "sent",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(inputMess);
    } else {
      console.error("La connexion WebSocket n'est pas ouverte.");
    }

    setInputMess(""); // Réinitialiser l'input
  };

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
        <div className="absolute w-[800px] h-[500px] overflow-y-auto overflow-x-hidden">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender} w-[235px] h-auto shadow-2xl`}
            >
              <p>{msg.text}</p>
              <span className="time">{msg.time}</span>
            </div>
          ))}
        </div>
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
            value={inputMess}
            onChange={(e) => setInputMess(e.target.value)}
            placeholder="Écrire"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSendMessage}>
                  <SendIcon className="text-primary" />
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12.36px",
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "transparent",
                  borderWidth: "2.47px",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
