import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";

function IndividualResultTile({ result }) {
  const pluginFirst = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const pluginSecond = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const pluginThird = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  ]);
  const [emblaRefsecond] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  ]);
  const [emblaRefthird] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  ]);

  return (
    <div className="w-full xl:max-w-[400px] shrink-0  mx-auto ">
      <div className="">
        <div className="absolute flex items-center justify-center text-white  opacity-90 rounded-xl inset-0.5 "></div>
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
      </div>
      <div className="relative drop-shadow-xl  overflow-hidden border-2 shadow-xl   backdrop-blur-xl rounded-2xl py-8 px-3  ">
        <div className="absolute top-0 left-0 bottom-0 right-0   backdrop-blur-[6px] "></div>
        <div className="relative">
          <div className="flex justify-center items-center">
            <h2
              className="text-xl md:text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-t from-rose-700
             via-red-500 to-white font-heading sm:text-lg xl:text-2xl"
            >
              {result?.eventName}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {/* Group College Section */}

            {/* First Prize Section */}
            {result?.firstPrize && result?.firstPrize?.length > 0 ? (
              <div className="flex flex-col  gap-2">
                <div
                  className="bg-gradient-to-r from-amber-500 to-yellow-400 p-2 rounded-2xl shadow-xl text-center"
                  style={{
                    WebkitMask:
                      "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
                    mask: "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
                  }}
                >
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
                    className="w-full flex   justify-center"
                  >
                    <CarouselContent>
                      {result?.firstPrize?.map((first) => (
                        <CarouselItem
                          className="  flex  w-md  justify-center"
                          key={first._id}
                        >
                          <div className="text-center border-2 rounded-xl shadow-sm pt-5  w-full p-3  relative  ">
                            <div className="absolute top-1 right-0 mr-1 rounded-full">
                              <Badge className="bg-sky-600 font-heading text-sm">
                                {first?.grade}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-black">
                              {first?.studentName}
                            </h3>
                            <span className="text-gray-600 font-subHeading ">
                              {first?.collegeName}
                            </span>
                            {first?.members?.length > 0 ? (
                              <div className="mt-2">
                                <div className="border-t border-b py-1 mb-1">
                                  <span></span>
                                </div>
                                <div className="embla " ref={emblaRef}>
                                  <div className="embla__container">
                                    {first?.members?.map((member, idx) => (
                                      <div
                                        className={`${
                                          first?.members?.length > 0
                                            ? "embla__slide"
                                            : ""
                                        }`}
                                        key={idx}
                                      >
                                        <button className="font-heading flex  w-full gap-2 items-center mx-auto shadow-xl text-sm text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
                                          {member?.memberName || ""}
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* Second Prize Section */}
            {result?.secondPrize && result?.secondPrize?.length > 0 ? (
              <div className="flex flex-col gap-2">
                <div
                  className="bg-gradient-to-r from-gray-400 to-gray-200 p-2 rounded-2xl shadow-xl text-center"
                  style={{
                    WebkitMask:
                      "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
                    mask: "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
                  }}
                >
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
                    className="w-full flex   justify-center"
                  >
                    <CarouselContent>
                      {result?.secondPrize?.map((second) => (
                        <CarouselItem
                          className="  flex  w-md  justify-center"
                          key={second._id}
                        >
                          <div className="text-center border-2 rounded-xl shadow-sm  pt-5 w-full p-3 relative  ">
                            <div className="absolute top-1 right-0 mr-1 rounded-full">
                              <Badge className="bg-sky-600 font-heading text-sm">
                                {second?.grade}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-black">
                              {second?.studentName}
                            </h3>
                            <span className="text-gray-600 font-subHeading ">
                              {second?.collegeName}
                            </span>
                            {second?.members?.length > 0 ? (
                              <div className="mt-2">
                                <div className="border-t border-b py-1 mt-2 mb-1">
                                  <span></span>
                                </div>
                                <div className="embla " ref={emblaRefsecond}>
                                  <div className="embla__container">
                                    {second?.members?.map((member, idx) => (
                                      <div
                                        className={`${
                                          second?.members?.length > 0
                                            ? "embla__slide"
                                            : ""
                                        }`}
                                        key={idx}
                                      >
                                        <button className="font-heading flex  w-full gap-2 items-center mx-auto shadow-xl text-sm text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
                                          {member?.memberName || ""}
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* Third Prize Section */}
            {result?.thirdPrize && result?.thirdPrize?.length > 0 ? (
              <div className="flex flex-col gap-2 w-full">
                <div
                  className="bg-gradient-to-r from-orange-600 to-orange-400 p-2 rounded-2xl shadow-xl text-center"
                  style={{
                    WebkitMask:
                      "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
                    mask: "linear-gradient(90deg, transparent, white 30%, white 80%, transparent)",
                  }}
                >
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
                    className="w-full flex   justify-center"
                  >
                    <CarouselContent>
                      {result?.thirdPrize?.map((third) => (
                        <CarouselItem
                          className="  flex  w-md  justify-center"
                          key={third._id}
                        >
                          <div className="text-center border-2 rounded-xl shadow-sm  w-full pt-5 p-3 relative  ">
                            <div className="absolute top-1 right-0 mr-1 rounded-full">
                              <Badge className="bg-sky-600 font-heading text-sm">
                                {third?.grade}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-black">
                              {third?.studentName}
                            </h3>
                            <span className="text-gray-600 font-subHeading ">
                              {third?.collegeName}
                            </span>
                            {third?.members?.length > 0 ? (
                              <div className="mt-2">
                                <div className="border-t border-b py-1 mb-1">
                                  <span></span>
                                </div>
                                <div className="embla " ref={emblaRefthird}>
                                  <div className="embla__container">
                                    {third?.members?.map((member, idx) => (
                                      <div
                                        className={`${
                                          third?.members?.length > 0
                                            ? "embla__slide"
                                            : ""
                                        }`}
                                        key={idx}
                                      >
                                        <button className="font-heading flex  w-full gap-2 items-center mx-auto shadow-xl text-sm text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
                                          {member?.memberName || ""}
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualResultTile;
