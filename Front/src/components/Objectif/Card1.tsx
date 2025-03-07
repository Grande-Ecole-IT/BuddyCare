type CardObjectifProps = {
  title: string;
  image1: string;
  top: string
}
function CardObjectif({ title, image1, top }: CardObjectifProps) {
  return (
    <div className="relative h-full w-full" style={{
      top: top
    }}>
      <div
        className="absolute border-2 border-accent h-[400px] w-[340px] bg-secondary"
        style={{
          borderRadius: "19% 69% 23% 60% / 23% 48% 14% 66%",
          overflow: "hidden",
        }}
      >
        <div
          className="relative bg-white h-[400px] w-[340px]"
          style={{
            borderRadius: "19% 69% 23% 60% / 23% 48% 14% 66%",
            transform: "rotate(-110deg)",
          }}
        >
          <div
            className="absolute h-[250px] w-[340px] justify-center items-center top-24"
            style={{
              borderRadius: "64% 36% 61% 39% / 71% 27% 73% 29%",
              background: "transparent",
              overflow: "hidden",
              transform: "rotate(110deg)",
            }}
          >
            <img
              src={image1}
              alt=""
              className="absolute right-[15%]"
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
          <div className="absolute top-44">
            <svg
              width="147"
              height="147"
              viewBox="0 0 147 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M124.856 124.857C153.365 96.3483 153.365 50.1273 124.856 21.619C96.3481 -6.88927 50.1271 -6.88927 21.6188 21.619C-6.88948 50.1273 -6.88948 96.3483 21.6188 124.857C50.1271 153.365 96.3481 153.365 124.856 124.857ZM27.6123 108.872L108.872 27.6125C86.1585 9.82669 53.2208 11.3912 32.3059 32.3061C11.391 53.221 9.82648 86.1587 27.6123 108.872ZM119.186 38.02C136.629 60.7182 134.957 93.3821 114.169 114.169C93.3819 134.957 60.718 136.629 38.0198 119.186L119.186 38.02Z"
                fill="#FA2727"
              />
            </svg>
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
