import { Badge } from "@/components/ui/badge";
import logo from "/assets/logo.avif";
import { useContext, useEffect } from "react";
import { UserViewContext } from "@/context/userView-context";
import { userFetchAllAnnouncements } from "@/services";
function UserViewHomePage() {
  const { announcementList, setAnnouncementList } = useContext(UserViewContext);
  const PDF_FILE_URL = `${import.meta.env.VITE_URL}/Brochure.pdf`;

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  async function fetchAnnouncement() {
    const response = await userFetchAllAnnouncements();
    if (response?.success) {
      setAnnouncementList(response?.data);
    }
  }

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  return (
    <section
      className="min-h-screen py-10 sm:pt-20 overflow-hidden relative"
      id="home"
    >
      <div className="absolute font-subHeading font-semibold px-10 py-2 text-xl  flex justify-center gap-3 items-center  overflow-hidden rounded-full   top-2 left-1/2 -translate-x-1/2 ">
        FEB <span className="animate-bounce text-red-600">24</span> -{" "}
        <span className="animate-bounce text-blue-500">28</span>
      </div>
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center w-56 h-56 mt-9  shadow-2xl rounded-full p-2 overflow-hidden">
            <img
              loading="lazy"
              src={logo}
              alt=""
              className=" flex bg-amber-200 scale-90 "
            />
          </div>
          <div className=" flex justify-center flex-col mt-2 items-center  ">
            <h3 className="font-title text-5xl tracking-wide text-red-600">
              Kannur University
            </h3>
            <span className="font-title text-5xl tracking-wide text-red-600">
              Union Arts Festival
            </span>
            <span className="font-title text-4xl">2023 - 24</span>
            <span className="font-title text-4xl tracking-wide text-red-600">
              S.N.College Thottada
            </span>
            <div className="mt-3">
              <button
                onClick={() => downloadFileAtURL(PDF_FILE_URL)}
                className="cursor-pointer flex justify-between  px-5  py-2 rounded-full text-white tracking-wider shadow-xl bg-gray-900 hover:scale-105 duration-500 ring-1 font-mono w-[150px]"
              >
                Brochure
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {announcementList && announcementList.length > 0 && (
        <div
          className="absolute bottom-20 drop-shadow-xl sm:bottom-28 md:bottom-24 md:text-3xl lg:bottom-32 text-white sm:p-3 text-2xl w-full overflow-hidden"
          style={{
            WebkitMask:
              "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
            mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div className="w-full overflow-hidden flex p-2 space-x-10 group">
            <div className="flex animate-loop space-x-16">
              {announcementList.map((announce) => (
                <Badge
                  key={announce?._id}
                  className="text-base sm:text-lg md:text-xl"
                >
                  {announce?.annoucementName}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default UserViewHomePage;
