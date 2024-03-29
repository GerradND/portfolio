import React from 'react';
import Image from 'next/image';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Main: React.FC = () => {
  return (
    <section
      id='home'
      className="flex flex-col lg:flex-row justify-between items-center min-h-screen w-full pt-[1.75rem] pb-[2.5rem] md:pt-[2.5rem] lg:py-[3rem] font-['Headland_One'] overflow-hidden">
      <div className='flex flex-col flex-1 w-full h-full justify-center'>
        <div className='max-h-full pb-10 lg:pb-16'>
          <h1 className='text-orange-cst pb-4 lg:pb-6 font-bold'>Hi,</h1>
          <h2>I'm Gerrad</h2>
          <h3 className='text-turqoise-cst pt-6 lg:pt-10'>
            A
            <Typewriter
              words={[' Frontend Developer', ' Backend Developer', ' Fullstack Developer']}
              loop={Infinity}
              typeSpeed={90}
              deleteSpeed={50}
            />
            <Cursor cursorColor='#1FC1A4' />
          </h3>
        </div>
        <div>
          <a href='CV Gerrad Natanael Daloma.pdf' download='Gerrad Natanael Daloma CV.pdf'>
            <button className='bg-orange-cst flex p-4 lg:p-6 rounded-lg w-fit cursor-pointer justify-center items-center'>
              <p className='text-black-1 pr-4 lg:text-xl font-medium'>Download CV </p>
              <Image src='/assets/icon/download.svg' alt='download icon' height={24} width={24} />
            </button>
          </a>
        </div>
      </div>
      <div className='lg:h-[85vh] lg:pl-5 flex-1 pt-10 lg:pt-0'>
        <img className='w-full object-contain' src='/assets/gerrad-pic.png' />
      </div>
    </section>
  );
};

export default Main;
