import CustomizeButton from "@/components/Common/Boutton";
import CustomizedDateField from "@/components/Login/Shape/CustomizedDateField";
import CustomizeTextField from "@/components/Login/Shape/CustomizedTextField";
import DiamondShape from "@/components/Login/Shape/Diamond";
import EllipsShape from "@/components/Login/Shape/Ellipse";
import PolygonShape from "@/components/Login/Shape/Polygon1";
import TriangleShape from "@/components/Login/Shape/Triangle";
import { signinUser } from "@/store/reducers/auth";
import { AppDispatch, RootState } from "@/store/store";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type SignInFormData = {
  username: string;
  password: string;
  birthday: Date;
  study: string;
  sex: string
};

const transformData = (data: any) => {
  return {
    username: data.Pseudo, // "Pseudo" → "username"
    password: data.MotDePasse, // "MotDePasse" → "password"
    birthday: new Date(data.dateNaissance), // "dateNaissance" (string) → Date
    study: data.Filière, // "Filière" → "study"
    sex: data.Genre, // "Genre" → "sex"
  };
};

const SignIn = () => {
   const dispatch = useDispatch<AppDispatch>();
   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
   } = useForm<SignInFormData>();

   const { status, error } = useSelector((state: RootState) => state.auth);
   const navigate = useNavigate(); 

   const onSubmit = async (data: SignInFormData) => {
      const formattedData = transformData(data);
     try {
       const result = await dispatch(signinUser(formattedData)).unwrap(); // Déclenche signinUser
       console.log("Inscription réussie :", result);
       reset(); // Réinitialiser le formulaire après succès
        navigate("/login")
     } catch (err) {
       console.error("Erreur lors de l'inscription :", err);
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
      <div className="flex justify-center items-center w-full h-full bg-transparent">
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
            <h1 className="font-semibold text-2xl">S'inscrire</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full justify-center space-y-4 px-16 my-7"
            >
              {/* Champ Pseudo */}
              <CustomizeTextField
                register={register}
                errors={errors}
                name="Pseudo"
                placeholder="Pseudo"
                isMdp={false}
              />
              <CustomizedDateField
                register={register}
                errors={errors}
                name="dateNaissance"
                label="Date de naissance"
              />
              {/* Champ Filière */}
              <CustomizeTextField
                register={register}
                errors={errors}
                name="Filière"
                placeholder="Filière"
                isMdp={false}
              />

              {/* Champ Mot de passe */}
              <CustomizeTextField
                register={register}
                errors={errors}
                name="MotDePasse"
                placeholder="Mot de passe"
                isMdp={true}
              />

              {/* Sélection du Genre */}
              <div className="flex flex-col space-y-2">
                <span className="text-gray-700">Genre :</span>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      {...register("Genre", {
                        required: "Le genre est requis.",
                      })}
                      value="Homme"
                      className="w-5 h-5"
                    />
                    <span>Homme</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      {...register("Genre")}
                      value="Femme"
                      className="w-5 h-5"
                    />
                    <span>Femme</span>
                  </label>
                </div>
                {errors.Genre && (
                  <p className="text-red-500">{errors.Genre.message}</p>
                )}
              </div>

              {/* Bouton de soumission */}
              <CustomizeButton nameOfButton="Confirmer" onSubmit={() => {}} />
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
