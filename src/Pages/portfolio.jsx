import React from "react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    name: "ToDo App",
    description:
      "A task management application to help users organize their tasks efficiently.",
    imgSrc:
      "https://imgs.search.brave.com/OVtEyAFpr0bw3e0YbWEu1uOqtnTClYJyRH5-DNSvNLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZlL01pY3Jvc29m/dF9Uby1Eb19pY29u/LnN2Zw",
  },
  {
    id: 2,
    name: "Post Manager",
    description:
      "An application for managing and organizing posts with a user-friendly interface.",
    imgSrc:
      "https://imgs.search.brave.com/snDl_u2cb5O9IBzWe6ykf_oHOh0BmRUvmZGFKIUtbKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmVlY2VwdG9yLmNv/bS9hc3NldHMvaW1h/Z2VzL2NvbW11bml0/eS1tb2Nrcy1zZXJ2/aWNlcy9qc29uLWZp/bGUucG5n",
  },
  {
    id: 3,
    name: "Calculator",
    description:
      "A simple calculator app for performing basic arithmetic operations.",
    imgSrc:
      "https://imgs.search.brave.com/qZjeJO5vd7HPjRCrATjXjlmbPHZKUiK1BFddghiF6FE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQ1L0FyaXRobWV0/aWNfb3BlcmF0aW9u/cy5zdmc",
  },
  {
    id: 4,
    name: "Portfolio Project",
    description: "A personal portfolio showcasing my projects and skills.",
    imgSrc:
      "https://imgs.search.brave.com/GnJPbbKlIUiTg_0REMLn8pBEXaMcbTscjTXSIkiq-2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzAxLzE3LzE4/LzM2MF9GXzYwMTE3/MTgyN19Hd2JESEV1/aGlzYkdGWFJmSXBY/Rmh0Zjd3QXZzYkx1/dC5qcGc",
  },
];

export default function Portfolio() {
  return (
    <>
      <h2 className="my-8 text-center text-4xl font-bold text-slate-900">
        My Portfolio
      </h2>
      <div className=" max-w-min rounded-md border-2  mx-auto shadow-2xl p-4">
        <ul className=" mx-auto divide-y divide-slate-600 ">
          {portfolioItems.map((item, index) => (
            <li
              key={index}
              className={`hover:bg-slate-300 py-2 ${
                index === portfolioItems.length - 1 ? "pb-0" : "pb-4"
              }`}
            >
              <Link to={`detail/${item.id}`}>
                <div className="flex items-center space-x-4 ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16 rounded-full bg-slate-300 p-2"
                      src={item.imgSrc}
                      alt={`${item.name} image`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-md text-slate-900 font-bold truncate ">
                      {item.name}
                    </p>
                    <p className="text-sm text-slate-700 truncate">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
