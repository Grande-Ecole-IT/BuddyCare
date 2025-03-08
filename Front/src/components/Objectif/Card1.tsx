type CardObjectifProps = {
  title: string;
  image1: string;
  top: string;
};
function CardObjectif({ title, image1, top }: CardObjectifProps) {
  return (
    <div
      className="relative h-full w-full"
      style={{
        top: top,
      }}
    >
      {" "}
      <div className="absolute left-[-40px] top-[-20px] z-50">
        <svg
          width="452"
          height="460"
          viewBox="0 0 452 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M336.339 344.339C399.73 280.948 399.73 178.171 336.339 114.78C272.948 51.3887 170.171 51.3887 106.78 114.78C43.3887 178.171 43.3887 280.948 106.78 344.339C170.171 407.73 272.948 407.73 336.339 344.339ZM120.107 308.797L300.797 128.107C250.29 88.5583 177.05 92.0373 130.544 138.544C84.0373 185.05 80.5583 258.29 120.107 308.797ZM323.731 151.249C362.517 201.721 358.798 274.353 312.575 320.575C266.353 366.798 193.721 370.517 143.249 331.731L323.731 151.249Z"
            fill="#FA2727"
            fill-opacity="0.3"
          />
        </svg>
      </div>
      <div
        className="absolute border-2 border-accent h-[400px] w-[340px] bg-secondary"
        style={{
          borderRadius: "19% 69% 23% 60% / 23% 48% 14% 66%",
          overflow: "hidden",
        }}
      >
        <div
          className="relative bg-white h-[400px] w-[340px] top-[-40px]"
          style={{
            borderRadius: "19% 69% 23% 60% / 23% 48% 14% 66%",
            transform: "rotate(-110deg)",
          }}
        >
          <div
            className="absolute h-[350px] w-[340px] justify-center items-center top-4 left-5"
            style={{
              borderRadius: "64% 36% 61% 39% / 71% 27% 73% 29%",
              background: "white",
              overflow: "hidden",
              transform: "rotate(100deg)",
            }}
          >
            <img
              src={image1}
              alt=""
              className="absolute"
              style={{
                top: "15%",
                left: "11%",
                transform: "rotate(10deg) ",
                scale: "1.3",
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[26rem] font w-[350px]">
        <h1 className="flex justify-center text-center font-poppins font-semibold text-[25px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
export default CardObjectif;
