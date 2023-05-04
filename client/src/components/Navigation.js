// import React, { useState } from "react";
// import {
//   CalendarIcon,
//   UsersIcon,
//   FolderIcon,
//   HomeIcon,
// } from "@heroicons/react/outline";
// import GameComponent from "./GameComponent.js";
// import HighScoresComponent from "./HighScoresComponent.js";
// import HowToPlayComponent from "./HowToPlayComponent.js";
// import ProfileComponent from "./ProfileComponent.js";

// const navigation = [
//   { name: "Game", component: GameComponent, icon: HomeIcon, current: true },
//   {
//     name: "High Scores",
//     component: HighScoresComponent,
//     icon: UsersIcon,
//     current: false,
//   },
//   {
//     name: "How To Play",
//     component: HowToPlayComponent,
//     icon: FolderIcon,
//     current: false,
//   },
//   {
//     name: "Profile",
//     component: ProfileComponent,
//     icon: CalendarIcon,
//     current: false,
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("About Me");

//   const handleNavClick = (section) => {
//     setActiveSection(section);
//   };

//   const renderSection = () => {
//     const activeNavItem = navigation.find(
//       (item) => item.name === activeSection
//     );
//     return activeNavItem ? <activeNavItem.component /> : <GameComponent />;
//   };

//   return (
//     <>
//       <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
//         <nav className="flex flex-1 flex-col">
//           <ul className="flex flex-1 flex-col gap-y-7">
//             <li>
//               <ul className="-mx-2 space-y-1">
//                 {navigation.map((item) => (
//                   <li key={item.name}>
//                     <button
//                       onClick={() => handleNavClick(item.name)}
//                       className={classNames(
//                         item.name === activeSection
//                           ? "bg-gray-800 text-white"
//                           : "text-gray-400 hover:text-white hover:bg-gray-800",
//                         "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
//                       )}
//                     >
//                       <item.icon
//                         className="h-6 w-6 shrink-0"
//                         aria-hidden="true"
//                       />
//                       {item.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <main className="flex-grow w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col mt-8">{renderSection()}</div>
//         </div>
//       </main>
//     </>
//   );
// }

// import React, { useState } from "react";
// import {
//   CalendarIcon,
//   UsersIcon,
//   FolderIcon,
//   HomeIcon,
// } from "@heroicons/react/outline";
// import GameComponent from "./GameComponent.js";
// import HighScoresComponent from "./HighScoresComponent.js";
// import HowToPlayComponent from "./HowToPlayComponent.js";
// import ProfileComponent from "./ProfileComponent.js";

// const navigation = [
//   { name: "Game", component: GameComponent, icon: HomeIcon, current: true },
//   {
//     name: "High Scores",
//     component: HighScoresComponent,
//     icon: UsersIcon,
//     current: false,
//   },
//   {
//     name: "How To Play",
//     component: HowToPlayComponent,
//     icon: FolderIcon,
//     current: false,
//   },
//   {
//     name: "Profile",
//     component: ProfileComponent,
//     icon: CalendarIcon,
//     current: false,
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("About Me");

//   const handleNavClick = (section) => {
//     setActiveSection(section);
//   };

//   const renderSection = () => {
//     const activeNavItem = navigation.find(
//       (item) => item.name === activeSection
//     );
//     return activeNavItem ? <activeNavItem.component /> : <GameComponent />;
//   };

//   return (
//     <>
//       <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
//         <nav className="flex flex-1 flex-col">
//           <ul className="flex flex-1 flex-col gap-y-7">
//             <li>
//               <ul className="-mx-2 space-y-1">
//                 {navigation.map((item) => (
//                   <li key={item.name}>
//                     <button
//                       onClick={() => handleNavClick(item.name)}
//                       className={classNames(
//                         item.name === activeSection
//                           ? "bg-gray-800 text-white"
//                           : "text-gray-400 hover:text-white hover:bg-gray-800",
//                         "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
//                       )}
//                     >
//                       <item.icon
//                         className="h-6 w-6 shrink-0"
//                         aria-hidden="true"
//                       />
//                       {item.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <main className="flex-grow w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col mt-8">{renderSection()}</div>
//         </div>
//       </main>
//     </>
//   );
// }

import React, { useState } from "react";
<<<<<<< HEAD
=======
import { Disclosure } from "@headlessui/react";
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
import GameComponent from "./GameComponent.js";
import HighScoresComponent from "./HighScoresComponent.js";
import HowToPlayComponent from "./HowToPlayComponent.js";
import ProfileComponent from "./ProfileComponent.js";

const navigation = [
  { name: "Game", component: GameComponent, current: true },
  { name: "High Scores", component: HighScoresComponent, current: false },
  { name: "How To Play", component: HowToPlayComponent, current: false },
  { name: "Profile", component: ProfileComponent, current: false },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("About Me");

//   const handleNavClick = (section) => {
//     setActiveSection(section);
//   };

//   const renderSection = () => {
//     const activeNavItem = navigation.find(
//       (item) => item.name === activeSection
//     );
//     return activeNavItem ? <activeNavItem.component /> : <GameComponent />;
//   };

//   return (
//     <>
//       <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
//         <nav className="flex flex-1 flex-col">
//           <ul className="flex flex-1 flex-col gap-y-7">
//             <li>
//               <ul className="-mx-2 space-y-1">
//                 {navigation.map((item) => (
//                   <li key={item.name}>
//                     <button
//                       onClick={() => handleNavClick(item.name)}
//                       className={classNames(
//                         item.name === activeSection
//                           ? "bg-gray-800 text-white"
//                           : "text-gray-400 hover:text-white hover:bg-gray-800",
//                         "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
//                       )}
//                     >
//                       {item.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <main className="flex-grow w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col mt-8">{renderSection()}</div>
//         </div>
//       </main>
//     </>
//   );
// }

// import React from "react"

// import { useState } from "react"
// import { Disclosure } from "@headlessui/react";

// import About from "./AboutMe"
// import Portfolio from "./Portfolio"
// import Contact from "./Contact"
// import Resume from "./Resume"

// const navigation = [
//   { name: "About Me", href: "", current: true },
//   { name: "Portfolio", href: "", current: false },
//   { name: "Contact", href: "", current: false },
//   { name: "Resume", href: "", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("About Me");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Game":
        return <GameComponent />;
      case "High Scores":
        return <HighScoresComponent />;
      case "How to Play":
        return <HowToPlayComponent />;
      case "Profile":
        return <ProfileComponent />;
      default:
        return <GameComponent />;
    }
  };

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 py-2">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <h1
                    className="text-2xl text-white mr-12 cursor-pointer"
                    onClick={() => handleNavClick("About Me")}
                  >
                    4096
                  </h1>
                </div>
                <div className="hidden sm:ml-auto sm:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => handleNavClick(item.name)}
                        className={classNames(
                          item.name === activeSection
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-3 text-base font-medium cursor-pointer"
                        )}
                        aria-current={
                          item.name === activeSection ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? "Close" : "Menu"}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
<<<<<<< HEAD
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.name)}
                      className={classNames(
                        item.name === activeSection
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      {item.name}
                    </button>
                  </li>
=======
                  <a
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={classNames(
                      item.name === activeSection
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={
                      item.name === activeSection ? "page" : undefined
                    }
                  >
                    {item.name}
                  </a>
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main>{renderSection()}</main>
    </>
  );
}
