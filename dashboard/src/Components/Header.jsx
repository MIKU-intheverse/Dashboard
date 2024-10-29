import React from "react";

function Header() {
  return (
    <header className="bg-cyan-700  h-25">
      <strong>
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="w-16 h-16">
            {/* Left image placeholder */}
            <div className="w-full h-full  ">
              <img
                src="../../public/images/svnitLogo.png"
                alt="Institute Logo"
                className="w-full h-full object-contain scale-150"
              />
            </div>
          </div>

          <div className="text-center my-2">
            <h1 className="text-red-900 text-2xl font-bold mb-1">
              सरदार वल्लभभाई राष्ट्रीय प्रौद्योगिकी संस्थान, सूरत
            </h1>
            <h2 className="text-white text-2xl">
              Sardar Vallabhbhai National Institute of Technology, Surat
            </h2>
          </div>

          <div className="w-16 h-16">
            {/* Right image placeholder */}
            <div className="w-full h-full">
              <img
                src="../../public/images/svnitLogo.png"
                alt=""
                className="w-full h-full object-contain scale-150"
              />
            </div>
          </div>
        </div>
        <div className="h-1 bg-blue-500"></div>
      </strong>
    </header>
  );
}

export default Header;