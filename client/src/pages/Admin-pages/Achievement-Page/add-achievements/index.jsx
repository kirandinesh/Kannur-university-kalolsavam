import { useContext, useEffect, useState } from "react";
import CommonForm from "@/components/common-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { achievementFormcontrol, achievementInitialFormData } from "@/config";
import { AdminContext } from "@/context/admin-context";
import {
  adminAddNewAchievement,
  adminDeleteAnAchievements,
  adminFetchAllAchievements,
  adminUpdateAnAchievements,
} from "@/services";

import { Pencil, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";

const AdminAddAchievementPage = () => {
  const {
    achieventFormData,
    setAchieventFormData,
    achieventList,
    setAchieventList,
  } = useContext(AdminContext);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  async function handleAddOrUpdateAchievement(e) {
    e.preventDefault();

    const toastId = toast.loading(
      currentEditedId ? "Updating achievement..." : "Adding achievement..."
    );
    let response;
    try {
      if (currentEditedId) {
        response = await adminUpdateAnAchievements(
          currentEditedId,
          achieventFormData
        );
      } else {
        response = await adminAddNewAchievement(achieventFormData);
      }

      if (response?.success) {
        setAchieventFormData(achievementInitialFormData);
        setCurrentEditedId(null);
        fetchAllAchievements();
        toast.success(
          currentEditedId
            ? "Achievement updated successfully!"
            : "Achievement added successfully!",
          { id: toastId }
        );
      } else {
        toast.error(response?.message || "Failed to save achievement.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    }
  }

  async function fetchAllAchievements() {
    const response = await adminFetchAllAchievements();
    if (response?.success) {
      setAchieventList(response.data);
    }
  }

  async function handleAchievementDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this achievement?"
    );
    if (!confirmDelete) return;

    const toastId = toast.loading("Deleting achievement...");

    try {
      const response = await adminDeleteAnAchievements(id);
      if (response?.success) {
        setAchieventList((prevList) =>
          prevList.filter((item) => item._id !== id)
        );
        toast.success("Achievement deleted successfully!", { id: toastId });
      } else {
        toast.error("Failed to delete achievement.", { id: toastId });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    }
  }

  function handleAchievementEdit(id) {
    const achievementToEdit = achieventList.find((item) => item._id === id);
    if (achievementToEdit) {
      setAchieventFormData(achievementToEdit);
      setCurrentEditedId(id);
    }
  }

  useEffect(() => {
    fetchAllAchievements();
  }, []);
  console.log(achieventList, "ach");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-2">Achievements</h1>
      <Card>
        <CardContent className="pt-5">
          <CommonForm
            formData={achieventFormData}
            setFormData={setAchieventFormData}
            formControls={achievementFormcontrol}
            handleSubmit={handleAddOrUpdateAchievement}
          />
        </CardContent>
      </Card>

      <main className="flex flex-col max-h-screen overflow-hidden overflow-y-auto">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold mb-4">Achievements List</h2>
          </CardHeader>
          <CardContent>
            {achieventList.length > 0 ? (
              <div className="grid grid-cols-1 gap-2 justify-center items-center">
                {achieventList.map((achievement) => (
                  <div
                    key={achievement?._id}
                    className="card text-gray-300 w-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl to-gray-950 from-gray-800 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative"
                  >
                    <div className="px-3 py-3">
                      <div className="uppercase font-bold font-subHeading text-lg">
                        {achievement?.achievementName}
                      </div>
                      {achievement?.studentName.length > 0 ? (
                        <div className="text-gray-400 font-semibold font-texts text-base mt-2">
                          <p>{achievement?.studentName}</p>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="text-gray-400 font-semibold font-texts text-base mt-2">
                        <p>{achievement?.collegeName}</p>
                      </div>
                      <div className="text-gray-400 font-semibold font-texts text-base mt-2">
                        <p>{achievement?.points}</p>
                      </div>
                    </div>
                    <div className="flex justify-between px-2 pb-5">
                      <div
                        className="bg-black p-2 rounded-2xl"
                        onClick={() =>
                          handleAchievementDelete(achievement?._id)
                        }
                      >
                        <Trash2Icon color="red" size={30} />
                      </div>
                      <div
                        className="bg-black p-2 rounded-2xl"
                        onClick={() => handleAchievementEdit(achievement?._id)}
                      >
                        <Pencil />
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
                    <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all" />
                  </div>
                ))}
              </div>
            ) : (
              <p>No achievements found.</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminAddAchievementPage;
