import {
  achievementInitialFormData,
  announceIntitialFormData,
  collegePointInitialFormData,
  eventInitialFormData,
  groupwinnerResultFirstInitialFormData,
  groupwinnerResultSecondInitialFormData,
  groupwinnerResultThirdInitialFormData,
  offStageLeadingCollegeInitialFormData,
  onStageLeadingCollegeInitialFormData,
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
  //group
  const [groupWinnerFirstFormData, setGroupWinnerFirstFormData] = useState(
    groupwinnerResultFirstInitialFormData
  );

  const [groupWinnerSecondFormData, setGroupWinnerSecondFormData] = useState(
    groupwinnerResultSecondInitialFormData
  );

  const [groupWinnerThridFormData, setGroupWinnerThirdFormData] = useState(
    groupwinnerResultThirdInitialFormData
  );
  //
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
  const [addPointFormData, setAddPointFormData] = useState(
    collegePointInitialFormData
  );
  const [reducePointFormData, setReducePointFormData] = useState(
    collegePointInitialFormData
  );

  const [offStageLeadingCollegeFormData, setOffStageLeadingCollegeFormData] =
    useState(offStageLeadingCollegeInitialFormData);

  const [onStageLeadingCollegeFormData, setOnStageLeadingCollegeFormData] =
    useState(onStageLeadingCollegeInitialFormData);
  const [offStageLeadingCollegeList, setOffStageLeadingCollegeList] = useState(
    []
  );
  const [onStageLeadingCollegeList, setOnStageLeadingCollegeList] = useState(
    []
  );

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
        groupWinnerFirstFormData,
        setGroupWinnerFirstFormData,
        groupWinnerSecondFormData,
        setGroupWinnerSecondFormData,
        groupWinnerThridFormData,
        setGroupWinnerThirdFormData,
        addPointFormData,
        setAddPointFormData,
        reducePointFormData,
        setReducePointFormData,
        offStageLeadingCollegeFormData,
        setOffStageLeadingCollegeFormData,
        onStageLeadingCollegeFormData,
        setOnStageLeadingCollegeFormData,
        offStageLeadingCollegeList,
        setOffStageLeadingCollegeList,
        onStageLeadingCollegeList,
        setOnStageLeadingCollegeList,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
