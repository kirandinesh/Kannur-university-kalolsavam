import UserViewHeader from "./header";
import UserViewHomePage from "@/pages/Users-page/home";
import { lazy, Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import Footer from "../Footer/Footer";
import PreLoader from "../PreLoader/PreLoader";

const UserViewCollegePage = lazy(() =>
  import("@/pages/Users-page/college/collegePage")
);

const IndividualResultSection = lazy(() =>
  import("@/pages/Users-page/result-page/individualItem-result")
);
const AchievementList = lazy(() =>
  import("@/pages/Users-page/achievement-page/achievementList")
);

function UserCommonLayout() {
  return (
    <div className=" w-screen min-h-screen  overflow-hidden">
      <PreLoader />
      <div className="flex">
        <div>
          <UserViewHeader />
        </div>
      </div>
      <div>
        <UserViewHomePage />
      </div>
      <main className="p-2">
        <Suspense
          fallback={
            <div>
              <Skeleton className="w-screen h-screen" />
            </div>
          }
        >
          <UserViewCollegePage />
          {/* <EventStatusComponent /> */}
          {/* <UserViewCollegeListingPage /> */}
          <IndividualResultSection />
          <AchievementList />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default UserCommonLayout;
