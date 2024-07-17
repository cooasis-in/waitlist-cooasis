import React from "react";

const Navbar = () => {
  return (
    <section className=" bg-[black]">
      <div className="container h-20 flex justify-between items-center">
        <div className="flex ml-10">
          <img
            src="images/darkmode.svg"
            alt="Cooasis Logo"
            className="h-10 w-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
