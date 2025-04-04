import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";

function PrizeCarousel({ title, prizeList, bgGradient }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  ]);

  if (!prizeList || prizeList.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`${bgGradient} p-2 rounded-2xl shadow-xl text-center`}
        style={{
          WebkitMask:
            "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
          mask: "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
        }}
      >
        <span className="text-white text-xl font-bold">{title}</span>
      </div>
      <div className="w-full flex justify-center overflow-x-auto">
        <div className="embla w-full flex justify-center" ref={emblaRef}>
          <div className="embla__container w-full">
            {prizeList.map((winner) => (
              <div
                className="embla__slide flex w-md justify-center"
                key={winner._id}
              >
                <div className="text-center border-2 rounded-xl shadow-sm p-5 w-full relative">
                  <div className="absolute top-1 right-0 mr-1 rounded-full">
                    <Badge className="bg-sky-600 font-heading text-sm">
                      {winner?.grade}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-black">
                    {winner?.studentName}
                  </h3>
                  <span className="text-gray-600 font-subHeading">
                    {winner?.collegeName}
                  </span>

                  {winner?.members?.length > 0 && (
                    <div className="mt-2">
                      <div className="border-t border-b py-1 mb-1"></div>
                      <div className="embla">
                        <div className="embla__container">
                          {winner?.members?.map((member, idx) => (
                            <div className="embla__slide" key={idx}>
                              <button className="font-heading flex w-full gap-2 items-center mx-auto shadow-xl text-sm text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
                                {member?.memberName || ""}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrizeCarousel;
