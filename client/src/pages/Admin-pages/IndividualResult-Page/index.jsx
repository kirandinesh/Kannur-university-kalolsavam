import CommonForm from "@/components/common-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  groupwinnerResultFirstInitialFormData,
  groupwinnerResultSecondInitialFormData,
  groupwinnerResultThirdInitialFormData,
  publishResultFormcontrol,
  publishResultInitialFormData,
  winnerResultFirstInitialFormData,
  winnerResultSecondInitialFormData,
  winnerResultThirdInitialFormData,
} from "@/config";
import { AdminContext } from "@/context/admin-context";
import { useContext, useEffect } from "react";
import FirstWinnerPage from "../winner-page/first-page";
import SecondWinnerPage from "../winner-page/second-page";
import ThirdWinnerPage from "../winner-page/third-page";
import {
  addNewEventWinners,
  adminUpdateEventWinners,
  fetchWinnerDetailsById,
} from "@/services";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import toast from "react-hot-toast";

function AdminIndividualReusltPage() {
  const {
    publishFormData,
    setPublishFormData,
    winnerFirstFormData,
    setWinnerFirstFormData,
    secondWinnerFormData,
    setSecondWinnerFormData,
    thirdWinnerFormData,
    setThirdWinnerFormData,
    isGroupToggled,
    setIsGroupToggled,
    currentWinnerUpdateEditedId,
    setcurrentWinnerUpdateEditedId,
    isSharedGroupToggled,
    setIsSharedGroupToggled,
    groupWinnerFirstFormData,
    setGroupWinnerFirstFormData,
    groupWinnerSecondFormData,
    setGroupWinnerSecondFormData,
    groupWinnerThridFormData,
    setGroupWinnerThirdFormData,
  } = useContext(AdminContext);
  const navigate = useNavigate();

  async function handleCreateWinnerResult(event) {
    event.preventDefault();
    const toastId = toast.loading(
      currentWinnerUpdateEditedId
        ? "Updating winners..."
        : "Submitting winners..."
    );
    const formattedFirstPrize = winnerFirstFormData.map((winner, index) => ({
      ...winner,
      members: Array.isArray(groupWinnerFirstFormData)
        ? groupWinnerFirstFormData
        : [],
    }));

    const formattedSecondPrize = secondWinnerFormData.map((winner, index) => ({
      ...winner,
      members: Array.isArray(groupWinnerSecondFormData)
        ? groupWinnerSecondFormData
        : [],
    }));

    const formattedThirdPrize = thirdWinnerFormData.map((winner, index) => ({
      ...winner,
      members: Array.isArray(groupWinnerThridFormData)
        ? groupWinnerThridFormData
        : [],
    }));

    const winnerFinalFormData = {
      eventName: publishFormData.eventName,
      firstPrize: formattedFirstPrize,
      secondPrize: formattedSecondPrize,
      thirdPrize: formattedThirdPrize,
    };

    try {
      const response =
        currentWinnerUpdateEditedId !== null
          ? await adminUpdateEventWinners(
              currentWinnerUpdateEditedId,
              winnerFinalFormData
            )
          : await addNewEventWinners(winnerFinalFormData);

      if (response?.success) {
        toast.success(
          currentWinnerUpdateEditedId
            ? "Winners updated successfully 🎉"
            : "Winners submitted successfully 🏆",
          { id: toastId }
        );

        resetForm();
        navigate("/adminhome/winnerlist");
        setcurrentWinnerUpdateEditedId(null);
        setIsSharedGroupToggled(false);
      } else {
        toast.error("Failed to submit winners. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    }
  }

  async function getWinnerByid() {
    const response = await fetchWinnerDetailsById(currentWinnerUpdateEditedId);
    if (response?.success) {
      const setWinnerFormData = Object.keys(
        publishResultInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || publishResultInitialFormData[key];
        return acc;
      }, {});

      setPublishFormData(setWinnerFormData);
      setWinnerFirstFormData(response?.data?.firstPrize);
      setSecondWinnerFormData(response?.data?.secondPrize);
      setThirdWinnerFormData(response?.data?.thirdPrize);
    }
  }

  function handleCancel() {
    setcurrentWinnerUpdateEditedId(null);
    resetForm();
    navigate("/adminhome");
  }

  function resetForm() {
    setPublishFormData(publishResultInitialFormData);
    setWinnerFirstFormData(winnerResultFirstInitialFormData);
    setSecondWinnerFormData(winnerResultSecondInitialFormData);
    setThirdWinnerFormData(winnerResultThirdInitialFormData);
    setGroupWinnerFirstFormData(groupwinnerResultFirstInitialFormData);
    setGroupWinnerSecondFormData(groupwinnerResultSecondInitialFormData);
    setGroupWinnerThirdFormData(groupwinnerResultThirdInitialFormData);
  }

  function handleEraseForm() {
    resetForm();
    setIsGroupToggled(false);
    setIsSharedGroupToggled(false);
  }

  useEffect(() => {
    if (currentWinnerUpdateEditedId !== null) getWinnerByid();
  }, [currentWinnerUpdateEditedId]);

  return (
    <Card>
      <CardHeader>
        <div>
          <h1 className="text-3xl font-bold mb-2">Winner Publish</h1>
        </div>
        <div className="flex justify-between items-center space-x-2 mb-2 cursor-pointer">
          <Eraser color="red" onClick={handleEraseForm} />
          {currentWinnerUpdateEditedId ? (
            <div>
              <Button onClick={handleCancel} variant="destructive">
                Cancel
              </Button>
            </div>
          ) : null}
        </div>
        <CommonForm
          formData={publishFormData}
          setFormData={setPublishFormData}
          formControls={publishResultFormcontrol}
          handleSubmit={handleCreateWinnerResult}
        />
      </CardHeader>
      <CardContent className="py-5 overflow-hidden ">
        <Tabs defaultValue="first">
          <div className="flex justify-center ">
            <TabsList className="sm:py-5 sm:px-2">
              <TabsTrigger className="sm:px-10 cursor-pointer" value="first">
                First
              </TabsTrigger>
              <TabsTrigger className="sm:px-10 cursor-pointer" value="second">
                Second
              </TabsTrigger>
              <TabsTrigger className="sm:px-10 cursor-pointer" value="third">
                Third
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="first">
            <FirstWinnerPage />
          </TabsContent>
          <TabsContent value="second">
            <SecondWinnerPage />
          </TabsContent>
          <TabsContent value="third">
            <ThirdWinnerPage />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default AdminIndividualReusltPage;
