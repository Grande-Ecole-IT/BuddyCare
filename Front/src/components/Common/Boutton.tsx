import { Button } from "@mui/material";

type bouttonProps = {
  nameOfButton: string;
  onSubmit: () => void
}
function CustomizeButton({ nameOfButton, onSubmit }: bouttonProps) {
  return (
    <div
      className="relative pb-[5px] rounded-[14.36px] mt-3"
      style={{
        background: "hsla(265, 90%, 59%, 1)",
        marginTop: "25px"
      }}
    >
      <Button
        variant="contained"
        type="submit"
        fullWidth
        className="flex justify-center items-center text-center h-14 active:translate-y-1"
        style={{
          backgroundColor: "white",
          border: "1px solid hsla(265, 90%, 59%, 1)",
          color: "black",
          borderRadius: "12.36px",
          padding: "10px 16px",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        onClick={onSubmit}
      >
        {nameOfButton}
      </Button>
    </div>
  );
}

export default CustomizeButton;
