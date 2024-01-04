import Link from 'next/link';
import React from 'react';

const Card = () => {
  return (
  <Link href = '/'>
    <div className="bg-black  border-2 shadow-md rounded-lg p-4 w-[400px] h-[450px]">
      <h2 className="text-white text-xl font-bold mb-2">Card Title</h2>
      <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded mt-4">
        Learn More
      </button>
    </div>
  </Link>
  );
};

export default Card;
