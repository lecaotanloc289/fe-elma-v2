import React from 'react';

const Page400 = () => {
  const handleClickChangeMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else document.documentElement.classList.add('dark');
  };
  return (
    <div className="w-4/5 mx-auto flex flex-col items-center justify-center ">
      <div className="grid grid-cols-5 gap-2 my-10 mx-2">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>
      {/* Responsive */}
      <div className="xl:bg-amber-200 md:block hidden">
        <p className="text-blue">I appear on screen wider than 768px</p>
      </div>

      {/* Dark mode, White mode */}
      <div className="bg-white text-red-600 dark:text-yellow-500 dark:bg-black">
        Dark mode
      </div>

      <div className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black">
        <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
          Writes Upside-Down
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">
          The Zero gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space
        </p>
        <button
          className="px-4 py-2 text-sm font-medium mt-8 text-blue-900"
          onClick={handleClickChangeMode}
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Reusable code */}
      {/* In global or index.css, let add theme a color like --color-blue: #f78987, 
      using this color inline of code */}
      <p className="p-[16px] text-[30px] text-[#973F29] bg-zinc-500">
        Chestnut Color + More styles
      </p>

      {/* Tips and Trick */}
      {/* Fluid Texts */}
      <p className="sm:text-7xl text-5xl">Something nice</p>
      <p className="text-[min(10vw,70px)]">Something Fluid</p>

      {/* File */}
      <label htmlFor="" className="my-4 block">
        <input
          type="file"
          name=""
          id=""
          className="block w-full text-sm text-slate-500 file:mr-4 file rounded-full file:border-0
           file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:bg-violet-100"
        />
      </label>
      <div className="selection:bg-green-500 selection:text-white">
        <p>
          So i started to walk into the water. I won't lie to you boys, I was
          terrified. But i pressed on, and as I madde my way past the breakers a
          strange
        </p>
      </div>
    </div>
  );
};

export default Page400;
