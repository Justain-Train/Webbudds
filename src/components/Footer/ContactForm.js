export const ContactForm = () => {
  return (
  <>
    <div className="overflow-hidden" id="contact">
      <div>
        <h1 className="text-heading text-white leading-tight font-bold max-w-base xl:max-w-[70%] 2xl:max-w-[65%] pt-6 pb-2">
          Have a question or want to work together?
        </h1>
        <p className="text-semi max-w-sm md:text-base text-white font-normal text-opacity-[60%] pb-7">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>
      <form action="https://formspree.io/f/meqyeevv" method="POST">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 sm:pb-4">
          <input
            required
            name="name"
            htmlFor="name"
            type="text"
            aria-label="Name"
            placeholder="Name"
            autoComplete="off"
            id="name"
            className="bg-transparent pb-6 mb-8 text-tiny focus:outline-none focus:placeholder-transparent border-b border-gold"
          />
          <span>
            <input
              required
              name="email"
              htmlFor="email"
              type="email"
              aria-label="Email"
              placeholder="Email"
              autoComplete="off"
              id="email"
              className="pb-6 w-full text-tiny mb-8 focus:outline-none focus:placeholder-transparent border-b border-gold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
            />
          </span>
        </div>

        <div className="">
          <textarea
            required
            name="message"
            htmlFor="message"
            aria-label="Message"
            rows={3}
            placeholder="Your Message"
            id="message"
            className="w-full pb-9 resize-none text-tiny bg-transparent focus:outline-none focus:placeholder-transparent border-b border-gold"
          />
        </div>
        <div className="justify-start mt-9">
          <button
            aria-label="Submit"
            htmlFor="submit"
            disabled={false}
            type="submit"
            className="btn overflow-hidden relative px-6 py-2 text-base rounded-[20px]  text-black bg-gold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </>
  );
};

