function AchievementTile({ achievement }) {
  return (
    <div className="relative   group  border-sky-900 border-4  rounded-2xl  bg-sky-800 px-3 py-2 flex flex-col items-start gap-3">
      <div className="font-heading text-lg leading-2 flex flex-col justify-center items-center  font-semibold absolute  -right-3 -bottom-3 bg-white text-sky-600 p-3 rounded-full">
        {achievement?.points} <br />
        <span className="text-xs font-texts">pts</span>
      </div>
      <div className="text-gray-50 mb-8">
        <span className="font-bold text-3xl">
          {achievement?.achievementName}
        </span>
        {achievement?.studentName.length > 0 ? (
          <div className="flex">
            <span className="text-md mt-2 border-l-4 border-white pl-2 leading-6   ">
              <p className="font-black font-heading tracking-wider text-xl text-cyan-500  ">
                <span className="absolute inset-0" />
                {achievement?.studentName[0].toUpperCase() +
                  achievement?.studentName.slice(1)}
              </p>
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="flex">
          <span className="text-md mt-2 border-l-4 sm:text-xl  border-white pl-2   ">
            <p className="font-bold text-sky-300 ">
              {achievement?.collegeName}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AchievementTile;
