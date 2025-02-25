import { AdminContext } from "@/context/admin-context";
import { fetchAllEventWinners, getSearchResultOfWinners } from "@/services";
import { useContext, useEffect, useState } from "react";
import WinnerListTile from "../winnerListTile";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

function WinnerListPage() {
  const {
    publishWinnerList,
    setPublishWinnerList,
    setcurrentWinnerUpdateEditedId,
    searchResults,
    setSearchResults,
    setIsSharedGroupToggled,
  } = useContext(AdminContext);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  async function getAllWinnersList() {
    try {
      const response = await fetchAllEventWinners();

      if (response?.success) {
        setPublishWinnerList(response?.data);
      }
    } catch (error) {
      console.error("Error fetching winners list:", error);
    }
  }
  function handleEditWinnerList(id) {
    setcurrentWinnerUpdateEditedId(id);
    navigate("/adminhome/winnerpage");
  }
  async function getSearchResultOfEventswinner(keyword) {
    const response = await getSearchResultOfWinners(keyword);
    if (response?.success) {
      setSearchResults(response?.data);
    }
  }
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
  useEffect(() => {
    getAllWinnersList();
  }, []);
  

  return (
    <div className="min-h-screen   overflow-hidden">
      <div className="flex justify-between p-3">
        <h1 className="text-3xl font-bold mb-2">Winners List</h1>
        {location.pathname.includes("winnerlist") ? (
          <Button onClick={() => navigate("/adminhome")}>Go To Home</Button>
        ) : null}
      </div>
      <div className="mb-2">
        <Card>
          <Input
            type="search"
            value={keyword}
            placeholder="search Event name..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Card>
      </div>
      <div className="overflow-y-auto max-h-screen space-y-4">
        {searchResults.length > 0 ? (
          searchResults.map((results) => (
            <WinnerListTile
              key={results._id}
              resultList={results}
              handleUpdate={handleEditWinnerList}
            />
          ))
        ) : publishWinnerList.length > 0 ? (
          publishWinnerList.map((results) => (
            <WinnerListTile
              key={results._id}
              resultList={results}
              handleUpdate={handleEditWinnerList}
            />
          ))
        ) : (
          <p className="text-white text-center mt-4">
            No winners data available
          </p>
        )}
      </div>
    </div>
  );
}

export default WinnerListPage;
