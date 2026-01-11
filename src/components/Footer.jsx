import React from "react";

const Footer = () => {
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

  return (
    <div className="py-8 bg-dark-300">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {yearText} Suraj Kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
