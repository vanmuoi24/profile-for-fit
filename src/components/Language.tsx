import React, { useState } from "react";
import Image from "next/image";
import vietnam from "../../public/image/image.png";
import english from "../../public/image/GB.png";

const Language = () => {
  const [language, setLanguage] = useState("vi");
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false); // Đóng menu sau khi chọn
  };

  return (
    <div className="relative inline-block text-left mt-1">
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 "
      >
        <Image
          src={language === "vi" ? vietnam : english}
          alt="flag"
          width={20}
          height={15}
          className="mr-2"
        />
        <span className="text-sm font-medium">
          {language === "vi" ? "Việt Nam" : "English"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-4 w-4 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.25a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <button
            onClick={() => handleChangeLanguage("vi")}
            className={`w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
              language === "vi" ? "font-semibold text-indigo-600" : ""
            }`}
          >
            <span>Việt Nam</span>
            <Image
              src={vietnam}
              alt="Vietnam flag"
              width={20}
              height={15}
              className="mx-3"
            />
          </button>
          <button
            onClick={() => handleChangeLanguage("en")}
            className={`w-full flex gap-2  justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
              language === "en" ? "font-semibold text-indigo-600" : ""
            }`}
          >
            <span>English </span>
            <Image
              src={english}
              alt="English flag"
              width={20}
              height={15}
              className=" mx-4"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Language;
