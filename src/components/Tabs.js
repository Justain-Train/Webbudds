import React, { useState } from 'react';
import Link from 'next/link';

const ButtonsComponent = () => {
  const [activeButton, setActiveButton] = useState("all");

  const buttons = [
    { label: "All", value: "/" },
    { label: "Languages", value: "languages" },
    { label: "Technologies", value: "technologies" },
    { label: "YT Creators", value: "ytCreators" },
    { label: "Learning Tools", value: "learningTools" },
    { label: "Inspirations", value: "inspirations" },
    { label: "UI Components", value: "uiComponents" },
  ];

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  return (
    <div>
      {buttons.map((button) => (
       <button>
        <Link
          key={button.value}
          className={`button ${
            button.value === activeButton ? "active" : ""
          }  bg-black hover:bg-white hover:bg-opacity[87%] hover:text-black text-white text-base border-[2px] border-navy border-opacity-[100%] font-semibold py-2 px-4 ml-4 rounded-[15px]`}
          href = {button.value}
        >
          {button.label}
        </Link>
        </button> 
      ))}
    </div>
  );
};

export default ButtonsComponent;
