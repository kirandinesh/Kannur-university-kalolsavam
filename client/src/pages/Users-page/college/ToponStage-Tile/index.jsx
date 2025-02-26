function TopOnStageTile({ onStage, index }) {
  const rankGradients = [
    "conic-gradient(from 0deg, #fff, #FFD200, #FFD900)",
    "conic-gradient(from 0deg, #fff, #D9D9D9, #C0C0C0)",
    "conic-gradient(from 0deg, #fff, #D4884A, #CD7F32)",
  ];

  return (
    <div className="flex flex-col items-center  relative w-full">
      <div className="z-30 flex flex-col w-full items-center justify-center min-h-40 transition-all duration-300 bg-slate-800 shadow-md rounded-2xl shadow-zinc-400 relative">
        <div
          className="absolute -top-7 -left-5 flex items-center justify-center w-16 h-16 2xl:w-20 2xl:h-20 rounded-full shadow-sm animate-spin"
          style={{
            background:
              rankGradients[index] ||
              "conic-gradient(from 0deg, #808080, #A9A9A9, #808080)",
          }}
        />
        <div
          className="absolute -top-6 -left-4 flex items-center justify-center w-14 h-14  2xl:w-18 2xl:h-18  font-bold text-2xl 2xl:text-5xl stroke-2  stroke-white rounded-full bg-white shadow-md "
          style={{
            WebkitTextStroke: "2px gray",
            WebkitTextFillColor: "transparent",
          }}
        >
          {index + 1}
        </div>

        <div className="flex flex-col justify-center  w-full pl-14 p-1 py-5 rounded-b-2xl">
          <p className="text-lg font-semibold font-subHeading sm:text-xl md:text-2xl leading-6 text-gray-300">
            {onStage?.onStagecollegeName}
          </p>
          <p className="text-lg pt-2 md:text-xl">
            <span className="connect font-heading animate-shine font-bold text-xl sm:text-2xl xl:text-xl md:text-2xl lg:text-3xl 2xl:text-2xl">
              {onStage?.onStagepoints} pts
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopOnStageTile;
