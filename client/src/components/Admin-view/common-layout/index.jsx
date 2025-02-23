import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import AdminAddAchievementPage from "@/pages/Admin-pages/Achievement-Page/add-achievements";
import AnnouncementPage from "@/pages/Admin-pages/Announcement-page";
import EmergencyPointUpdate from "@/pages/Admin-pages/Emergency-Page";
import EventList from "@/pages/Admin-pages/Event-List-Page";
import AdminIndividualReusltPage from "@/pages/Admin-pages/IndividualResult-Page";
import WinnerListPage from "@/pages/Admin-pages/winner-page/winnerList-Page";

import {
  BarChart,
  LogOut,
  MenuIcon,
  Trophy,
  FileBadge,
  Megaphone,
  Play,
  ShieldAlert,
} from "lucide-react";
import { useContext, useState } from "react";

function AdminMainContent() {
  const { resetCredentials } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState("achievements");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Achievement",
      icon: FileBadge,
      value: "achievements",
      component: <AdminAddAchievementPage />,
    },
    {
      label: "Event",
      icon: Play,
      value: "event",
      component: <EventList />,
    },
    {
      label: "Winner Result",
      icon: BarChart,
      value: "winner",
      component: <AdminIndividualReusltPage />,
    },
    {
      label: "Winner List",
      icon: Trophy,
      value: "winnerlist",
      component: <WinnerListPage />,
    },
    {
      label: "Announcement",
      icon: Megaphone,
      value: "announcement",
      component: <AnnouncementPage />,
    },
    {
      label: "Emergency",
      icon: ShieldAlert,
      value: "emergency",
      component: <EmergencyPointUpdate />,
    },

    {
      label: "Logout",
      icon: LogOut,
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }
  return (
    <div className="flex h-full min-h-screen bg-gray-100 overflow-hidden">
      <aside className="w-64 lg:w-64 md:w-44 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-bold mb-4">
            Kalolsavam
          </h2>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2 font-heading"
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      <nav className="md:hidden z-[1000]    fixed top-2 left-5">
        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />

        <div
          className={`fixed flex w-full top-10 z-[1000] ${
            isMenuOpen ? "left-[5%] duration-500" : "left-[-100%] duration-500"
          }`}
        >
          <ul className="flex flex-col  p-2 relative bg-black/40 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-125 rounded-2xl">
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2 font-heading font-semibold "
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </ul>
        </div>
      </nav>
      <main className="flex-1 p-8 overflow-y-auto overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem) => (
              <TabsContent key={menuItem.value} value={menuItem.value}>
                {menuItem.component !== null ? menuItem.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default AdminMainContent;
