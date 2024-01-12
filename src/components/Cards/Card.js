import Link from 'next/link';
import React from 'react';
import Image from 'next/image';




const Card = ({resource}) => {
  const {title, thumbnail , slug, description, tag} = resource;
  return (
    <Link
      href={`${slug}`}
      className="border-[3px] border-navy hover:border-white hover:border-opacity-[40%] ease-in duration-300 border-opacity-[87%] rounded-[10px] w-full overflow-hidden group"
    >
      <section className=" bg-white bg-opacity-[4%] flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
        <div className="absolute w-[65%] rounded-xl overflow-hidden pb-6 group-hover:shadow-light ease-in duration-300">
          <Image
            className="w-full object-cover rounded-[8px]"
            loading = "lazy"
            src={thumbnail.url}
            alt={title}
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex bg-gradient-to-r from-gold to-black to-86% bg-opacity-[87%] transition-colors ease-in duration-300 justify-center items-center font-semibold text-[14px] text-black">
          {tag}
        </div>
      </section>
      <section>
        <div className="flex items-center px-6 py-4">
          <div>
            <h3 className="text-white text-base font-semibold">
              {title}
            </h3>
            <p className="text-white text-opacity-[60%] text-sm">
              {description}
            </p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Card;
