"use client";

import React from 'react';
import { Icon } from "@iconify/react";
import { ContactForm } from './ContactForm';


export const Footer = () => {
  return (
    <>
      <footer className="grid text-xl  font-bold grid-cols-1 lg:grid-cols-6 lg:gap-32 border-t-navy border-t mt-28 px-12">
      <section className="col-span-3">
      <ContactForm />
      </section>
      <section className="pt-12 col-span-2 lg:pt-24">
        <h2>My Digital Landscape</h2>
        <div className="pt-4">
          <a href="" className ="">
          <Icon icon="icomoon-free:linkedin" className="text-3xl text-white" />
          </a>
        </div>
      </section>
      </footer>
    </>
  );
};