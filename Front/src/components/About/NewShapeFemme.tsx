import { motion } from "framer-motion";
import femmeImg from "../../assets/Femme.png"; // Assure-toi du bon chemin

function NewShape() {
  console.log("Dadasasd");
  return (
    <motion.img
      src={femmeImg}
      alt=""
      className="absolute top-12 left-56"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
export default NewShape;
