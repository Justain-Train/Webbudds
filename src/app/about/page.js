const About = () => {
  return (
    <section className="flex flex-col items-center ">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden w-[85%]">
        <div>
          <h1 className ="text-responsive font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white from-20% group relative">
              Webbudds.
              <span className="absolute -bottom-1 left-0 w-0 border-b-2 group-hover:w-full ease-in-out duration-300" />
            </span>
          </h1>
        </div>
        <div className = "text-white text-opacity-[60%] ">
          <p className=" text-3xl font-medium">
            The internet is a vast place, and it's hard to find resources that
            are helpful and reliable for web development. It's even harder to find
            resources that are free and open-source. I've created Webbudds to solve
            that problem.
            <br/>
            <br/>
             Why spend hours searching for resources when you can
            find them all in one place? From tools to technologies, Webbudds is a
            place where you can find filtered resources handpicked with love by me and lovely contributers 
            to help you learn and grow in your
            web development journey. 
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
