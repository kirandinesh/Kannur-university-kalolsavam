import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { eventInitialFormData, eventStatusOption } from "@/config";
import { AdminContext } from "@/context/admin-context";
import {
  fetchAllEvents,
  getSearchResultOfEvents,
  updateStatusOfEvent,
} from "@/services";

import { CircleCheckBig, Edit, Search } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
function EventList() {
  const {
    eventList,
    setEventList,
    searchResults,
    setSearchResults,
    currentEventId,
    setcurrentEventId,
    updateEventFormData,
    setUpdateEventFormData,
  } = useContext(AdminContext);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  async function getAllEvents() {
    const response = await fetchAllEvents();

    if (response?.success) {
      setEventList(response?.data);
    }
  }

  async function getSearchResult(keyword) {
    const respond = await getSearchResultOfEvents(keyword);

    if (respond?.success) {
      setSearchResults(respond?.data);
    }
  }

  function EditStatus(id) {
    setcurrentEventId(id);
  }

  async function handleupdateStatusSubmit() {
    const response = await updateStatusOfEvent(
      currentEventId,
      updateEventFormData
    );

    if (response?.success) {
      setcurrentEventId(null);
      setEventList([...eventList, response?.data]);
    }
  }

  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length >= 3) {
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        getSearchResult(keyword);
      }, 1000);
    } else {
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      setSearchResults([]);
    }
  }, [keyword]);

  useEffect(() => {
    getAllEvents();
  }, []);


  return (
    <Card>
      <CardHeader>
        <div>
          <h1 className="text-3xl font-bold mb-2">Event List</h1>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <Input
            type="search"
            placeholder="search event name or category..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Search />
        </div>
      </CardHeader>
      <CardContent className="py-5 max-h-screen  overflow-hidden ">
        <div className="max-h-screen py-10 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="grow">Event Name</TableHead>
                <TableHead className="">Category Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {!searchResults.length
                ? eventList.map((event, index) => (
                    <TableRow key={index}>
                      <TableHead className="grow">{event?.name}</TableHead>
                      <TableCell className="font-medium">
                        {event?.category}
                      </TableCell>
                      <TableCell>
                        {currentEventId !== null &&
                        currentEventId === event._id ? (
                          <Select
                            onValueChange={(value) => {
                              setUpdateEventFormData({
                                ...updateEventFormData,
                                status: value,
                              });
                            }}
                            value={updateEventFormData.status}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="status" />
                            </SelectTrigger>
                            <SelectContent className="text-ellipsis overflow-hidden max-w-3xs sm:max-w-lg">
                              {eventStatusOption && eventStatusOption.length > 0
                                ? eventStatusOption.map((optionItem) => (
                                    <SelectItem
                                      key={optionItem.id}
                                      value={optionItem.label}
                                    >
                                      {optionItem.label}
                                    </SelectItem>
                                  ))
                                : null}
                            </SelectContent>
                          </Select>
                        ) : (
                          event?.status
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2 justify-center items-center">
                          <Edit
                            className="cursor-pointer w-6 h-6"
                            onClick={() => EditStatus(event?._id)}
                          />
                          <CircleCheckBig
                            className="cursor-pointer w-6 h-6"
                            onClick={handleupdateStatusSubmit}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                : searchResults.map((event, index) => (
                    <TableRow key={index}>
                      <TableHead className="">{event?.name}</TableHead>
                      <TableCell className="font-medium">
                        {event?.category}
                      </TableCell>
                      <TableCell>
                        {currentEventId !== null &&
                        currentEventId === event._id ? (
                          <Select
                            onValueChange={(value) => {
                              setUpdateEventFormData({
                                ...updateEventFormData,
                                status: value,
                              });
                            }}
                            value={updateEventFormData.status}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="status" />
                            </SelectTrigger>
                            <SelectContent className="text-ellipsis overflow-hidden max-w-3xs sm:max-w-lg">
                              {eventStatusOption && eventStatusOption.length > 0
                                ? eventStatusOption.map((optionItem) => (
                                    <SelectItem
                                      key={optionItem.id}
                                      value={optionItem.label}
                                    >
                                      {optionItem.label}
                                    </SelectItem>
                                  ))
                                : null}
                            </SelectContent>
                          </Select>
                        ) : (
                          event?.status
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        <Edit onClick={() => EditStatus(event?._id)} />
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default EventList;
