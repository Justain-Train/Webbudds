
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
    <div className ="flex justify-center">
      {buttons.map((button) => (
        <Link
          key={button.value}
          className={` bg-black hover:border-white hover:border-opacity-[40%] hover:bg-opacity[87%] text-white text-base border-[1px] border-navy border-opacity-[100%] font-semibold py-2 px-4 ml-4 rounded-[15px]`}
          href = {button.value}
        >
          <button>{button.label}</button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonsComponent;

