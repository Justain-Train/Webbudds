import {motion} from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
   
  }
};


export const TabMobile = ({category}) => {
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
    <motion.ul className="absolute top-3 w-[300px]">
      {category.map((categories) => (
        <motion.li  key={categories} variants={variants} className="relative">
          <button
            className={` text-white text-semi w-full  ${
              active === categories 
                ? ""
                : "hover:text-white/60"
            } focus-visible:outline-2 font-medium py-2 px-4 rounded-[16px]`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
            onClick={() => {
              setActive(categories);
              categories === "All"
                ? router.push("/", { scroll: false })
                : router.push(`/?category=${categories}`, { scroll: false });
            }}
          >
            {categories === active && (
            <motion.span
              layoutId="bubbleMobile"
              className="absolute  inset-0 inset-x-4 z-10 bg-gradient-to-r from-gold to-white mix-blend-difference"  
              transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
            />
          )}
           {categories}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
}