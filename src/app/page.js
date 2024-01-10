

import Tab from '../components/Tabs/Tabs';
import Typewriter from '@/components/Ui/Typewriter';
import CardContainer from '@/components/Cards/CardContainer';
import  { Meteors }  from '@/components/Ui/Meteors';




export default function Home() {

  return (
    <div>
      <section className="mx-auto text-center max-w-base lg:max-w-[55%] xl:max-w-[50%] 2xl:max-w-[42%]  mt-[3.67rem] mb-[5rem]">
        <h1 className="text-responsive text-center antialiased text-opacity-[60%] text-transparent">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-darkgray from-65% to-black">Your </span>
          <span>
            <Typewriter
              text="Gateway"
              delay={100}
            />
          </span>{" "}
        
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-darkgray from-65% to-black">to </span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-darkgray from-65% to-black">Web </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-darkgray from-65% to-black">Development </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-darkgray from-65% to-black">Excellence </span> 
          <Meteors number={12}/>
        </h1>
        <p className="text-white text-opacity-[70%] text-base 2xl:text-2xl mt-3">
          WebBudds is a collection of resources for web developers, carefully
          curated by web developers to help you learn and grow in your web dev journey.
        </p>
      </section>
      <section >
        <Tab/>
        <CardContainer/>
      </section>
    </div>
  );
}





