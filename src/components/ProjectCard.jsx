import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  code,
  demo,
  demo2,
  demoCred,
}) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover bg-dark-400"
      />
      <div className="p-6">
        <h3 className="text-xL font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>

          {demo2 && (
            <a
              href={demo2}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Demo2
            </a>
          )}

          {code && (
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          )}
        </div>
        {demoCred && (
          <div className="mt-4 p-3 bg-dark-400 rounded-lg text-sm">
            <p className="font-semibold text-purple mb-2">Demo Credentials</p>

            <div className="space-y-1 text-gray-300">
              <p>
                <span className="font-medium">Owner:</span> {demoCred.owner}
              </p>

              <p>
                <span className="font-medium">Accountant:</span>{" "}
                {demoCred.accountant}
              </p>

              <p>
                <span className="font-medium">Password:</span>{" "}
                {demoCred.password}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
