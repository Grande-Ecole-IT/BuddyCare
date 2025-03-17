import CustomizeButton from "@/components/Common/Boutton";
import CustomizeTextField from "@/components/Login/Shape/CustomizedTextField";
import DiamondShape from "@/components/Login/Shape/Diamond";
import EllipsShape from "@/components/Login/Shape/Ellipse";
import PolygonShape from "@/components/Login/Shape/Polygon1";
import TriangleShape from "@/components/Login/Shape/Triangle";
import { loginUser } from "@/store/reducers/auth";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [idUser, setIdUser] = useState<number>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error, user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (status === "succeeded" && user) {
      console.log("Connexion réussie:", user);
      navigate("/dashboard");
    }
  }, [status, user, navigate]);
  // Local state for the form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      // Dispatch de l'action et attente de sa résolution
      const actionResult = await dispatch(loginUser(data));
      // Vérification si l'action a réussi
      const id_user = actionResult.payload.id_user;
      if (loginUser.fulfilled.match(actionResult)) {
        // L'action a réussi, vous pouvez accéder aux données ici
        // Redirection vers la page d'accueil
        navigate("/dashboard", { state: { id_user: id_user } });
        // Réinitialisation du formulaire
        reset();
      } else {
        // L'action a échoué, gestion de l'erreur
        console.error(
          "Erreur lors de la connexion:",
          actionResult.error.message
        );
      }
    } catch (error) {
      // Gestion des erreurs inattendues
      console.error("Erreur lors de la soumission du formulaire:", error);
    }
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-100">
      <div className="fixed w-[60rem] h-[60rem] z-10 top-[-50%] right-[-20%]">
        {/* {" "}
         */}
        <div className="flex w-[100%] h-[100%] rounded-full bg-[#C4A7EC] blur-[200px]">
          <div className="w-[50%] h-[50%] bg-primary rounded-full mt-[40%] ml-[21%]"></div>
        </div>
      </div>
      <div className="fixed w-[60rem] h-[60rem] z-10 bottom-[-50%] left-[-20%]">
        {/* {" "}
         */}
        <div className="flex w-[100%] h-[100%] rounded-full bg-[#C4A7EC] blur-[200px]">
          <div className="w-[50%] h-[50%] bg-primary rounded-full mt-[40%] ml-[21%]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full border-2 border-red-300 bg-transparent">
        <div className="relative grid grid-cols-2 z-50 border-transparent bg-gradient-to-tl from-[rgba(251,251,254,0.4)] via-transparent to-[rgba(135,56,245,0.4)] w-[50%] h-[600px] after:w-[500px] after:h-[604px] after:absolute after:z-[-1]">
          <div
            className="relative"
            style={{
              backgroundColor: "transparent",
              borderTopLeftRadius: "12px",
            }}
          >
            <TriangleShape />
            <DiamondShape />
            <PolygonShape />
            <EllipsShape />
          </div>
          <div
            className="flex flex-col items-center justify-center py-16"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <h1 className="font-semibold text-2xl">Se connecter</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full justify-center space-y-4 px-16 my-7"
            >
              <CustomizeTextField
                register={register}
                errors={errors}
                name="username"
                placeholder="Nom"
                isMdp={false}
              />
              <CustomizeTextField
                register={register}
                errors={errors}
                name="password"
                placeholder="Mot de passe"
                isMdp={true}
              />
              <CustomizeButton nameOfButton="Login" onSubmit={() => {}} />
            </form>
            <h2
              className="text-[17px] pb-6 cursor-pointer"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Besoin d'un compte ?{" "}
              <span className="text-[#4112FD]">créer un compte</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
