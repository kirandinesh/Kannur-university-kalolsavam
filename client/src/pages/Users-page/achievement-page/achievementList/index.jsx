import { Card } from "@/components/ui/card";
import { UserViewContext } from "@/context/userView-context";
import { userFetchAllAchievements } from "@/services";
import { useContext, useEffect } from "react";
import AchievementTile from "../achievementTile";

function AchievementList() {
  const { achieventList, setAchieventList } = useContext(UserViewContext);
  async function getAllAchievements() {
    const response = await userFetchAllAchievements();
    if (response?.success) {
      setAchieventList(response.data);
    }
  }

  useEffect(() => {
    getAllAchievements();
  }, []);

  return (
    <section id="achievement" className=" overflow-hidden pt-10 sm:pt-20 ">
      <div className="flex justify-center items-center sm:mt-8 sm:mb-10">
        <h1 className="text-xl  uppercase font-bold sm:text-4xl md:text-5xl">
          Individual Achievements
        </h1>
      </div>
      <main className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-5 mt-5">
        {achieventList &&
          achieventList.length > 0 &&
          achieventList.map((achievement) => (
            <Card className="overflow-hidden p-3 " key={achievement?._id}>
              <AchievementTile achievement={achievement} />
            </Card>
          ))}
      </main>
    </section>
  );
}

export default AchievementList;
