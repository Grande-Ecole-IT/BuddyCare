import { TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type DateFieldProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  name: string;
  label: string;
};

function CustomizedDateField({
  register,
  errors,
  name,
  label,
}: DateFieldProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div
        className="relative p-[4px] rounded-[16.36px] mt-3"
        style={{
          background:
            "linear-gradient(to bottom, hsla(265, 90%, 59%, 1) 30%, hsla(265, 90%, 59%, 0) 70%)",
        }}
      >
        <TextField
          id={name}
          fullWidth
          type="date"
          variant="outlined"
          {...register(name, { required: `${label} est requis.` })}
          error={Boolean(errors[name])}
          InputLabelProps={{
            shrink: true, // Permet d'afficher le label correctement
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12.36px",
              backgroundColor: "white",
              "& fieldset": {
                borderColor: "transparent", // Suppression de la bordure par défaut
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
      {errors[name]?.message && (
        <p className="pl-1" style={{ color: "red" }}>
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default CustomizedDateField;
