import { ReactNode } from "react";

type CardIcon = {
  icon: ReactNode;
  top: string;
  left: string
};
function ContentIcon({ icon, top, left }: CardIcon) {
  return (
    <div
      className="absolute flex justify-center items-center h-[94px] w-[94px] bg-gradient-to-r from-primary to-accent rounded-full"
      style={{
        top: `${top}`,
        left: `${left}`
      }}
    >
      <div className="flex justify-center items-center h-[84px] w-[84px] bg-white rounded-full">
        {icon}
      </div>
    </div>
  );
}
export default ContentIcon;
