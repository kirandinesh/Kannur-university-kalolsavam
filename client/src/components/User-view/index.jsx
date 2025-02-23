import UserViewHeader from "./header";
import UserViewHomePage from "@/pages/Users-page/home";
import { lazy, Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const UserViewCollegePage = lazy(() =>
  import("@/pages/Users-page/college/collegePage")
);
const UserViewCollegeListingPage = lazy(() =>
  import("@/pages/Users-page/college/collegeListingPage")
);
const EventStatusComponent = lazy(() =>
  import("@/pages/Users-page/event-pages/event-statusPage")
);
const IndividualResultSection = lazy(() =>
  import("@/pages/Users-page/result-page/individualItem-result")
);
const AchievementList = lazy(() =>
  import("@/pages/Users-page/achievement-page/achievementList")
);
function UserCommonLayout() {
  return (
    <div className="w-screen min-h-screen p-2">
      <div className="flex">
        <div>
          <UserViewHeader />
        </div>
      </div>
      <main className="pt-3 sm:pt-20 xl:pt-28 xl:px-36 lg:pt-28 lg:px-10">
        <UserViewHomePage />
        <Suspense
          fallback={
            <div>
              <Skeleton className="w-screen h-screen" />
            </div>
          }
        >
          <UserViewCollegePage />
          <EventStatusComponent />
          <UserViewCollegeListingPage />
          <IndividualResultSection />
          <AchievementList />
        </Suspense>
      </main>
    </div>
  );
}

export default UserCommonLayout;
