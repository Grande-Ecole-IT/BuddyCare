import Blobe from "@/components/About/Blobe";
import CustomizedCard from "@/components/About/CustomizedCard";
import ShowIcons from "@/components/About/Icons";
import NewShape from "@/components/About/NewShapeFemme";
import Tool from "@/components/About/Tools";
import CustomizeButton from "@/components/Common/Boutton";
import Header from "@/components/Common/Header";

function AboutPage() {
  return (
    <div className="flex flex-col w-full h-full items-center bg-white">
      <Header userName="Jason" />
      <div className="grid grid-cols-[2fr_1.75fr] w-[80%] h-[600px] mt-24">
        <div>
          <div className="w-[80%] mt-[30%]">
            <h1 className="text-[50px] font-semibold font-poppins">
              Bien <span className="text-primary">dans ta tête</span>, au top
              dans tes études.
            </h1>
            <p className="font-poppins pt-4">
              Être étudiant, c'est jongler entre cours, examens et pression.
              Parfois, ça devient trop. Ici, tu trouves un espace pour souffler,
              des conseils et des ressources pour gérer ton stress et ta
              motivation.
            </p>
            <div className="flex w-[50%] mt-6">
              <CustomizeButton nameOfButton="Mieux nous connaître" />
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <Blobe />
          <NewShape />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-32">
        <h1 className="font-poppins font-semibold text-[50px]">
          Pourquoi{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            StudyBuddy
          </span>
          ?
        </h1>
        <div className="grid grid-cols-[1fr_1fr_1fr] mt-28 gap-40">
          <CustomizedCard
            title="Un vrai soutien"
            description="Des conseils et ressources pensés pour les étudiants, par des étudiants."
            icon={
              <svg
                width="57"
                height="48"
                viewBox="0 0 57 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              >
                <path
                  d="M23.5962 24.6785V34.9183C23.5962 37.2746 21.686 39.1848 19.3296 39.1848H5.18906C2.8327 39.1848 0.922497 37.2746 0.922497 34.9183V24.6785C0.922497 18.4174 5.99818 13.3417 12.2594 13.3417C18.5205 13.3417 23.5962 18.4174 23.5962 24.6785Z"
                  fill="url(#paint0_linear_93_60)"
                  stroke="#8738F5"
                  stroke-width="1.21902"
                />
                <rect
                  x="4.57954"
                  y="1.27333"
                  width="15.3596"
                  height="15.3596"
                  rx="7.6798"
                  fill="#FAFAFF"
                  stroke="#8738F5"
                  stroke-width="1.21902"
                />
                <path
                  d="M55.7782 25.2879V35.5277C55.7782 37.884 53.868 39.7942 51.5117 39.7942H37.3711C35.0147 39.7942 33.1045 37.884 33.1045 35.5277V25.2879C33.1045 19.0267 38.1802 13.9511 44.4414 13.9511C50.7026 13.9511 55.7782 19.0267 55.7782 25.2879Z"
                  fill="url(#paint1_linear_93_60)"
                  stroke="#8738F5"
                  stroke-width="1.21902"
                />
                <rect
                  x="36.7616"
                  y="1.88295"
                  width="15.3596"
                  height="15.3596"
                  rx="7.6798"
                  fill="#FAFAFF"
                  stroke="#8738F5"
                  stroke-width="1.21902"
                />
                <path
                  d="M39.8091 32.8458V43.0855C39.8091 45.4419 37.8989 47.3521 35.5426 47.3521H21.402C19.0456 47.3521 17.1354 45.4419 17.1354 43.0855V32.8458C17.1354 26.5846 22.2111 21.5089 28.4723 21.5089C34.7334 21.5089 39.8091 26.5846 39.8091 32.8458Z"
                  fill="url(#paint2_linear_93_60)"
                  stroke="#8738F5"
                  stroke-width="1.21902"
                />
                <rect
                  x="20.7925"
                  y="9.44081"
                  width="15.3596"
                  height="15.3596"
                  rx="7.6798"
                  fill="#FAFAFF"
                  stroke="#8738F5"
                  stroke-width="1.21902"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_93_60"
                    x1="12.2594"
                    y1="14.9874"
                    x2="12.2594"
                    y2="39.7943"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FAFAFF" />
                    <stop offset="1" stop-color="#8738F5" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_93_60"
                    x1="44.4414"
                    y1="16.9377"
                    x2="44.4414"
                    y2="40.4037"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FAFAFF" />
                    <stop offset="1" stop-color="#8738F5" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_93_60"
                    x1="28.4723"
                    y1="23.6815"
                    x2="28.4723"
                    y2="47.9616"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FAFAFF" />
                    <stop offset="1" stop-color="#8738F5" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
          <CustomizedCard
            title="Un espace bienveillant"
            description="Ici, pas de jugement, juste de l’écoute et des solutions pour ton bien-être."
            icon={
              <svg
                width="62"
                height="49"
                viewBox="0 0 62 49"
                fill="none"
                className="relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0148 2.57957L20.0273 2.57046L20.0394 2.56088C20.1414 2.48009 20.2407 2.40062 20.338 2.32269C20.6878 2.04265 21.0126 1.78265 21.3498 1.55405C21.7749 1.26588 22.1552 1.07462 22.516 0.99553C22.8561 0.921004 23.2059 0.939527 23.6051 1.12286C24.0212 1.31399 24.5284 1.70232 25.126 2.43501C25.1495 2.46457 25.1735 2.49477 25.198 2.5256C25.8761 3.37893 26.9326 4.70864 28.086 5.99746C29.2667 7.31677 30.6125 8.66667 31.7973 9.39875C33.2089 10.271 34.6031 10.424 36.184 9.96809C37.6674 9.54031 39.3247 8.5731 41.3515 7.24212C41.3602 7.24358 41.3698 7.24536 41.3805 7.24751C41.5173 7.27521 41.7253 7.3469 42.0072 7.47859C42.5653 7.73928 43.2741 8.16827 44.0397 8.68182C45.5633 9.70375 47.2018 10.9851 48.1063 11.7019C50.1474 13.3196 53.2243 16.1986 55.7828 19.5447C58.3629 22.919 60.3072 26.6287 60.3072 29.9332C60.3072 30.0685 60.2457 30.2743 59.9175 30.5553C59.5819 30.8425 59.0391 31.1413 58.2634 31.4312C56.7182 32.0089 54.4583 32.4761 51.677 32.8332C46.13 33.5454 38.7015 33.797 31.2357 33.7167C23.7742 33.6364 16.3086 33.2249 10.6963 32.6194C7.88603 32.3162 5.56366 31.9667 3.94531 31.5918C3.13062 31.4031 2.53229 31.2163 2.14829 31.0422C1.99667 30.9735 1.9022 30.9171 1.84839 30.8788C1.45982 29.2764 1.80767 27.1058 2.792 24.5596C3.77866 22.0073 5.35968 19.1924 7.26369 16.4018C11.0772 10.8125 16.1051 5.43765 20.0148 2.57957ZM41.2879 7.23581C41.2877 7.23561 41.2908 7.23536 41.2975 7.23564C41.2914 7.23614 41.288 7.23601 41.2879 7.23581ZM1.79934 30.8386C1.79945 30.8386 1.80082 30.8399 1.80318 30.8426C1.80041 30.8399 1.79923 30.8386 1.79934 30.8386Z"
                  fill="#8738F5"
                  stroke="#FAFAFF"
                  stroke-width="1.60397"
                />
                <path
                  d="M16.0475 40.5802C12.4986 37.7454 17.376 24.4255 20.7429 16.5935C22.7266 24.2075 25.2854 38.35 23.4728 40.3077C20.7975 43.197 17.1394 41.4525 16.0475 40.5802Z"
                  fill="#433074"
                  stroke="#FAFAFF"
                  stroke-width="0.976565"
                />
                <path
                  d="M43.4715 38.0146C41.0238 36.0564 44.3878 26.8558 46.7099 21.4458C48.0781 26.7051 49.8429 36.4741 48.5927 37.8263C46.7476 39.8221 44.2246 38.6171 43.4715 38.0146Z"
                  fill="url(#paint0_linear_95_113)"
                  stroke="#FAFAFF"
                  stroke-width="0.753126"
                />
                <path
                  d="M25.8554 36.6729C22.3066 33.8262 27.184 20.4508 30.5508 12.5862C32.5345 20.2319 35.0933 34.4334 33.2807 36.3991C30.6054 39.3005 26.9473 37.5487 25.8554 36.6729Z"
                  fill="#4112FD"
                  stroke="#FAFAFF"
                  stroke-width="0.976565"
                />
                <path
                  d="M19.7527 44.3713C16.1635 41.5247 21.0964 28.1493 24.5015 20.2847C26.5077 27.9304 29.0956 42.1319 27.2624 44.0976C24.5567 46.999 20.8571 45.2472 19.7527 44.3713Z"
                  fill="#F0DCFF"
                  stroke="#FAFAFF"
                  stroke-width="0.976565"
                />
                <path
                  d="M11.4072 46.4807C7.85835 43.6341 12.7358 30.2587 16.1026 22.394C18.0863 30.0397 20.6451 44.2412 18.8325 46.207C16.1572 49.1084 12.4991 47.3566 11.4072 46.4807Z"
                  fill="#8738F5"
                  stroke="#FAFAFF"
                  stroke-width="0.976565"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_95_113"
                    x1="45.8186"
                    y1="21.4458"
                    x2="45.8186"
                    y2="38.9291"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3102ED" />
                    <stop offset="1" stop-color="#F0DCFF" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
          <CustomizedCard
            title="Des outils concrets"
            description="Gestion du stress, motivation, équilibre… Tout ce qu’il te faut pour avancer"
            icon={
              <svg
                width="56"
                height="39"
                viewBox="0 0 56 39"
                fill="none"
                className="relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.906149"
                  y="0.906149"
                  width="54.1877"
                  height="31.1715"
                  rx="5.25566"
                  fill="#8738F5"
                  stroke="#FAFAFF"
                  stroke-width="1.8123"
                />
                <path
                  d="M15.2233 37.3333H40.5955"
                  stroke="#FAFAFF"
                  stroke-width="2.71845"
                  stroke-linecap="round"
                />
                <line
                  x1="23.9223"
                  y1="35.0679"
                  x2="32.0776"
                  y2="35.0679"
                  stroke="#FAFAFF"
                  stroke-width="4.53074"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className="flex justify-start flex-col mt-32 w-[60%]">
        <h1 className="font-poppins font-semibold text-[50px] w-[70%]">
          Voyons les disponible{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            outils{" "}
          </span>
          pour vous
        </h1>
        <div>
          <div className="flex flex-row mb-5">
            <div className="flex flex-row w-[90%] mt-28 justify-center">
              <div className="flex flex-col justify-evenly w-[100%] gap-36">
                <Tool
                  number="1"
                  title="Mindmate"
                  description="Ton compagnon intelligent qui t’aide au quotidien avec des
                    conseils et du soutien."
                />
                <Tool
                  number="3"
                  title="SoulScript"
                  description="Un espace sécurisé pour écrire tes pensées, suivre ton évolution et mieux te comprendre."
                />
                <Tool
                  number="5"
                  title="SynergyHub"
                  description="Un espace d’échange pour discuter, partager des expériences et trouver du soutien."
                />
              </div>
              <div className="flex flex-col justify-evenly w-[100%] gap-36">
                <Tool
                  number="2"
                  title="Flowsync"
                  description="Un outil qui te propose des routines adaptées pour améliorer ton bien-être et ta productivité."
                />
                <Tool
                  number="4"
                  title="MoodTrackr"
                  description="Un calendrier interactif qui te permet de revoir tes émotions passées et de suivre l’évolution de ton état d’esprit."
                />
              </div>
            </div>
            <div className="flex flex-row justify-center w-[65%] mt-28">
              <ShowIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
