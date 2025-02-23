import {
  achievementInitialFormData,
  announceIntitialFormData,
  eventInitialFormData,
  publishResultInitialFormData,
  resultPublishInitialFormData,
  winnerResultFirstInitialFormData,
  winnerResultSecondInitialFormData,
  winnerResultThirdInitialFormData,
} from "@/config";
import { createContext, useState } from "react";

export const AdminContext = createContext(null);

export default function AdminProvider({ children }) {
  const [resultPublishFormData, setResultPublishFormData] = useState(
    resultPublishInitialFormData
  );
  const [publishFormData, setPublishFormData] = useState(
    publishResultInitialFormData
  );

  const [announceFormData, setAnnounceFormData] = useState(
    announceIntitialFormData
  );

  const [publishWinnerList, setPublishWinnerList] = useState([]);
  const [winnerFirstFormData, setWinnerFirstFormData] = useState(
    winnerResultFirstInitialFormData
  );
  const [secondWinnerFormData, setSecondWinnerFormData] = useState(
    winnerResultSecondInitialFormData
  );
  const [thirdWinnerFormData, setThirdWinnerFormData] = useState(
    winnerResultThirdInitialFormData
  );
  const [updateEventFormData, setUpdateEventFormData] =
    useState(eventInitialFormData);

  const [resultPublishedList, setResultPublishedList] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [currentEventId, setcurrentEventId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isGroupToggled, setIsGroupToggled] = useState(false);
  const [isSharedGroupToggled, setIsSharedGroupToggled] = useState(false);
  const [achieventFormData, setAchieventFormData] = useState(
    achievementInitialFormData
  );
  const [currentWinnerUpdateEditedId, setcurrentWinnerUpdateEditedId] =
    useState(null);
  const [achieventList, setAchieventList] = useState([]);
  const [announcementList, setAnnouncementList] = useState([]);

  return (
    <AdminContext.Provider
      value={{
        resultPublishFormData,
        setResultPublishFormData,
        resultPublishedList,
        setResultPublishedList,
        eventList,
        setEventList,
        currentEventId,
        setcurrentEventId,
        searchResults,
        setSearchResults,
        updateEventFormData,
        setUpdateEventFormData,
        publishFormData,
        setPublishFormData,
        winnerFirstFormData,
        setWinnerFirstFormData,
        secondWinnerFormData,
        setSecondWinnerFormData,
        thirdWinnerFormData,
        setThirdWinnerFormData,
        publishWinnerList,
        setPublishWinnerList,
        isGroupToggled,
        setIsGroupToggled,
        achieventFormData,
        setAchieventFormData,
        achieventList,
        setAchieventList,
        currentWinnerUpdateEditedId,
        setcurrentWinnerUpdateEditedId,
        announceFormData,
        setAnnounceFormData,
        announcementList,
        setAnnouncementList,
        isSharedGroupToggled,
        setIsSharedGroupToggled,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
