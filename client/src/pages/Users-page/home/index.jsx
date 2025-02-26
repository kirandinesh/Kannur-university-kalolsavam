import logo from "/assets/logo.avif";
import collegeImg from "/assets/collegeImgNew.avif";
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
      className="relative min-h-screen  py-10 sm:pt-20 lg:pt-2 bg-black overflow-hidden"
      id="home"
    >
      {/* Event Date */}

      {/* Background Effect */}

      <div className="absolute z-20 inset-0 h-full w-full bg-white sm:mt-10 md:mt-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_95%_60%_at_75%_65%,#000_100%,transparent_100%)]">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={collegeImg}
            loading="lazy"
            alt="College"
            className="absolute w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <div className="w-36 h-36 bg-amber-200 rounded-full flex items-center justify-center shadow-lg mb-4">
              <img
                src={logo}
                alt="Logo"
                className="w-28 h-28 object-cover rounded-full"
              />
            </div>
            <h1 className="text-white font-subHeading uppercase text-3xl lg:text-5xl font-semibold drop-shadow-lg">
              kannur university union arts festival
            </h1>
            <span className="text-red-500 drop-shadow-xl shadow-white font-heading font-semibold text-xl sm:text-2xl md:text-3xl ">
              S. N. College Kannur
            </span>
            <p className="text-gray-300 text-lg mt-2 max-w-lg">
              Celebrate the spirit of art, culture, and creativity with us!
              Experience an unforgettable journey of talent and passion.
            </p>
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
            <div className="z-30 flex justify-center items-center font-subHeading font-semibold mt-5">
              <span className="connect font-subHeading animate-shine font-bold text-xl sm:text-2xl xl:text-xl md:text-2xl lg:text-3xl 2xl:text-2xl">
                FEB 24 - 28
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements */}
      {announcementList && announcementList.length > 0 && (
        <div
          className="absolute bottom-2  w-full flex justify-center overflow-hidden bg-yelow-500 z-30 text-white text-2xl sm:text-3xl p-3"
          style={{
            WebkitMask:
              "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
            mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div className="flex overflow-hidden w-full  p-2 space-x-10">
            <div className="flex animate-loop space-x-16  ">
              {[...announcementList, ...announcementList].map(
                (announce, index) => (
                  <span
                    key={`${announce?._id}-${index}`}
                    className=" flex items-center gap-3 px-4 py-2 text-white bg-sky-300/10 rounded-full whitespace-nowrap text-sm sm:text-lg font-heading
             lg:text-xl md:text-2xl font-semibold"
                  >
                    <Megaphone color="red" className="animate-ping" />{" "}
                    {announce?.annoucementName}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default UserViewHomePage;
