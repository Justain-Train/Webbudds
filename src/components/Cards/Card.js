import Link from 'next/link';
import React from 'react';
import Image from 'next/image';



const Card = ({resource}) => {
  const {title, thumbnail , slug, description, tag} = resource;
  return (
    <Link
      href={`${slug}`}
      className="border-[3px] border-navy hover:border-white hover:border-opacity-[40%] ease-in duration-300 border-opacity-[87%] shadow-md rounded-[10px] w-full overflow-hidden group"
    >
      <section className=" bg-white bg-opacity-[4%] flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
        <div className="absolute w-[70%] rounded-3xl overflow-hidden pb-9">
          <Image
            className="w-full object-cover rounded-[8px] shadow-lg"
            layout='responsive'
            src={thumbnail.url}
            alt={title}
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <div className="absolute bottom-3 right-0 left-0 flex group-hover:bg-gradient-to-r group-hover:from-gold ease-in transition-colors duration-300 justify-center items-center py-1 px-[15px] bg-white bg-opacity-[100%] font-semibold text-[14px] xl:text-[15px] text-black">
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
