import { useState, useRef, useEffect } from "react";
import { HiClipboardList, HiAdjustments } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("description");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabRefs = useRef({});

  const tabs = [
    {
      id: "description",
      label: "Description",
      icon: <HiClipboardList className="w-5 h-5 mr-2" />,
      content: (
        <span className="font-medium text-gray-800 dark:text-white">
          📖 Profile tab’s associated content
        </span>
      ),
    },
    {
      id: "review",
      label: "Rating",
      icon: <FaRegStar className="w-5 h-5 mr-2" />,
      content: (
        <span className="font-medium text-black dark:text-gray-200">
          ⭐ Dashboard tab’s associated content
        </span>
      ),
    },
    {
      id: "qa",
      label: "Q & A",
      icon: <HiAdjustments className="w-5 h-5 mr-2" />,
      content: (
        <span className="font-medium text-gray-800 dark:text-white">
          ❓ Settings tab’s associated content
        </span>
      ),
    },
  ];

  // Update underline position
  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setUnderlineStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full   px-2 sm:px-4">
      {/* Tabs Header */}
      <div className="relative flex flex-wrap  justify-center sm:justify-start gap-3  border-gray-200 rounded-full dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[tab.id] = el)}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative rounded-full pb-2 font-medium text-sm sm:text-base transition-colors duration-300
              flex items-center md:p-3 border border-gray-200 rounded-full 
              ${
                activeTab === tab.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 md:border border-gray-500   "
              }
            `}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}

        {/* Animated Underline */}
        <span
          className="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 rounded-full"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>

      {/* Tabs Content */}
       <div className="p-5 sm:p-6 mt-4 rounded-lg bg-white shadow-sm transition-all duration-300">
        {activeTab === "description" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Service Description</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This is where you put your description content. You can include text,
              images, or even other components here.
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Ratings & Reviews</h3>
            <ul className="space-y-3">
              <li className="border-b border-gray-200 dark:border-gray-700 pb-2">
                ⭐⭐⭐⭐☆ — Great service!
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-2">
                ⭐⭐⭐⭐⭐ — Absolutely loved it.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "qa" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Questions & Answers</h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Q:</strong> How long does it take?  
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> Usually within 24 hours.
                </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
