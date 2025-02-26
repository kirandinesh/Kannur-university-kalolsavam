import CommonForm from "@/components/common-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  offStageLeadingCollegeFormControl,
  offStageLeadingCollegeInitialFormData,
  onStageLeadingCollegeFormControl,
  onStageLeadingCollegeInitialFormData,
} from "@/config";
import { AdminContext } from "@/context/admin-context";
import { useContext, useEffect, useState } from "react";
import {
  adminAddNewOffstageCollege,
  adminAddNewOnstageCollege,
  adminFetchAllOffstageCollege,
  adminFetchAllOnstageCollege,
} from "@/services";
import toast from "react-hot-toast";
import OnStageTile from "../onStage-page/onStageTile/OnStageTile";
import OffStageTile from "./offStageTile/OffStageTile";

function AdminOffStageLeadingCollege() {
  const {
    offStageLeadingCollegeFormData,
    setOffStageLeadingCollegeFormData,
    onStageLeadingCollegeFormData,
    setOnStageLeadingCollegeFormData,
    offStageLeadingCollegeList,
    setOffStageLeadingCollegeList,
    onStageLeadingCollegeList,
    setOnStageLeadingCollegeList,
  } = useContext(AdminContext);

  const [loading, setLoading] = useState(false);

  async function handleCreateOffStageCollege(e) {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Adding OffStage college...");

    try {
      const response = await adminAddNewOffstageCollege(
        offStageLeadingCollegeFormData
      );

      if (response?.success) {
        setOffStageLeadingCollegeFormData(
          offStageLeadingCollegeInitialFormData
        );
        toast.success("OffStage college added successfully!", { id: toastId });
        getAllOffStageCollegeList();
      } else {
        toast.error(response?.message || "Failed to add OffStage college.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateOnStageCollege(e) {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Adding OnStage college...");

    try {
      const response = await adminAddNewOnstageCollege(
        onStageLeadingCollegeFormData
      );

      if (response?.success) {
        setOnStageLeadingCollegeFormData(onStageLeadingCollegeInitialFormData);
        toast.success("OnStage college added successfully!", { id: toastId });
        getAllOnStageCollegeList();
      } else {
        toast.error(response?.message || "Failed to add OnStage college.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  async function getAllOnStageCollegeList() {
    const response = await adminFetchAllOnstageCollege();
    console.log(response, "onon");

    if (response?.success) {
      setOnStageLeadingCollegeList(response?.data || []);
    }
  }

  async function getAllOffStageCollegeList() {
    const response = await adminFetchAllOffstageCollege();
    if (response?.success) {
      setOffStageLeadingCollegeList(response?.data || []);
    }
  }

  useEffect(() => {
    getAllOffStageCollegeList();
  }, []);
  useEffect(() => {
    getAllOnStageCollegeList();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="flex justify-between p-3">
        <h1 className="text-3xl font-bold mb-2">OnStage / OffStage</h1>
      </div>
      <main className="grid grid-cols-1 gap-10">
        {/* OffStage Form */}
        <Card>
          <CardHeader className="text-center font-heading font-semibold">
            Add OffStage College
          </CardHeader>
          <CardContent>
            <CommonForm
              formControls={offStageLeadingCollegeFormControl}
              formData={offStageLeadingCollegeFormData}
              setFormData={setOffStageLeadingCollegeFormData}
              handleSubmit={handleCreateOffStageCollege}
              disabled={loading}
            />
          </CardContent>
        </Card>

        {/* OnStage Form */}
        <Card>
          <CardHeader className="text-center font-heading font-semibold">
            Add OnStage College
          </CardHeader>
          <CardContent>
            <CommonForm
              formControls={onStageLeadingCollegeFormControl}
              formData={onStageLeadingCollegeFormData}
              setFormData={setOnStageLeadingCollegeFormData}
              handleSubmit={handleCreateOnStageCollege}
              disabled={loading}
            />
          </CardContent>
        </Card>

        {/* OnStage College List */}
        <Card>
          <CardHeader className="text-center font-heading font-semibold">
            OnStage College List
          </CardHeader>
          <CardContent>
            {onStageLeadingCollegeList.length > 0 ? (
              <div className="grid grid-cols-1 gap-5">
                {onStageLeadingCollegeList.map((college, index) => (
                  <OnStageTile
                    key={index}
                    onstage={college}
                    refreshOnStageList={getAllOnStageCollegeList}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No OnStage colleges found.</p>
            )}
          </CardContent>
        </Card>

        {/* OffStage College List */}
        <Card>
          <CardHeader className="text-center font-heading font-semibold">
            OffStage College List
          </CardHeader>
          <CardContent>
            {offStageLeadingCollegeList.length > 0 ? (
              <div className="grid grid-cols-1 gap-5">
                {offStageLeadingCollegeList.map((college, index) => (
                  <OffStageTile
                    key={index}
                    offstage={college}
                    refreshOffStageList={getAllOffStageCollegeList}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No OffStage colleges found.</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default AdminOffStageLeadingCollege;
