import CustomizeButton from "@/components/Common/Boutton";
import Header from "@/components/Common/Header";

const Question2 = () => {
    return (
        <div className="relative border-2">
            <Header userName={""} />
            <div className="fullscreen-bg-2"></div>
            <div className="absolute fullscreen-bg-img">
                <svg width="1128" height="1024" viewBox="0 0 1128 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M570.346 138.5C513.346 24.5 630.512 -26.5 681.846 -29.5L1115.35 -48V1031L233.346 1071.5C2.14575 947.9 86.3457 817 157.346 767C241.346 702.5 500.953 759.666 373.346 525.5C276.346 347.5 387.846 269.556 487.846 276.5C631.846 286.5 596.346 190.5 570.346 138.5Z" fill="url(#paint0_linear_104_307)" />
                    <path d="M488.346 138.5C431.346 24.5 548.512 -26.5 599.846 -29.5L1033.35 -48V1031L151.346 1071.5C-79.8542 947.9 4.3457 817 75.3457 767C159.346 702.5 418.953 759.666 291.346 525.5C194.346 347.5 305.846 269.556 405.846 276.5C549.846 286.5 514.346 190.5 488.346 138.5Z" fill="url(#paint1_linear_104_307)" />
                    <path d="M645.346 138.5C588.346 24.5 705.512 -26.5 756.846 -29.5L1190.35 -48V1031L308.346 1071.5C77.1458 947.9 161.346 817 232.346 767C316.346 702.5 575.953 759.666 448.346 525.5C351.346 347.5 462.846 269.556 562.846 276.5C706.846 286.5 671.346 190.5 645.346 138.5Z" fill="#FAFAFF" />
                    <defs>
                        <linearGradient id="paint0_linear_104_307" x1="598.673" y1="721.656" x2="598.672" y2="-48" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8738F5" stop-opacity="0" />
                            <stop offset="1" stop-color="#8738F5" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_104_307" x1="516.673" y1="721.656" x2="516.672" y2="-48" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8738F5" stop-opacity="0" />
                            <stop offset="1" stop-color="#8738F5" stop-opacity="0.8" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="container flex justify-center items-center ml-36 mt-12">
                <div className="left-container">
                    <div className="q2-question">
                        FAIS-TOI CONNAÎTRE, ON NE MORD PAS... ENFIN PRESQUE ! 😂
                    </div>
                    <div className="button-div">
                        <CustomizeButton nameOfButton={"Précédent"} />
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-cont-text">
                        J’ai compris ! Combien de temps vous faut-il habituellement pour vous lever le matin
                    </div>
                    <div className="q2-responses">
                        <div className="q2-resp">🕐 Moins de 6 heures</div>
                        <div className="q2-resp">🕓 Entre 6 et 8 heures</div>
                        <div className="q2-resp">🕛 Entre 8 et 10 heures</div>
                        <div className="q2-resp">🕘 Plus de 10 heures</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question2;