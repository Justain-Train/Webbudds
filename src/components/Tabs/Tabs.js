
"use client";
import Link from 'next/link';
const ButtonsComponent = () => {



  const buttons = [
    { label: "All", value: "/" },
    { label: "Languages", value: "languages" },
    { label: "Technologies", value: "technologies" },
    { label: "YT Creators", value: "ytCreators" },
    { label: "Learning Tools", value: "learningTools" },
    { label: "Inspirations", value: "inspirations" },
    { label: "UI Components", value: "uiComponents" },
  ];

  

  return (
    <div className ="flex flex-wrap gap-5 justify-center">
      {buttons.map((button) => (
        <button
          key={button.value}
          className={` bg-black hover:border-white hover:border-opacity-[40%]  transition-colors ease-in duration-300 text-white  text-base border-[1px] border-navy border-opacity-[100%] font-medium py-2 px-4 rounded-[14px]`}
          onClick={() => setActive(button.label)}
        >
        {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonsComponent;

