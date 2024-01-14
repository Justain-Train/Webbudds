"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";



const Tabs = ({ category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const [active, setActive] = useState("All");


  useEffect(() => {
    // Set active to "All" when URL is / or has no category
    if (router.asPath === "/" || !search) {
      setActive("All");
    } else {
      setActive(search);
    }
  }, [router.asPath, search]);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {category.map((categories) => (
        <button
          key={categories}
          className={`relative hidden text-white md:block text-base transition ${
            active === categories && search === categories
              ? ""
              : "hover:text-white/60"
          } focus-visible:outline-2 font-medium py-2 px-4 rounded-[16px]`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          onClick={(e) => {
            e.preventDefault();
            setActive(categories);
            categories === "All"
              ? router.push("/",{scroll:false})
              : router.push(`/?category=${categories}`, { scroll: false });
          }}
        >
          {categories === active && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-gradient-to-r from-gold to-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
            />
          )}
          {categories}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
