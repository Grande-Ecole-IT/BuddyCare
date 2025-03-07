import Header from "@/components/Common/Header";
import CardObjectif1 from "@/components/Objectif/Card1";
import image1 from "../assets/image1.png"; // Assure-toi du bon chemin
import lock from "../assets/lock.png"
import sadPerson from "../assets/freepik__upload__3185 1.png"
import image2 from "../assets/bringThings.png"

function Objectif() {
  return (
    <div className="flex flex-col w-full h-full items-center bg-white">
      <Header userName="Jason" />
      <div className="flex flex-col w-full mt-40 mb-24">
        <div className="flex w-full justify-center items-center">
          <h1 className="font-poppins font-semibold text-[64px] w-[70%]">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BuddyCare +
            </span>{" "}
            est là pour vous, dites adieu à la détresse
          </h1>
        </div>
        <div className="grid grid-flow-col gap-10 ml-14 mt-11">
          <CardObjectif1 title="Désorganiser" image1={image1} top="160px" />
          <CardObjectif1 title="Pas assez de temps" image1={lock} top="" />
          <CardObjectif1
            title="Facilement déformer"
            image1={image2}
            top="160px"
          />
          <CardObjectif1 title="Dépression" image1={sadPerson} top="" />
        </div>
      </div>
    </div>
  );
}
export default Objectif;
