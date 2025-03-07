import Header from "@/components/Common/Header";

const Question1 = () => {
    return (
        <div className="relative border-2 border-red-500">
            <div className="absolute fullscreen-bg">
                <svg width="1156" height="1024" viewBox="0 0 1156 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M585 164.5C642 50.5 524.833 -0.5 473.5 -3.5L40 -22V1057L922 1097.5C1153.2 973.9 1069 843 998 793C914 728.5 654.392 785.666 782 551.5C879 373.5 767.5 295.556 667.5 302.5C523.5 312.5 559 216.5 585 164.5Z" fill="url(#paint0_linear_104_248)" />
                    <path d="M667 164.5C724 50.5 606.833 -0.5 555.5 -3.5L122 -22V1057L1004 1097.5C1235.2 973.9 1151 843 1080 793C996 728.5 736.392 785.666 864 551.5C961 373.5 849.5 295.556 749.5 302.5C605.5 312.5 641 216.5 667 164.5Z" fill="url(#paint1_linear_104_248)" />
                    <path d="M510 164.5C567 50.5 449.833 -0.5 398.5 -3.5L-35 -22V1057L847 1097.5C1078.2 973.9 994 843 923 793C839 728.5 579.392 785.666 707 551.5C804 373.5 692.5 295.556 592.5 302.5C448.5 312.5 484 216.5 510 164.5Z" fill="#FAFAFF" />
                    <defs>
                        <linearGradient id="paint0_linear_104_248" x1="556.673" y1="747.656" x2="556.674" y2="-22" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8738F5" stop-opacity="0" />
                            <stop offset="1" stop-color="#8738F5" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_104_248" x1="638.673" y1="747.656" x2="638.674" y2="-22" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8738F5" stop-opacity="0" />
                            <stop offset="1" stop-color="#8738F5" stop-opacity="0.8" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="container flex justify-center border-2 border-red-800 items-center ml-36 mt-12">
                <div className="q1-responses">
                    <div className="q1-resp">🥱 Moins de 6 heures</div>
                    <div className="q1-resp">😊 Entre 6 et 8 heures</div>
                    <div className="q1-resp">😀 Entre 8 et 10 heures</div>
                    <div className="q1-resp">😁 Plus de 10 heures</div>
                </div>
                <div className="q1-question">COMBIEN D'HEURES DE SOMMEIL AS-TU BESOIN POUR ÊTRE UN SUPER-HÉROS ?</div>
            </div>
        </div>
    )
}

export default Question1;