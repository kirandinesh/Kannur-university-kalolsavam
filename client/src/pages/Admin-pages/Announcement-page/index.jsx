import CommonForm from "@/components/common-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { announceIntitialFormData, announcementFormcontrol } from "@/config";
import { AdminContext } from "@/context/admin-context";
import {
  adminAddNewAnnouncement,
  adminDeleteAnnouncements,
  adminFetchAllAnnouncements,
} from "@/services";
import { useContext, useEffect } from "react";

function AnnouncementPage() {
  const {
    announceFormData,
    setAnnounceFormData,
    announcementList,
    setAnnouncementList,
  } = useContext(AdminContext);

  async function fetchAnnouncements() {
    const response = await adminFetchAllAnnouncements();
    if (response?.success) {
      setAnnouncementList(response?.data);
    }
  }

  async function handleAnnouncement(e) {
    e.preventDefault();
    const response = await adminAddNewAnnouncement(announceFormData);
 

    if (response?.success) {
      setAnnounceFormData(announceIntitialFormData);
      fetchAnnouncements();
    }
  }
  async function handleDelete(id) {
    const response = await adminDeleteAnnouncements(id);
    if (response?.success) {
      fetchAnnouncements();
    }
  }

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="flex justify-between p-3">
        <h1 className="text-3xl font-bold mb-2">Announce</h1>
      </div>
      <main>
        <Card>
          <CardContent>
            <CommonForm
              formData={announceFormData}
              setFormData={setAnnounceFormData}
              formControls={announcementFormcontrol}
              handleSubmit={handleAnnouncement}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-2 mt-4">
            <h2 className="text-lg font-semibold">Recent Announcements:</h2>
            <div className="max-h-screen overflow-y-auto w-full grid grid-cols-1 gap-5">
              {announcementList.length > 0 ? (
                announcementList.map((anounce) => (
                  <Card key={anounce._id} className="w-full p-2">
                    <CardHeader>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(anounce._id)}
                      >
                        Delete
                      </Button>
                    </CardHeader>
                    <CardContent>{anounce.annoucementName}</CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-gray-400">No announcements available.</p>
              )}
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

export default AnnouncementPage;
