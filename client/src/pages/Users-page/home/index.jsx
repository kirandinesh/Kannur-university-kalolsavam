import { Badge } from "@/components/ui/badge";
import logo from "/assets/logo.avif";
import { useContext, useEffect } from "react";
import { UserViewContext } from "@/context/userView-context";
import { userFetchAllAnnouncements } from "@/services";
import { Megaphone } from "lucide-react";
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
      className="relative min-h-screen  py-10 sm:pt-20 overflow-hidden"
      id="home"
    >
      {/* Event Date */}
      <div className="absolute z-40 font-subHeading font-semibold px-6 py-2  flex items-center gap-3 rounded-full top-4 left-1/2 transform -translate-x-1/2  text-black ">
        <span className="connect font-subHeading animate-shine font-bold text-xl sm:text-2xl xl:text-xl md:text-2xl lg:text-3xl 2xl:text-2xl">
          FEB 24 - 28
        </span>
      </div>

      {/* Background Effect */}
      <div className="absolute z-20 inset-0 h-full w-full bg-white sm:mt-10 md:mt-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_60%,transparent_100%)]">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <div className="flex justify-center items-center w-56 h-56 mt-12 shadow-2xl rounded-full p-3 bg-white">
            <img
              src={logo}
              alt="Kannur University Logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Event Info */}
          <div className="text-center flex flex-col sm:gap-2">
            <h3 className="font-title text-5xl sm:text-6xl md:text-7xl lg:text-6xl text-red-600 tracking-wide">
              Kannur University
            </h3>
            <h4 className="font-title text-5xl md:text-6xl lg:text-5xl text-red-600 tracking-wide">
              Union Arts Festival
            </h4>
            <h5 className="font-title text-4xl md:text-5xl lg:text-4xl mt-2">
              2023 - 24
            </h5>
            <h6 className="font-title text-4xl text-red-600 md:text-5xl lg:text-4xl tracking-wide mt-2">
              S.N. College Thottada
            </h6>
          </div>

          {/* Brochure Button */}

          <button
            onClick={() => downloadFileAtURL(PDF_FILE_URL)}
            className="cursor-pointer flex items-center justify-center px-5 py-1 sm:px-6 sm:py-2
             text-lg font-mono text-white bg-gray-900 rounded-full shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            Brochure
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2 animate-bounce"
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

      {/* Announcements */}
      {announcementList && announcementList.length > 0 && (
        <div
          className="absolute bottom-2 sm:bottom-28 md:bottom-24 lg:bottom-32 w-full overflow-hidden text-white text-2xl sm:text-3xl p-3"
          style={{
            WebkitMask:
              "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
            mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div className="flex overflow-hidden  p-2 space-x-10">
            <div className="flex animate-loop space-x-16">
              {announcementList.map((announce) => (
                <span
                  key={announce?._id}
                  className="bg-transparent flex items-center gap-2 px-4 py-2 text-black rounded-lg  whitespace-nowrap text-sm sm:text-lg font-heading
                   lg:text-xl md:text-2xl font-semibold"
                >
                  <Megaphone color="red" /> {announce?.annoucementName}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default UserViewHomePage;
