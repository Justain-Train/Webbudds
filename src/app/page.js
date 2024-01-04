'use client'

import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import Tab from '../components/Tabs'
import Typewriter from '@/components/Typewriter';
import Card from '@/components/Card';



export default function Home() {
  return (
    <div>
      <section className="mx-auto text-center max-w-xl lg:max-w-[41%] xl:max-w-[37%] 2xl:max-w-[35%]  mt-[3.67rem] mb-20">
        <h1 className="text-responsive text-center antialiased text-white text-opacity-70">
          Your{" "}
          <span>
            <Typewriter
              text="Gateway"
              delay={170}
            />
          </span>{" "}
          to Web Development Excellence
        </h1>
        <p className="text-white text-opacity-[87%] text-base  xl:text-xl 2xl:text-2xl  mt-3">
          WebBudds is a collection of resources for web developers, carefully
          curated by web developers. We have resources for beginners,
          intermediates, and experts alike.
        </p>
      </section>
      <section className="flex justify-center">
        <Tab />
      </section>
      <section className ="grid grid-cols-4 mt-9 justify-items-center">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  );
}
