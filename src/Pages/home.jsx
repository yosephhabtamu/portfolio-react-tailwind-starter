import React from "react";

export default function Home() {
  return (
    <>
      <div className=" container mx-auto p-4  flex flex-row items-center justify-around gap-x-16">
        <div className="flex flex-col flex-1 gap-y-3">
          <div className="bg-slate-100 shadow-2xl">
            <img
              className=" mx-auto border rounded-lg translate-y-7 translate-x-4 hover:scale-105 shadow-slate-400 max-w-5/6 shadow-2xl"
              src="https://imgs.search.brave.com/Vx19wem0W2udRhcbfYjh6x-WF5o_D4EoBaiXW79M0qY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjI1Mjk1OTkxMDIt/MTkzYzBkNzZiNWI2/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1ueDhZbXho/WTJzbE1qQnRZVzU4/Wlc1OE1IeDhNSHg4/ZkRBPQ"
              alt="placeholder"
            />
          </div>
          <figure class="max-w-96 mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mt-4 text-slate-400 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-sm italic font-sm text-slate-900 ">
                "Forever at war with bugs and the forces of darkness."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-2 space-x-1">
              <div className="flex items-center divide-x-2 divide-slate-600">
                <cite className="pe-3 font-sm text-slate-900 ">
                  Jeremy Clarkson
                </cite>
                <cite className="ps-3 text-sm text-gray-500 ">
                  Software engineer.
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className=" flex-1">
          <h1 className=" p-4 text-6xl mb-6 font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 text-transparent bg-clip-text">
            Welcome !
          </h1>
          <p className="text-slate-700 text-justify text-opacity-70 mb-1 first-line:tracking-widest first-letter:text-8xl first-letter:font-bold first-letter:text-slate-700 first-letter:me-2 first-letter:float-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            consectetur nunc. Nulla facilisi. Nullam nec elit ut quam
            sollicitudin tincidunt. In hac habitasse platea dictumst. Integer
            tincidunt, libero et volutpat fermentum, nunc purus tincidunt nunc,
            id aliquam risus justo vel est. Donec nec nunc in nisi ultrices
            sollicitudin. Donec ut ante nec elit ultricies ultricies. Nulla
            facilisi. Nullam nec elit ut quam sollicitudin tincidunt. In hac
            habitasse platea dictumst. Integer tincidunt, libero et volutpat
            fermentum, nunc purus tincidunt nunc, id aliquam risus justo vel
            est. Donec nec nunc in nisi ultrices sollicitudin. Donec ut ante nec
            elit ultricies ultricies.
          </p>
        </div>
      </div>
    </>
  );
}
