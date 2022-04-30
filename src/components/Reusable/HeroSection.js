import React from "react";

function HeroSection({ img, title, subtitle, heroclass }) {
  return (
    /* <BackgroundImage className={heroclass} fluid={img}></BackgroundImage> */
    <div className="text-center">
      <h1 className="text-uppercase text-center display-4 theme-text">
        {title}
      </h1>
      <div>
        <h4 className="text-warning">{subtitle}</h4>
      </div>
    </div>
  );
}

export default HeroSection;
