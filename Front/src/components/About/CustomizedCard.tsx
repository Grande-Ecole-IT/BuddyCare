import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};
function CustomizedCard({ title, description, icon }: CardProps) {
  return (
    <div className="relative">
      <div
        className="absolute border-2 border-accent h-[400px] w-[340px]"
        style={{
          borderRadius: "64% 36% 61% 39% / 71% 27% 73% 29%",
        }}
      ></div>
      <div
        className="absolute bg-[#C8B3FF]  h-[400px] w-[340px] opacity-[0.2]"
        style={{
          borderRadius: "64% 36% 61% 39% / 71% 27% 73% 29%",
          transform: "rotate(-150deg)",
        }}
      ></div>
      <div
        className="absolute bg-[#C8B3FF] h-[440px] w-[380px] opacity-[0.2] top-[-20px]"
        style={{
          borderRadius: "64% 36% 61% 39% / 71% 27% 73% 29%",
          transform: "rotate(135deg)",
        }}
      ></div>
      <div
        className="relative border-[1px] border-accent h-[400px] w-[340px] justify-center items-center"
        style={{
          borderRadius: "64% 36% 61% 39% / 71% 27% 73% 29%",
          background: "transparent",
        }}
      >
        <div className="absolute rounded-full h-[75px] w-[75px] bg-secondaryTransparent 	backdrop-blur-sm">
         {icon}
        </div>
        <div className="absolute top-32 left-[-10px]">
          <h1 className="flex w-full justify-start ml-20 mb-[-10px] font-poppins text-[20px] font-bold">
            {title}
          </h1>
          <br />
          <p className="flex w-[70%] justify-start ml-20 text-[15px] font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default CustomizedCard;
