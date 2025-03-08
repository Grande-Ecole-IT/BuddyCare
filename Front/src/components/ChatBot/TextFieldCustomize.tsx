import { TextField } from "@mui/material";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type TextFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  errors: FieldErrors;
  name: string;
  placeholder: string;
  onClick: React.MouseEventHandler<HTMLElement>;
};
function CustomizeTextField({
  register,
  errors,
  name,
  placeholder,
  onClick,
}: TextFieldProps) {

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <div
        className="relative p-[4px] rounded-[16.36px] mt-3"
        style={{
          background:
            "linear-gradient(to bottom, hsla(265, 90%, 59%, 1) 30%, hsla(265, 90%, 59%, 0) 70%)",
        }}
      >
        <TextField
          id="outlined-basic"
          fullWidth
          placeholder={placeholder}
          variant="outlined"
          {...register(`${name}`, {
            required: `${name} est réquis.`,
          })}
          error={Boolean(errors.title)}
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
  );
}

export default CustomizeTextField;
