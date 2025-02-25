import CommonForm from "@/components/common-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  collegePointInitialFormData,
  collegePointUpdateFormcontrol,
} from "@/config";
import { AdminContext } from "@/context/admin-context";
import {
  addToCollegeTotalPoints,
  reduceFromCollegeTotalPoints,
} from "@/services";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

function EmergencyPointUpdate() {
  const {
    addPointFormData,
    setAddPointFormData,
    reducePointFormData,
    setReducePointFormData,
  } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  async function handleAddPointToCollege(event) {
    event.preventDefault();

    if (!addPointFormData.collegeName || !addPointFormData.points) {
      toast.error("Please provide College Name and Points.");
      return;
    }

    const points = Number(addPointFormData.points);
    if (points <= 0) {
      toast.error("Points must be greater than zero.");
      return;
    }
    setLoading(true);
    const toastId = toast.loading("Adding points...");

    try {
      const response = await addToCollegeTotalPoints({
        collegeName: addPointFormData.collegeName,
        points,
      });

      if (response?.success) {
        setAddPointFormData(collegePointInitialFormData);
        toast.success("Points added successfully!", { id: toastId });
      } else {
        toast.error(response?.message || "Failed to add points.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  async function handleReducePointToCollege(event) {
    event.preventDefault();

    if (!reducePointFormData.collegeName || !reducePointFormData.points) {
      toast.error("Please provide College Name and Points.");
      return;
    }

    const points = Number(reducePointFormData.points);
    if (points <= 0) {
      toast.error("Points must be greater than zero.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Deducting points...");

    try {
      const response = await reduceFromCollegeTotalPoints({
        collegeName: reducePointFormData.collegeName,
        points,
      });

      if (response?.success) {
        setReducePointFormData(collegePointInitialFormData);
        toast.success("Points deducted successfully!", { id: toastId });
      } else {
        toast.error(response?.message || "Failed to deduct points.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="flex justify-between p-3">
        <h1 className="text-3xl font-bold mb-2">Point Update</h1>
      </div>
      <main className="grid grid-cols-1 gap-10">
        <Card>
          <CardHeader className="flex text-center font-heading font-semibold">
            Add Point To College
          </CardHeader>
          <CardContent>
            <CommonForm
              formControls={collegePointUpdateFormcontrol}
              formData={addPointFormData}
              setFormData={setAddPointFormData}
              handleSubmit={handleAddPointToCollege}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex text-center font-heading font-semibold">
            Deduct Point From College
          </CardHeader>
          <CardContent>
            <CommonForm
              formControls={collegePointUpdateFormcontrol}
              formData={reducePointFormData}
              setFormData={setReducePointFormData}
              handleSubmit={handleReducePointToCollege}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default EmergencyPointUpdate;
