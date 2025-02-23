import { createContext, useState } from "react";

export const UserViewContext = createContext(null);

export default function UserViewProvider({ children }) {
  const [collegeList, setCollegeList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [indivitualResultList, setIndivitualResultList] = useState([]);
  const [achieventList, setAchieventList] = useState([]);
  const [announcementList, setAnnouncementList] = useState([]);

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
      }}
    >
      {children}
    </UserViewContext.Provider>
  );
}
