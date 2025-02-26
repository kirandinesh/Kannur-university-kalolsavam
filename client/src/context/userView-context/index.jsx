import { createContext, useState } from "react";

export const UserViewContext = createContext(null);

export default function UserViewProvider({ children }) {
  const [collegeList, setCollegeList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [indivitualResultList, setIndivitualResultList] = useState([]);
  const [achieventList, setAchieventList] = useState([]);
  const [announcementList, setAnnouncementList] = useState([]);
  const [offStageLeadingCollegeList, setOffStageLeadingCollegeList] = useState(
    []
  );
  const [onStageLeadingCollegeList, setOnStageLeadingCollegeList] = useState(
    []
  );
  return (
    <UserViewContext.Provider
      value={{
        collegeList,
        setCollegeList,
        searchResults,
        setSearchResults,
        eventList,
        setEventList,
        indivitualResultList,
        setIndivitualResultList,
        achieventList,
        setAchieventList,
        announcementList,
        setAnnouncementList,
        offStageLeadingCollegeList,
        setOffStageLeadingCollegeList,
        onStageLeadingCollegeList,
        setOnStageLeadingCollegeList,
      }}
    >
      {children}
    </UserViewContext.Provider>
  );
}
