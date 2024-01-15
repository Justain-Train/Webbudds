import Button from "@/components/Buttons/Button";
import { getResources } from "@/utils/contentful";
import Image from "next/image";

const resourcePage = async ({ params }) => {
  const resources = params;
  const res = await getResources();
  let overview,
    title,
    description,
    thumbnail = "",
    source = "";

  res.map((res) => {
    if (res.slug === resources.slug) {
      overview = res.overview;
      title = res.title;
      description = res.description;
      thumbnail = res.thumbnail;
      source = res.source;
    }
  });

  return (
    <section className="flex flex-col items-center ">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden w-[85%]">
        <div className=" flex flex-col justify-center py-10 px-10 pl-9 rounded-3xl  bg-white bg-opacity-[5%]">
          <h1 className="text-white text-6xl font-semibold ">{title}</h1>
          <p className="text-white text-opacity-[60%] text-xl">{description}</p>
        </div>
        <div className=" bg-white bg-opacity-[5%] flex relative items-center justify-center  py-[30%] rounded-3xl ">
          <div className="absolute w-[45%] group-hover:w-[70%] rounded-xl overflow-hidden ">
            <Image
              className="w-full object-cover rounded-[8px]"
              loading="lazy"
              src={thumbnail.url}
              alt={title}
              width={200}
              height={200}
              quality={100}
            />
          </div>
        </div>
      </section>
      <section className ="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10 overflow-hidden max-w-[79%] ">
        <div className="col-span-2 ml-2 ">
          <div>
            <h1 className="text-white text-4xl font-semibold ">Overview</h1>
          </div>
          <div className="text-white text-opacity-[87%] mt-2 mb-8">
          {overview}
          </div>
          <div className="inline-flex ">
          <Button href={source} >View Source</Button>
          </div>
        </div>
        <div className="col-span-1  justify-end flex text-white text-opacity-[40%]">On this Page</div>
      </section>
    </section>
  );
}

export default resourcePage;
