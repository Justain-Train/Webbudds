


export const ContactForm = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-heading text-white text-opacity-[60%] font-semibold max-w-[80%] pt-6 ">Contact</h1>
      </div>
      <form>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            id="email"
            className="bg-transparent pb-2 mb-8 text-tiny focus:outline-none focus:placeholder-transparent border-b border-gold"
          />
          <span>
            <input
              type="number"
              placeholder="Phone"
              autoComplete="off"
              id="phone"
              className=" pb-2 w-full text-tiny mb-8 focus:outline-none focus:placeholder-transparent border-b border-gold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
            />
          </span>
        </div>

        <div className="">
          <textarea
            rows={3}
            placeholder="Your Message"
            id="message"
            className="w-full resize-none text-tiny bg-transparent focus:outline-none focus:placeholder-transparent border-b border-gold"
          />
        </div>
        <div className="flex justify-start mt-6">
          <button
            type="submit"
            className="px-6 py-2 text-[20px] rounded-[10px] font-semibold text-black bg-gold hover:bg-white transition-color ease-in duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};