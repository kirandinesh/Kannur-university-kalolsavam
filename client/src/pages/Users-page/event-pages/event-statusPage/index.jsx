import { Card, CardContent } from "@/components/ui/card";
import { UserViewContext } from "@/context/userView-context";
import { fetchAllEvents } from "@/services";
import { useContext, useEffect } from "react";
import EventStatusTile from "../eventStatusTile";

function EventStatusComponent() {
  const { eventList, setEventList } = useContext(UserViewContext);

  async function handleEvent() {
    try {
      const response = await fetchAllEvents();

      if (response?.success && Array.isArray(response?.data)) {
        const ongoingEvents = response.data.filter(
          (event) => event.status === "ongoing"
        );
        const upcomingEvents = response.data
          .filter((event) => event.status === "upcoming")
          .slice(0, 5);

        setEventList([...ongoingEvents, ...upcomingEvents]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  useEffect(() => {
    handleEvent();
  }, []);

  return (
    <section id="eventstatus" className=" overflow-hidden  mt-10 sm:pt-20 ">
      <div>
        <div className="flex justify-center items-center sm:mt-8 sm:mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Event Status
          </h1>
        </div>
        <main className="grid grid-cols-1  gap-5 mt-5">
          <Card>
            <CardContent className="p-2">
              <div className="group relative sm:max-h-80 lg:max-h-96 max-h-72 overflow-y-auto grid grid-cols-1 gap-5">
                {eventList &&
                  eventList.length > 0 &&
                  eventList.map((event) => (
                    <EventStatusTile event={event} key={event?._id} />
                  ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </section>
  );
}

export default EventStatusComponent;
