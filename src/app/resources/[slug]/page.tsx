import Button from "@/components/Buttons/Button";
import { getResources } from "@/utils/contentful";
import Image from "next/image";
import Link from "next/link";
import {PageWrapper} from "@/components/ui/PageWrapper";
import { GoArrowLeft } from "react-icons/go";
import React from "react";


const resourcePage = async ({ params }) => {

  const resources = params;
  const res = await getResources();

  const resource = res.find(() => res.slug === resources.slug);

  const { overview, title, description, thumbnail, source } = resource || {};

  return (
    <PageWrapper>
      <Link
        href="/"
        className="ml-8  text-base text-opacity-[60%] focus:outline-none hover:text-opacity-100 ease-in-out duration-300 text-white group"
      >
        <GoArrowLeft className="inline-block mr-1 group-hover:text-2xl ease-in-out duration-300" />
        <span>Back</span>
      </Link>
      <section className="flex flex-col items-center ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden w-[85%]">
          <div className=" flex flex-col justify-center py-10 px-10 pl-9 leading-tight rounded-3xl  bg-white bg-opacity-[5%]">
            <h1 className="text-white font-bold text-heading">{title}</h1>
            <p className="text-white text-opacity-[60%] text-xl">
              {description}
            </p>
          </div>
          <div className=" bg-white bg-opacity-[5%] flex relative items-center justify-center  py-[30%] rounded-3xl ">
            <div className="absolute w-[45%] group-hover:w-[70%] rounded-xl overflow-hidden ">
              <Image
                className="w-full object-cover rounded-[8px]"
                loading="lazy"
                src={thumbnail}
                alt={title}
                width={200}
                height={200}
                quality={100}
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10 overflow-hidden max-w-[79%] ">
          <div className="col-span-2 ml-2 ">
            <div>
              <h1 className="text-white xl:text-4xl text-3xl font-semibold">
                Overview
              </h1>
            </div>
            <div className="text-white leading-relaxed text-semi xl:text-base text-opacity-[75%] mt-2 mb-8">
              {overview}
            </div>
            <div className="inline-flex ">
              <Button href={source}>View Source</Button>
            </div>
          </div>
          <div className="col-span-1 items-end flex flex-col">
            <div className=" text-white text-tiny text-opacity-[40%]">
              On This Page
            </div>
            <div className="text-white text-base font-bold">{title}</div>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
};

export default resourcePage;

  