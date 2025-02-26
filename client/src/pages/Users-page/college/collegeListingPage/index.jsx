import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserViewContext } from "@/context/userView-context";
import { getAllCollegeList, getSearchResultOfCollege } from "@/services";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CollegeTable from "../collegeListTable";

function UserViewCollegeListingPage() {
  const { collegeList, setCollegeList, searchResults, setSearchResults } =
    useContext(UserViewContext);
  const [noOfElements, setnoOfElements] = useState(13);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  async function fetchAllCollege() {
    const response = await getAllCollegeList();

    if (response?.success) {
      setCollegeList(response?.data);
    }
  }

  const slicedCollegeList = collegeList.slice(0, noOfElements);

  function loadMore() {
    setnoOfElements((prev) => prev + 13);
  }

  function loadLess() {
    setnoOfElements(10);
  }
  async function getSearchResultOfEvents(keyword) {
    const response = await getSearchResultOfCollege(keyword);
    if (response?.success) {
      setSearchResults(response?.data);
    }
  }
  useEffect(() => {
    fetchAllCollege();
  }, []);

  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length >= 2) {
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        getSearchResultOfEvents(keyword);
      }, 1000);
    } else {
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      setSearchResults([]);
    }
  }, [keyword]);

  return (
    <section
      id="collegelist"
      className="min-h-screen overflow-hidden py-10 sm:pt-20 "
    >
      <div>
        <div className="flex justify-center items-center sm:mt-8 sm:mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            College Point Table
          </h1>
        </div>
        <main className=" mt-5 ">
          <Card>
            <CardHeader>
              <Input
                type="search"
                value={keyword}
                placeholder="search college name..."
                onChange={(e) => setKeyword(e.target.value)}
              />
            </CardHeader>
            <CardContent className="max-h-screen py-10 overflow-y-auto px-16">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Index</TableHead>
                    <TableHead className="">College Name</TableHead>
                    <TableHead>Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {searchResults.length
                    ? searchResults.map((college, index) => (
                        <CollegeTable
                          key={index}
                          college={college}
                          index={index}
                        />
                      ))
                    : slicedCollegeList.map((college, index) => (
                        <CollegeTable
                          key={index}
                          college={college}
                          index={index}
                        />
                      ))}
                </TableBody>
              </Table>
            </CardContent>
            <div className=" flex justify-center my-5">
              {noOfElements < collegeList.length ? (
                <Button variant="outline" onClick={loadMore}>
                  Show More
                </Button>
              ) : (
                <Button variant="outline" onClick={loadLess}>
                  Show Less
                </Button>
              )}
            </div>
          </Card>
        </main>
      </div>
    </section>
  );
}

export default UserViewCollegeListingPage;
