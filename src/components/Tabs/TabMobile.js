import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
const variants = {
  open: {
    y: 0,
    opacity: 1,
  transition: {
    duration: 0.1,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const TabMobile = ({ category, toggle, isOpen }) => {
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
    <motion.ul
      className={`px-4 pb-10 pt-5 w- ${
        isOpen === true
          ? "border-white border-opacity-[30%] rounded-[3%] border-[0.1px]"
          : " border-[0px]"
      } `}
    >
      {category.map((categories) => (
        <motion.li key={categories} variants={variants} className="py-1">
          <button
            className={` text-semi w-full rounded-md flex  ${
              active === categories
                ? "bg-gradient-to-r from-gold to-white mix-blend-difference text-black"
                : "bg-white bg-opacity-[4%] text-white "
            } font-medium py-2 pl-4 `}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
            onClick={() => {
              setActive(categories);
              toggle();
              categories === "All"
                ? router.push("/", { scroll: false })
                : router.push(`/?category=${categories}`, { scroll: false });
            }}
          >
            {categories}
          </button>
        </motion.li>
      ))}
      <motion.li
        variants={variants}
        className=" mt-4 mb-3 w-full flex flex-col items-center border-t-[0.1px] border-white border-opacity-[50%]"
      >
        <div className=" pt-3 text-base">
          <Link href="/about">About</Link>
        </div>
        <div className="pt-1 text-base">
          <Link href="#contact" onClick={() => toggle()}>
            Contact
          </Link>
        </div>
        <div className="pt-1 text-base">
          <Link href="#" onClick={() => toggle()}>
            Home
          </Link>
        </div>
      </motion.li>
    </motion.ul>
  );
};
