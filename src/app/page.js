
import Tab from '../components/Tabs';
import Typewriter from '@/components/Typewriter';
import CardContainer from '@/components/Cards/CardContainer';


export default function Home() {

  return (
    <div>
      <section className="mx-auto text-center max-w-base lg:max-w-[55%] xl:max-w-[50%] 2xl:max-w-[42%]  mt-[3.67rem] mb-[5rem]">
        <h1 className="text-responsive text-center antialiased text-white text-opacity-[74%]">
          Your{" "}
          <span>
            <Typewriter
              text="Gateway"
              delay={100}
            />
          </span>{" "}
          to Web Development Excellence
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

