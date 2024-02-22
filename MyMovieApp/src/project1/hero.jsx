import React from "react";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Air Jordan 1 Mid SE Women's Shoes, by Nike Size 8.5 (White)</p>
        <div>
          <button className="heroBtn"> Shop Now</button>
          <button className="heroBtn"> Category</button>
        </div>
      </div>
      <div className="heroImg">
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRenKsUtYK4SzSMb-V7VQhh7R4Q1z6egQ9phOi6nbNh-om6y6x5UaCuMuIopSUZ7k_xOSkPGw2zVWt5WiZK5RKQ38Us3F3_eva0rvg5NhiqgsaAA7qKpo-q&usqp=CAE"
          alt="img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
