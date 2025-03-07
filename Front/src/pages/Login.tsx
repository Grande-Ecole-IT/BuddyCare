import CustomizeButton from "@/components/Common/Boutton";
import CustomizeTextField from "@/components/Login/Shape/CustomizedTextField";
import DiamondShape from "@/components/Login/Shape/Diamond";
import EllipsShape from "@/components/Login/Shape/Ellipse";
import PolygonShape from "@/components/Login/Shape/Polygon1";
import TriangleShape from "@/components/Login/Shape/Triangle";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
    reset()
  };
  console.log(errors);
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
                name="Nom"
                placeholder="Nom"
                isMdp={false}
              />
              <CustomizeTextField
                register={register}
                errors={errors}
                name="Prénom"
                placeholder="Prénoms"
                isMdp={false}
              />
              <CustomizeTextField
                register={register}
                errors={errors}
                name="Mot de passe"
                placeholder="Mot de passe"
                isMdp={true}
              />
              <CustomizeButton nameOfButton="Soumettre" />
            </form>
            <h2 className="text-[17px] pb-6">
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
