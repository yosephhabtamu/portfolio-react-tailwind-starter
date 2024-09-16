import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


export default function Contact(){
    return (
      <div className="max-w-screen-lg mx-auto">
        <h2 className="my-8 text-center text-4xl font-bold text-slate-900">
          Contact
        </h2>
        <div className="container mx-auto w-1/2">
          <div class="relative w-3/4 mx-auto  ">
            <input
              type="text"
              id="floating_outlined"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-slate-900 bg-white rounded-lg border border-slate-600 appearance-none focus:outline-none focus:ring-0 focus:border-slate-700 "
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Name
            </label>
          </div>
          <div class="relative w-3/4 mx-auto mt-4 ">
            <textarea
              type="textarea"
              id="floating_outlined"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-slate-900 bg-white rounded-lg border border-slate-600 appearance-none focus:outline-none focus:ring-0 focus:border-slate-700 "
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Message
            </label>
            <button className="block px-8 max-w-min mx-auto mt-4 bg-slate-600 text-white rounded-lg p-2 float-right">
              Send
            </button>
          </div>
        </div>
        <hr class="h-px my-16  border-0 dark:bg-slate-700"></hr>
        <h1 className="text-xl font-bold"> Socials </h1>
        <div className="flex flex-row gap-4 my-8 items-center justify-evenly">
          <FontAwesomeIcon size="2x" icon="fa-brands fa-facebook" />
            <FontAwesomeIcon size="2x" icon="fa-brands fa-twitter" />
            <FontAwesomeIcon size="2x" icon="fa-brands fa-instagram" />
            <FontAwesomeIcon size="2x" icon="fa-brands fa-linkedin" />
            <FontAwesomeIcon size="2x" icon="fa-brands fa-github" />
            <FontAwesomeIcon size="2x" icon="fa-brands fa-youtube" />
        </div>
      </div>
    );
}