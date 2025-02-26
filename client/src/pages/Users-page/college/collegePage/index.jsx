import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TopCollegeTile from "../TopCollege-Tile";
import { useContext, useEffect } from "react";
import {
  getAllCollegeList,
  userFetchAllOffstageCollege,
  userFetchAllOnstageCollege,
} from "@/services";
import { UserViewContext } from "@/context/userView-context";
import TopOffStageTile from "../TopoffStage-Tile";
import TopOnStageTile from "../ToponStage-Tile";

function UserViewCollegePage() {
  const {
    collegeList,
    setCollegeList,
    offStageLeadingCollegeList,
    setOffStageLeadingCollegeList,
    onStageLeadingCollegeList,
    setOnStageLeadingCollegeList,
  } = useContext(UserViewContext);

  async function fetchAllCollege() {
    const response = await getAllCollegeList();
    if (response?.success) {
      setCollegeList(response?.data);
    }
  }

  const collegeListSlice = collegeList.slice(0, 3);

  async function fetchAllOffStageCollege() {
    const response = await userFetchAllOffstageCollege();
    console.log(response, "off");
    setOffStageLeadingCollegeList(response?.data);
  }

  const offStagecollegeListSlice = offStageLeadingCollegeList.slice(0, 3);

  async function fetchAllOnStageCollege() {
    const response = await userFetchAllOnstageCollege();
    setOnStageLeadingCollegeList(response?.data);
  }

  const onStagecollegeListSlice = onStageLeadingCollegeList.slice(0, 3);

  useEffect(() => {
    fetchAllCollege();
  }, []);

  useEffect(() => {
    fetchAllOffStageCollege();
  }, []);

  useEffect(() => {
    fetchAllOnStageCollege();
  }, []);

  const layoutClasses = [
    "2xl:col-start-2 2xl:col-end-4 2xl:row-span-2",
    "2xl:col-start-1 2xl:col-end-3 2xl:row-span-1",
    "2xl:col-start-3 2xl:col-end-5 2xl:row-span-1",
  ];

  return (
    <section id="college" className=" overflow-hidden   ">
      <div>
        <div className="flex justify-center items-center sm:mt-8 sm:mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Leading College
          </h1>
        </div>
        <main className="grid grid-cols-1 2xl:grid-cols-4 gap-5 mt-5">
          {collegeListSlice.length > 0 ? (
            collegeListSlice.map((college, index) => (
              <Card key={index} className={layoutClasses[index]}>
                <CardContent className="p-2">
                  <TopCollegeTile college={college} index={index} />
                </CardContent>
              </Card>
            ))
          ) : (
            <p>Not Yet Published </p>
          )}
        </main>
        <Card>
          <CardHeader className="flex justify-center items-center sm:mt-8 sm:mb-10">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Leading OffStage College
            </h1>
          </CardHeader>
          <CardContent className="grid grid-cols-1 2xl:grid-cols-4 gap-5 mt-5">
            {offStagecollegeListSlice.length > 0 ? (
              offStageLeadingCollegeList.map((college, index) => (
                <Card key={index} className={layoutClasses[index]}>
                  <TopOffStageTile offstage={college} index={index} />
                </Card>
              ))
            ) : (
              <p>Not Yet Published</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-center items-center sm:mt-8 sm:mb-10">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Leading OnStage College
            </h1>
          </CardHeader>
          <CardContent className="grid grid-cols-1 2xl:grid-cols-4 gap-12 mt-5">
            {onStagecollegeListSlice.length > 0 ? (
              onStagecollegeListSlice.map((college, index) => (
                <div key={index} className={layoutClasses[index]}>
                  <TopOnStageTile onStage={college} index={index} />
                </div>
              ))
            ) : (
              <p>Not Yet Published</p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default UserViewCollegePage;
