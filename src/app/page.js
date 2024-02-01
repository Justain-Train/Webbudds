import Tab from "../components/Tabs/Tabs";
import CardContainer from "@/components/Cards/CardContainer";
import { getResources } from "@/utils/contentful";
import { TabMobileContainer } from "@/components/Tabs/TabMobileContainer";

const getCategories = async () => {
  const resources = await getResources();
  let categories = new Set();

  resources.map((resource) => {
    resource.tag;
    categories.add(resource.tag);
  });

  const cat = ["All", ...categories];
  return cat;
};

export default async function Home({ searchParams }) {
  const categories = await getCategories();
  const { category } = searchParams;

  return (
    <>
      <section className="mx-auto text-center max-w-base md:max-w-[65%] lg:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[48%]">
        <h1 className="text-responsive text-center font-bold antialiased text-transparent">
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            Your{" "}
          </span>
          <span className="bg-clip-text bg-gradient-to-r from-gold to-white from-20%">
            Gateway{" "}
          </span>{" "}
          <span className="bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            to{" "}
          </span>
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            Web{" "}
          </span>
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            Development{" "}
          </span>
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            Excellence{" "}
          </span>
        </h1>
      </section>
      <section className=" mx-auto mb-[4rem] md:mb-[5rem] max-w-[95%] md:max-w-[92%] lg:max-w-[61%] xl:max-w-[60%]">
        <p className="text-white text-opacity-[87%] text-semi md:text-base 2xl:text-2xl mt-3 text-center">
          WebBudds is a collection of resources for web developers, carefully
          curated by web developers to help you learn and grow in your web dev
          journey.
        </p>
      </section>
      <section className="md:hidden pl-5 ">
        <div className="inline-flex text-white text-semi font-semibold border-b border-gold">
          {category === undefined ? "All" : category}
        </div>
      </section>
      <section>
        <TabMobileContainer category={categories} />
        <Tab category={categories} />
        <CardContainer category={category} />
      </section>
    </>
  );
}
