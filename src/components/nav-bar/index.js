import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQ";
import MyLink from "./MyLink";


function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}) {
  const flexBetween = "flex items-center justify-between";
  const [isOpen, setIsOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-themePrimary drop-shadow";
  const hoverMyLinkColor = isTopOfPage
    ? "hover:text-secondary-300"
    : "hover:text-secondary-100";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full `}
      >
        <div className={`${flexBetween} mx-auto w-full container px-2`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img src="img/logo.png" alt="Logo" className="w-auto h-28" />
            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`flex justify-end w-full`}>
                <div className={`${flexBetween} gap-6 text-sm`}>
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="HOME"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="ABOUT"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="GALLERY"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="CONTACT"
                  />

                </div>

              </div>
            ) : (
              <button
                className="p-2 rounded-full bg-secondary-400"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3Icon className="w-10 h-10 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isOpen && (
        <div
          className="fixed bottom-0 right-0 top-0 z-50 w-[300px] bg-themePrimaryLighter drop-shadow-xl overflow-auto ..."
        >
          {/*Close icon*/}
          <div className="flex justify-end p-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>
          {/*Menu items*/}
          <div
            className="mx-[10%] flex flex-col gap-5 text-lg text-center"
          >
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="HOME"
            />
             <hr />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="ABOUT"
            />
             <hr />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="GALLERY"
            />
             <hr />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="CONTACT"
            />
            <hr />


          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
