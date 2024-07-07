'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ categories } : { categories: string[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get('category');
  const [active, setActive] = useState('All');

  useEffect(() => {
    if (!search) {
      setActive('All');
    } else {
      setActive(search);
    }
  }, [search]);

  const handleTabClick = (category: string) => {
    setActive(category);
    if (category === 'All') {
      router.replace('/', { scroll: false });
    } else {
      router.push(`/?category=${category}`, { scroll: false });
    }
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category : string) => (
        <button
          key={category}
          className={`relative hidden text-white md:block text-base lg:text-xl transition ${
            active !== category && search !== category && 'hover:text-white/60'
          } focus-visible:outline-2 font-medium py-2 px-4 rounded-[16px]`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
          onClick={() => handleTabClick(category)}
        >
          {category === active && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-gradient-to-r from-gold to-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
            />
          )}
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
           


