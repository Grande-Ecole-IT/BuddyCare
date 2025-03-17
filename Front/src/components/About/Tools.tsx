type ToolProps = {
  number: string;
  title: string;
  description: string;
}
function Tool ({number, title, description}: ToolProps) {
  return (
    <div className="w-[60%]">
      <h1 className="font-poppins font-semibold text-[50px]">
        {number}<span className="text-accent">.</span>
      </h1>
      <h3 className="font-poppins font-semibold text-[25px]">{title}</h3>
      <p className="text-[#646464]">
        {description}
      </p>
    </div>
  );
}
export default Tool;