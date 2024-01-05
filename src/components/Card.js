import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
 

const Card = () => {
  return (
    <Link
      href="/"
      className="border-[3px] border-navy hover:border-opacity-[87%] border-opacity-[87%] shadow-md rounded-[10px] w-full overflow-hidden"
    >
      <section className="bg-white bg-opacity-[5%] flex flex-col relative justify-center items-center pt-14 pb-5 px-14 rounded-b-[10px] shadow-xl">
        <div>
          <Image
            className="w-full h-full object-cover rounded-[8px] shadow-lg"
            loaidng ="lazy"
            src="/Javascript_Logo.png"
            layout="responsive"
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <div className=  "bg-gradient-to-r bg-opacity-[87%] from-gold to-whiteflex justify-center items-center mt-5 py-1 px-[15px] rounded-lg bg-white font-semibold text-sm text-black ">
            Languages
        </div>
      </section>
      <section>
        <div className="flex items-center px-6 py-4">
          <div>
            <h3 className="text-white text-base font-semibold">
              Javascript
            </h3>
            <p className="text-white text-opacity-[60%] text-sm">
              Programming Language
            </p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Card;
