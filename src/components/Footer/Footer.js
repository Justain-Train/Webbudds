"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { ContactForm } from "./ContactForm";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className=" border-t-navy border-t mt-28 px-12">
        <section className="grid text-2xl font-bold grid-cols-1 lg:grid-cols-6 lg:gap-32">
          <section className="col-span-4">
            <ContactForm />
          </section>
          <section className="pt-20 col-span-2">
            <h2 className="text-white text-opacity-[87%] text-xl">
              My Digital Landscape
            </h2>
            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/justin-tran-2ba52823b/"
                className="flex items-center space-x-2 group"
              >
                <Icon
                  icon="mdi:linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-4xl text-white text-opacity-[80%]"
                />
                <div>
                  <span className="relative font-medium text-white text-opacity-[80%] text-base">
                    Linkedin
                    <span className="absolute -bottom-1 left-0 w-0 border-b-2 group-hover:w-full ease-in-out duration-300" />
                  </span>
                </div>
              </a>
            </div>
            <div className="pt-4">
              <a
                href="https://github.com/Justain-Train"
                className="flex items-center space-x-2 group"
              >
                <Icon
                  icon="mdi:github"
                  target="_blank"
                  rel="noreferrer"
                  className="text-4xl text-white text-opacity-[80%]"
                />
                <div>
                  <span className="relative font-medium text-white text-opacity-[80%] text-base">
                    Github
                    <span className="absolute -bottom-1 left-0 w-0 border-b-2 group-hover:w-full ease-in-out duration-300" />
                  </span>
                </div>
              </a>
            </div>
            <div className="pt-4">
              <a
                href="https://www.behance.net/justintran32"
                className="flex items-center space-x-3 group"
              >
                <Icon
                  icon="devicon-plain:behance"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-white text-opacity-[80%]"
                />
                <div>
                  <span className="relative font-medium text-white text-opacity-[80%] text-base">
                    Behance
                    <span className="absolute -bottom-1 left-0 w-0 border-b-2 group-hover:w-full ease-in-out duration-300" />
                  </span>
                </div>
              </a>
            </div>
            <div>
              <h2 className="text-white text-opacity-[87%] mt-8 text-xl">
                Contact Email
              </h2>
              <a
                href="mailto:justintran952@gmail.com"
                className="relative font-medium text-white text-opacity-[80%] text-base group"
              >
                justintran952@gmail.com
                <span className="absolute -bottom-1 left-0 w-0 border-b-2 group-hover:w-full ease-in-out duration-300" />
              </a>
            </div>
          </section>
        </section>
        <section className="flex flex-col gap-5 md:flex-row md:justify-between pt-14 md:pt-20 ">
          <p className="text-white text-opacity-[60%] text-sm">
            © 2021 Justin Tran
          </p>
          <p className="text-white text-opacity-[60%] text-sm">
            Made with ❤️ by <span className="text-white font-bold">Justin Tran つ ◕_◕ つ</span> 
          </p>
          <section className="flex space-x-5 md:space-x-8">
            <div>
              <Link
                className="text-white text-opacity-[60%] text-sm"
                href="/about"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                className="text-white text-opacity-[60%] text-sm"
                href="https://docs.google.com/forms/d/1kdjNjMQPWKsy6fbYLEJSec7EcaBj74f00IeaQz1uOKw"
              >
                Add A Resource
              </Link>
            </div>
            <div>
              <Link
                className="text-white text-opacity-[87%] text-sm"
                href="#"
              >
                Back to the Top
              </Link>
            </div>
          </section>
        </section>
      </footer>
    </>
  );
};
