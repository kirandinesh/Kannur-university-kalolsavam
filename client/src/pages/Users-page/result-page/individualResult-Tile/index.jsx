import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function IndividualResultTile({ result }) {
  const pluginFirst = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const pluginSecond = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const pluginThird = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full mx-auto ">
      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl py-8 px-3 border border-gray-800">
        {/* Decorative Borders */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-400 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-pink-500 rounded-br-2xl"></div>

        <div className="relative">
          <div className="flex justify-center items-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-t from-rose-700 via-red-500 to-white font-heading">
              {result?.eventName}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {/* Group College Section */}
            {result?.groupCollegeName && (
              <div className="p-2 text-center bg-gray-900 rounded-xl shadow-lg">
                <p className="text-gray-300 text-lg font-bold">
                  {result?.groupCollegeName}
                </p>
                <p className="mt-1 font-medium text-white">
                  <strong className="text-red-600">Group Points: </strong>
                  <span className=" text-red-600 tracking-wider">
                    {result?.groupPoints || "0"}
                  </span>
                </p>
              </div>
            )}

            {/* First Prize Section */}
            <div className="flex flex-col  gap-2">
              <div className="bg-gradient-to-r   from-yellow-500 to-yellow-300 p-2 rounded-2xl shadow-xl text-center">
                <span className="text-white text-xl font-bold">
                  🥇 First Prize
                </span>
              </div>
              <div className="w-full   flex justify-center overflow-x-auto">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[pluginFirst.current]}
                  onMouseEnter={pluginFirst.current.stop}
                  onMouseLeave={pluginFirst.current.play}
                  className="w-full flex px-4   justify-center"
                >
                  <CarouselContent>
                    {result?.firstPrize?.map((first) => (
                      <CarouselItem
                        className="  flex  w-md  justify-center"
                        key={first._id}
                      >
                        <div className="bg-black rounded-2xl w-full shadow p-3   text-center">
                          <h3 className="text-lg font-semibold text-white">
                            {first?.studentName}
                          </h3>
                          <span className="text-gray-300">
                            {first?.collegeName}
                          </span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Second Prize Section */}
            <div className="flex flex-col gap-2">
              <div className="bg-gradient-to-r from-gray-400 to-gray-200 p-2 rounded-2xl shadow-xl text-center">
                <span className="text-black text-xl font-bold">
                  🥈 Second Prize
                </span>
              </div>
              <div className="w-full  flex justify-center overflow-x-auto">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[pluginSecond.current]}
                  onMouseEnter={pluginSecond.current.stop}
                  onMouseLeave={pluginSecond.current.play}
                  className="w-full flex px-4  justify-center"
                >
                  <CarouselContent>
                    {result?.secondPrize?.map((second) => (
                      <CarouselItem
                        className="  flex  w-md  justify-center"
                        key={second._id}
                      >
                        <div className="bg-black rounded-2xl w-full shadow p-3   text-center">
                          <h3 className="text-lg font-semibold text-white">
                            {second?.studentName}
                          </h3>
                          <span className="text-gray-300">
                            {second?.collegeName}
                          </span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Third Prize Section */}
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-2 rounded-2xl shadow-xl text-center">
                <span className="text-white text-xl font-bold">
                  🥉 Third Prize
                </span>
              </div>
              <div className="w-full  flex justify-center items-center ">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[pluginThird.current]}
                  onMouseEnter={pluginThird.current.stop}
                  onMouseLeave={pluginThird.current.play}
                  className="w-full flex px-4  justify-center"
                >
                  <CarouselContent>
                    {result?.thirdPrize?.map((third) => (
                      <CarouselItem
                        className="  flex  w-md  justify-center"
                        key={third._id}
                      >
                        <div className="bg-black rounded-2xl w-full shadow p-3   text-center">
                          <h3 className="text-lg font-semibold text-white">
                            {third?.studentName}
                          </h3>
                          <span className="text-gray-300">
                            {third?.collegeName}
                          </span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualResultTile;
