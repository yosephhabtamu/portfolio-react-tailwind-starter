import React from "react";
import { useParams } from "react-router-dom";

const portfolios = [
  //this is an example portfolio item
  {
    id: 3,
    name: "calculator",
    description: "A personal portfolio showcasing my projects and skills. Then discuss the project technical aspects in detail. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    technicalSkills: [
      "React",
      "React Basics",
      "React events",
      "React Props",
      "React Hooks",
    ],
    link: "https://github.com/yosephhabtamu/calculator",
  },
];

export default function PortfolioDetail() {
  const { id } = useParams();
  const portfolio = portfolios.find(
    (portfolio) => portfolio.id === parseInt(id)
  );
  return (
    <>
      {portfolio ? (
        <div className="container w-3/4 mx-auto">
          <h1 className=" p-4 text-6xl mb-6 font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 text-transparent bg-clip-text">
            {portfolio.name}
          </h1>
          <p className="text-center mb-8">
            <a
              href={portfolio.link}
              className="text-slate-800 font-medium text-opacity-70 mb-1 first-line:tracking-widest hover:scale-105 hover:text-slate-900 hover:underline"
            >
              GitHub Link here.
            </a>
          </p>
          <p className="text-slate-800 font-medium text-justify text-opacity-70 mb-1 first-line:tracking-widest first-letter:font-bold first-letter:text-slate-700 first-letter:me-2 first-letter:float-start">
            {portfolio.description}
          </p>
          <h2 className="text-2xl my-4 font-bold text-slate-900">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside flex flex-row gap-4">
            {portfolio.technicalSkills.map((skill, index) => (
              <div class="max-w-min text-nowrap rounded-full bg-slate-200 py-0.5 px-2.5 border border-transparent text-sm text-slate-700 transition-all shadow-sm">
                {skill}
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className="container w-3/4 mx-auto">
          <h1 className=" p-4 text-6xl mb-6 font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 text-transparent bg-clip-text">
            Portfolio Not Found
          </h1>
          <p className="text-slate-800 font-medium text-opacity-70 mb-1 first-line:tracking-widest text-center">
            The portfolio you are looking for does not exist.
          </p>
        </div>
      )}
    </>
  );
}
