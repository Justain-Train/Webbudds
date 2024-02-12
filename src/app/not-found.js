import Link from 'next/link';
import { WebbuddLogo } from '@/components/Logo/WebBuddLogo';
import {GoArrowLeft} from 'react-icons/go'
const NotFound = () => {
  return (
  <>
    <main className="flex justify-center">
      <WebbuddLogo className="text-[100px] md:text-[250px] mr-10 rounded-xl"/>
      <div className="text-base md:text-4xl xl:text-5xl max-w-[45%] text-white font-bold">
        Oopsies! That page cannot be found.
      <div>
      <Link href="/" className="ml-8  text-semi md:text-xl xl:text-2xl text-opacity-[60%] hover:text-opacity-100 ease-in-out duration-300 text-white group">
        <GoArrowLeft className="inline-block mr-1 group-hover:text-2xl ease-in-out duration-300" />
        <span>Back</span>
      </Link>
      </div>
      </div>
    </main>
  </>
  );
};

export default NotFound;
