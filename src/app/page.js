'use client'

import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import Tab from '../components/Tabs'
import Typewriter from '@/components/Typewriter';
import Card from '@/components/Card';



export default function Home() {
  return (
    <div>
      <section className="mx-auto text-center max-w-base lg:max-w-[55%] xl:max-w-[50%] 2xl:max-w-[42%]  mt-[3.67rem] mb-[5rem]">
        <h1 className="text-responsive text-center antialiased text-white text-opacity-[79%]">
          Your{" "}
          <span>
            <Typewriter
              text="Gateway"
              delay={100}
            />
          </span>{" "}
          to Web Development Excellence
        </h1>
        <p className="text-white text-opacity-[74%] text-base 2xl:text-2xl mt-3">
          WebBudds is a collection of resources for web developers, carefully
          curated by web developers to help you learn and grow in your web dev journey.
        </p>
      </section>
      <section className="flex justify-center">
        <Tab />
      </section>
      <section className ="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  );
}

