import React from "react";
import HeroSection from "./hero";

const Project1 = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="https://toppng.com/uploads/preview/ike-logo-png-hd-nike-logo-png-image-free-download-nike-logo-sv-11562865034fkhqkcoas6.png"
            alt="logo"
          />
        </div>

        <ul>
          <li href="#">HOME</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
      <HeroSection />
    </div>
  );
};

export default Project1;
