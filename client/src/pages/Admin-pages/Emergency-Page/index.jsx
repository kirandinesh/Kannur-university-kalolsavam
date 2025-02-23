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
import { useContext } from "react";

function EmergencyPointUpdate() {
  const {
    addPointFormData,
    setAddPointFormData,
    reducePointFormData,
    setReducePointFormData,
  } = useContext(AdminContext);

  async function handleAddPointToCollege(event) {
    event.preventDefault();

    if (!addPointFormData.collegeName || !addPointFormData.points) {
      console.error("Missing required fields.");
      return;
    }

    const response = await addToCollegeTotalPoints({
      collegeName: addPointFormData.collegeName,
      points: Number(addPointFormData.points),
    });
    if (response?.success) {
      setAddPointFormData(collegePointInitialFormData);
    }
  }

  async function handleReducePointToCollege(event) {
    event.preventDefault();

    if (!reducePointFormData.collegeName || !reducePointFormData.points) {
      console.error("Missing required fields.");
      return;
    }

    const response = await reduceFromCollegeTotalPoints({
      collegeName: reducePointFormData.collegeName,
      points: Number(reducePointFormData.points),
    });
    if (response?.success) {
      setReducePointFormData(collegePointInitialFormData);
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
