import React from "react";
import Navbar from "../components/Navbar/Navbar";
import imgsection3 from "../assets/img/imgsection3.png";
import Content from "../components/Content/Explore";

const Profile = () => {
  return (
    <div>
      <div>
        {/* Header Section */}
        <Navbar></Navbar>
        <div className="container h-max py-20 flex flex-col items-center justify-center">
          <img
            src={imgsection3}
            className="bg-black rounded-full min-h-20 max-w-20"
          ></img>
          <h1 className="text-center text-5xl text-font">aleks</h1>
          <p className="text-center text-lg text-nav-menu">@aleeekss</p>
        </div>
      </div>
      {/* End Header Secion */}
      {/* Saved Image Section */}
      <div className=" flex flex-col gap-8 items-center">
        <h1 className="text-font text-3xl font-normal">Saved Image</h1>

        <Content />
      </div>
      :{/* End Saved Image Section */}
    </div>
  );
};

export default Profile;
