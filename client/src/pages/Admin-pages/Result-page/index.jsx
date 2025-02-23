import CommonForm from "@/components/common-form";
import { Card, CardContent } from "@/components/ui/card";
import { resultPublishFormControls } from "@/config";
import { AdminContext } from "@/context/admin-context";
import { publishResultService } from "@/services";
import { useContext } from "react";

function AdminResultPage() {
  const {
    resultPublishFormData,
    setResultPublishFormData,
    resultPublishedList,
    setResultPublishedList,
  } = useContext(AdminContext);

  async function handleResultSubmit(event) {
    event.preventDefault();
    const updatedData = {
      ...resultPublishFormData,
      points: Number(resultPublishFormData.points) || 0,
    };

    const response = await publishResultService(updatedData);

    if (response?.success) {
      setResultPublishedList(response?.data);
    } else {
      console.error(response.message);
      alert(response.message);
    }
  }



  return (
    <Card>
      <CardContent className="py-5">
        <CommonForm
          formData={resultPublishFormData}
          setFormData={setResultPublishFormData}
          formControls={resultPublishFormControls}
          handleSubmit={handleResultSubmit}
        />
      </CardContent>
    </Card>
  );
}

export default AdminResultPage;
