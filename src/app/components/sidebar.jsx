import React from "react";

function Sidebar() {
  const items = {
    name: "Dulguun Purevtseren",
    position: "Front-End Enthusiast",
    qoute:
      "Building user-friendly, visually stunning, and accessible digital interfaces is my passion.",
  };

  return (
    <div className="lg:flex lg:flex-col lg:max-h-screen lg:sticky lg:w-1/2 lg:px-12 max-w-xl ">
      <div className="flex flex-col">
        <span className="text-4xl font-bold">{items.name}</span>
        <span className="pt-5 font-bold">{items.position}</span>
        <p className="pt-5 text-base font-normal text-slate-50">
          {items.qoute}
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default Sidebar;
