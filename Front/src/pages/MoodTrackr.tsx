import Sidebar from "@/components/Common/SideBar";


export default function MoodTrackr() {
  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Sidebar */}
      <Sidebar userName="Jason" />

      {/* Contenu principal */}
      <div className="flex flex-col ml-[20%] rounded-b-3xl p-6">
        <h1 className="font-medium text-[36px] font-poppins ml-11">MoodTrackr</h1>
        <div className="flex flex-col justify-center  w-[900px] ml-[15%] mt-[5%]">
          <h1 className="font-poppins font-semibold text-[52px] text-center">
            Bienvenu dans ,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MoodTrakr{" "}
            </span>
            comment tu te sens aujourd’hui ?
          </h1>
          <div className="flex flex-col justify-center items-center mt-20">
            <div className="grid grid-cols-2 gap-72 mb-32">
              <svg
                width="124"
                height="128"
                viewBox="0 0 124 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_135_1501)">
                  <rect width="118" height="118" rx="59" fill="#CADC87" />
                  <circle
                    cx="36.5377"
                    cy="52.3922"
                    r="5.70968"
                    transform="rotate(-14.7565 36.5377 52.3922)"
                    fill="black"
                  />
                  <circle
                    cx="58.6231"
                    cy="46.5748"
                    r="5.70968"
                    transform="rotate(-14.7565 58.6231 46.5748)"
                    fill="black"
                  />
                  <path
                    d="M43.7739 68.9429C46.8441 71.4207 54.5364 74.4235 60.7437 66.6126"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_135_1501"
                    x="0"
                    y="0"
                    width="124"
                    height="128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="8" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_135_1501"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_135_1501"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="124"
                height="128"
                viewBox="0 0 124 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_135_1523)">
                  <rect width="118" height="118" rx="59" fill="#FF8686" />
                  <circle cx="47.5808" cy="53.2903" r="4.75806" fill="black" />
                  <path
                    d="M41.8711 45.6775L55.1937 53.2904"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="4.75806"
                    cy="4.75806"
                    r="4.75806"
                    transform="matrix(-1 0 0 1 76.1289 49.4839)"
                    fill="black"
                  />
                  <path
                    d="M77.0806 46.6292L63.758 54.2421"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.4355 68.5162C53.6076 63.7581 70.4194 56.1453 70.4194 68.5162C70.4194 80.887 70.4194 64.7098 70.4194 72.3228"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_135_1523"
                    x="0"
                    y="0"
                    width="124"
                    height="128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="8" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_135_1523"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_135_1523"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-72">
              <svg
                width="124"
                height="128"
                viewBox="0 0 124 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_135_1499)">
                  <rect width="118" height="118" rx="59" fill="#B2D7F4" />
                  <circle cx="59.0002" cy="47.5805" r="5.70968" fill="black" />
                  <circle cx="85.6452" cy="47.5805" r="5.70968" fill="black" />
                  <path
                    d="M64.7095 64.7097H81.8385"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_135_1499"
                    x="0"
                    y="0"
                    width="124"
                    height="128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="8" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_135_1499"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_135_1499"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="124"
                height="128"
                viewBox="0 0 124 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_135_1511)">
                  <rect width="118" height="118" rx="59" fill="#FCE643" />
                  <circle cx="39.968" cy="27.5969" r="5.70968" fill="black" />
                  <path
                    d="M46.0479 43.262C50.9784 47.5575 61.9791 52.3413 66.5384 37.1127"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                  <path
                    d="M65.6613 17.1292L59 24.7421C61.5376 23.156 67.3742 20.3646 70.4194 21.8872"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_135_1511"
                    x="0"
                    y="0"
                    width="124"
                    height="128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="8" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_135_1511"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_135_1511"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="124"
                height="128"
                viewBox="0 0 124 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_135_1539)">
                  <rect width="118" height="118" rx="59" fill="#B9B2F6" />
                  <path
                    d="M38.0645 49.4839C39.9677 52.0215 45.2967 55.5742 51.387 49.4839"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                  <path
                    d="M68.5161 51.3872C70.1021 53.6076 74.6064 56.7162 79.9355 51.3872"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                  <path
                    d="M48.5322 62.8064C52.3387 59.6343 61.4742 56.1451 67.5645 67.5644"
                    stroke="black"
                    stroke-width="3.80645"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_135_1539"
                    x="0"
                    y="0"
                    width="124"
                    height="128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="8" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_135_1539"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_135_1539"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
