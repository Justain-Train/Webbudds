import Link from 'next/link';
import React from 'react';
import Image from 'next/image';




const Card = ({resource}) => {
  const {title, thumbnail , slug, description, tag} = resource;
  return (
    <Link
      href={`/resources/${slug}`}
      className="  bg-white bg-opacity-[3%] ease-in duration-300 rounded-[16px] w-full hover:-translate-y-2 overflow-hidden group"
    >

      <section className ="bg-white bg-opacity-[3%] mx-2 mt-2 mb-1 py-3 rounded-[8px] group-hover:bg-opacity-[6%] ease-in duration-500 ">
        <div className =" inline-flex font-medium ml-4 text-base text-white text-opacity-[55%] group-hover:text-opacity-100 ease-in-out duration-500">
          {tag}
        </div>
      </section>
      <section className=" bg-white bg-opacity-[3%] flex group-hover:bg-opacity-[6%] group-hover:rounded-b-[12px] relative items-center ease-in duration-500 justify-center pb-[50%] pt-[50%] mx-2 rounded-t-[8px] ">
        <div className="absolute w-[65%] group-hover:w-[70%] rounded-xl overflow-hidden group-hover:shadow-light ease-in-out duration-500">
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
        
      </section>
      <section className="bg-white bg-opacity-[3%] group-hover:bg-opacity-[0%] mx-2 mb-2 rounded-b-[8px] ease-in-out duration-700">
        <div className="flex items-center px-6 py-4">
          <div>
            <h3 className="text-white text-xl font-semibold">
              {title}
            </h3>
            <p className="text-white text-opacity-[60%]  text-base">
              {description}
            </p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Card;
