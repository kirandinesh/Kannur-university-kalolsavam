function EventStatusTile({ event }) {
  return (
    <div className="relative flex items-center gap-2 py-2 px-10  rounded-xl border border-slate-800 bg-slate-950 pr-4">
      <div className="flex justify-between w-full items-center">
        <div className="flex-1 min-w-0">
          <h1 className="text-white font-texts truncate lg:py-1.5 sm:text-lg md:text-xl lg:text-2xl">
            {event?.name}
          </h1>
        </div>
        <div className="flex items-center shrink-0">
          <div className="flex items-center gap-1.5">
            <div
              className={`h-2 w-2 rounded-full shadow-lg ${
                event?.status === "ongoing"
                  ? "bg-orange-500 shadow-orange-500 animate-bouncef"
                  : event?.status === "completed"
                  ? "bg-emerald-500 shadow-emerald-500 animate-bouncef"
                  : "bg-red-500 shadow-red-500/50"
              }`}
            />

            <span className="text-sm md:text-lg tracking-wider font-heading font-bold sm:text-base text-slate-300">
              {event?.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventStatusTile;
