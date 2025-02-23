import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IndividualResultTile from "../individualResult-Tile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useContext, useEffect, useRef, useState } from "react";
import { UserViewContext } from "@/context/userView-context";
import { getSearchResultOfWinners, userfetchAllEventWinners } from "@/services";
import Autoplay from "embla-carousel-autoplay";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";

function IndividualResultSection() {
  const {
    indivitualResultList,
    setIndivitualResultList,
    searchResults,
    setSearchResults,
  } = useContext(UserViewContext);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  async function fetchAllEventresult() {
    const response = await userfetchAllEventWinners();
    if (response?.success) {
      setIndivitualResultList(response?.data);
    }
  }
  async function getSearchResultOfEventswinner(keyword) {
    const response = await getSearchResultOfWinners(keyword);
    if (response?.success) {
      setSearchResults(response?.data);
    }
  }
  useEffect(() => {
    fetchAllEventresult();
  }, []);

  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length >= 2) {
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        getSearchResultOfEventswinner(keyword);
      }, 1000);
    } else {
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      setSearchResults([]);
    }
  }, [keyword]);
  return (
    <section id="individualResult" className=" overflow-hidden pt-10 sm:pt-20 ">
      <div>
        <div className="flex justify-center items-center sm:mt-8 sm:mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Latest Result
          </h1>
        </div>
        <main className="grid grid-cols-1  gap-5 mt-5">
          <Card className="flex justify-center items-center">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}
              className="w-full  flex  py-5 px-4"
            >
              <CarouselContent>
                {indivitualResultList &&
                  indivitualResultList.length > 0 &&
                  indivitualResultList.map((result) => (
                    <CarouselItem
                      className="sm:basis-1/2 2xl:px-5 2xl:basis-1/3  flex items-center justify-center lg:basis-1/3"
                      key={result?._id}
                    >
                      <IndividualResultTile result={result} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-center items-center sm:mt-8 sm:mb-10">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  Published Result
                </h1>
              </div>
              <div>
                <Input
                  type="search"
                  value={keyword}
                  placeholder="search Event name..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent
              className="max-h-screen grid grid-cols-1 lg:grid-cols-2
             lg:gap-x-16 lg:gap-y-10 lg:px-20 xl:px-10 xl:gap-x-16   sm:grid-cols-2 gap-2
              overflow-y-auto md:gap-x-10 md:gap-y-5 2xl:grid-cols-3"
            >
              {searchResults.length
                ? searchResults.map((result) => (
                    <IndividualResultTile key={result._id} result={result} />
                  ))
                : indivitualResultList &&
                  indivitualResultList.length > 0 &&
                  indivitualResultList.map((result) => (
                    <IndividualResultTile key={result._id} result={result} />
                  ))}
            </CardContent>
          </Card>
        </main>
      </div>
    </section>
  );
}

export default IndividualResultSection;
