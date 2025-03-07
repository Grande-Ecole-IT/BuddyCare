import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

type TextFieldProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  name: string;
  placeholder: string;
  isMdp: boolean
};
function CustomizeTextField({register, errors, name, placeholder, isMdp}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

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
        {isMdp ? (
          <TextField
            id="outlined-basic"
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            variant="outlined"
            {...register(`${name}`, {
              required: `${name} est réquis.`,
            })}
            error={Boolean(errors[name])}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
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
        ) : (
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
        )}
      </div>
      {errors[`${name}`]?.message && (
        <p className="pl-1" style={{ color: "red" }}>
          {errors[`${name}`]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default CustomizeTextField;
