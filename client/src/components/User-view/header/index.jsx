import { navBarList } from "@/config";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function UserViewHeader() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  function handleToggle() {
    setisMenuOpen(!isMenuOpen);
  }
  function handleActiveNav(index) {
    setActiveNav(index);
  }



  return (
    <header>
      <nav className="p-5  w-full -translate-x-1/2 left-1/2  lg:flex justify-end fixed hidden sm:flex z-[1000]">
        <ul className="flex gap-5  p-3 relative bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-125 rounded-2xl">
          {navBarList.map((navItem, index) => (
            <li
              key={index}
              className="shrink-0 font-bold text-white rounded relative"
            >
              <a
                className={`${
                  activeNav === index
                    ? "before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-1 before:w-8 before:h-8 before:bg-red-500/70 before:rounded-full before:transition-all before:duration-300"
                    : "text-yellow-400 font-bold"
                }`}
                onClick={() => handleActiveNav(index)}
                href={`${navItem?.link}`}
                style={{ color: "white" }}
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="sm:hidden flex z-[1000]">
        {!isMenuOpen ? (
          <Menu
            size={30}
            className="fixed top-3  rounded-sm  left-3  z-[1000]"
            onClick={handleToggle}
          />
        ) : (
          <X
            size={30}
            className="fixed top-3  left-3 z-[1000]"
            onClick={handleToggle}
          />
        )}

        <div
          className={`${
            isMenuOpen ? "left-[5%] duration-500" : "left-[-100%] duration-500"
          } fixed flex w-full top-10 z-[1000]`}
        >
          <ul className="flex flex-col gap-4 p-5 relative bg-black/40 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-125 rounded-2xl">
            {navBarList.map((navItem, index) => (
              <li
                key={index}
                className="font-bold  text-white rounded relative text-sm"
              >
                <a
                  className={`${
                    activeNav === index
                      ? "before:absolute before:top-1/2  before:-translate-y-1/2 before:-left-1 before:w-6 before:h-6 border-b-2 border-b-white before:bg-red-500/50 before:rounded-full before:transition-all before:duration-300"
                      : "text-yellow-400 font-bold"
                  }font-extrabold  tracking-widest`}
                  onClick={() => handleActiveNav(index)}
                  href={`#${navItem.title}`}
                >
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default UserViewHeader;
