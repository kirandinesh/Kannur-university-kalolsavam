function TopCollegeTile({ college, index }) {
  const gradients = [
    "bg-gradient-to-r from-yellow-400 to-yellow-600",
    "bg-gradient-to-r from-gray-300 to-gray-500",
    "bg-gradient-to-r from-orange-500 to-orange-700",
    "bg-gradient-to-r from-[#cd7f32] to-[#b87333]",
  ];
  return (
    <div
      className={`service-card w-full justify-between rounded-2xl shadow-xl  relative  sm:p-12 md:p-5 lg:p-10 cursor-pointer snap-start shrink-0 py-8 px-6 flex flex-col ${gradients[index]} items-start gap-3 transition-all duration-300 group `}
    >
      <div className="flex justify-between xl:space-x-10 space-x-4  w-full items-center">
        <div>
          <div className="bg-red-300 z-10 ">
            {index === 0 ? (
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 71.693 122.881"
                enableBackground="new 0 0 71.693 122.881"
                xmlSpace="preserve"
                className="absolute w-20 h-26 sm:w-32 sm:h-32 md:w-36 md:h-32 
                top-0 right-0 xl:w-40 xl:h-40"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="white"
                    d="M1.189,0.021h25.908l23.339,42.446c0.5,0.9,1.229,1.609,2.06,2.06 H17.658L1.189,0V0.021L1.189,0.021L1.189,0.021z M35.847,66.335l5.989,14.619l15.769,1.189L45.536,92.383l3.75,15.339l-13.439-8.33 l-13.439,8.33l3.75-15.339L14.078,82.134l15.769-1.19L35.847,66.335L35.847,66.335L35.847,66.335L35.847,66.335z M35.847,51.186 c19.799,0,35.847,16.049,35.847,35.847s-16.048,35.848-35.847,35.848C16.048,122.87,0,106.821,0,87.022 C0,67.225,16.048,51.186,35.847,51.186L35.847,51.186L35.847,51.186z M39.026,0.021h30.317L57.146,32.998L39.026,0.021 L39.026,0.021L39.026,0.021z"
                  />
                </g>
              </svg>
            ) : null}
          </div>
          <p
            style={{
              WebkitTextStroke: "2px white",
              WebkitTextFillColor: "transparent",
            }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold self-end "
          >
            {index + 1}
          </p>
        </div>
        <div className="grow z-30 flex flex-col ">
          <h2
            className="font-bold sm:leading-10 tracking-wide text-base font-heading 
          sm:text-xl md:text-2xl
          "
          >
            {college?.name}
          </h2>
          <p className="font-bold font-heading sm:text-xl tracking-widest md:text-2xl">
            <span className="font-medium font-subHeading tracking-wide">
              Point :
            </span>
            &nbsp;
            {college?.totalPoints}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopCollegeTile;
