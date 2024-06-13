import React from "react";

import img from "@/assets/images/img.png";
import module from "@/components/home-page/home-page.module.css";

export const HomePage = () => {
  return (
    <div>
      <h1 className={module.heading}>Welcome to Social Network</h1>
      <div className={module.homePage}>
        <img src={img} alt="img" />
      </div>
      <p className={module.text}>
        On it you can communicate with users, correspond, post information, like
        messages and more, go ahead
      </p>
    </div>
  );
};
