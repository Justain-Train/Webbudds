import Tab from '../components/Tabs/Tabs';
import Typewriter from '@/components/Ui/Typewriter';
import CardContainer from '@/components/Cards/CardContainer';
import  { Meteors }  from '@/components/Ui/Meteors';
import { useSearchParams } from 'next/navigation';
import { getResources } from '@/utils/contentful';
import { render } from 'react-dom';


const getCategories = async () => {
  const resources = await getResources();
  let categories = new Set();
  

  resources.map((resource) => {
    resource.tag 
     categories.add(resource.tag)
    });
  
  const cat = ["All",...categories]
  return cat
}



export default async function Home({searchParams}) {
  const categories = await getCategories();
  const { category } = searchParams;
 

  return (
    <div>
      
      <section className="mx-auto text-center max-w-base lg:max-w-[55%] xl:max-w-[50%] 2xl:max-w-[50%] mb-[5rem]">
        <h1 className="text-responsive text-center antialiased text-transparent">
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500">
            Your{" "}
          </span>
          <span>
            <Typewriter text="Gateway" delay={100} />
          </span>{" "}
          <span className="bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500">
            to{" "}
          </span>
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500">
            Web{" "}
          </span>
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500">
            Development{" "}
          </span>
          <span className=" bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500">
            Excellence{" "}
          </span>
        </h1>
        <p className="text-white text-opacity-[60%] text-base 2xl:text-2xl mt-3">
          WebBudds is a collection of resources for web developers, carefully
          curated by web developers to help you learn and grow in your web dev
          journey.
        </p>
      </section>
      <section>
        <Tab category={categories} />
        <CardContainer category = {category}/>
      </section>
    </div>
  );
}





