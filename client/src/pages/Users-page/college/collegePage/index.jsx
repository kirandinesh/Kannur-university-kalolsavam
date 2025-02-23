import { Card, CardContent } from "@/components/ui/card";
import TopCollegeTile from "../TopCollege-Tile";
import { useContext, useEffect } from "react";
import { getAllCollegeList } from "@/services";
import { UserViewContext } from "@/context/userView-context";

function UserViewCollegePage() {
  const { collegeList, setCollegeList } = useContext(UserViewContext);

  async function fetchAllCollege() {
    const response = await getAllCollegeList();
    if (response?.success) {
      setCollegeList(response?.data);
    }
  }

  const collegeListSlice = collegeList.slice(0, 3);

  useEffect(() => {
    fetchAllCollege();
  }, []);

  const layoutClasses = [
    "2xl:col-start-2 2xl:col-end-4 2xl:row-span-2",
    "2xl:col-start-1 2xl:col-end-3 2xl:row-span-1",
    "2xl:col-start-3 2xl:col-end-5 2xl:row-span-1",
  ];

  return (
    <section id="college" className=" overflow-hidden  sm:pt-20 ">
      <div>
        <div className="flex justify-center items-center sm:mt-8 sm:mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Leading College
          </h1>
        </div>
        <main className="grid grid-cols-1 2xl:grid-cols-4 gap-5 mt-5">
          {collegeListSlice.map((college, index) => (
            <Card key={index} className={layoutClasses[index]}>
              <CardContent className="p-2">
                <TopCollegeTile college={college} index={index} />
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </section>
  );
}

export default UserViewCollegePage;
