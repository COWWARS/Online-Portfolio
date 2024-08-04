import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "I am Caleb Hiemstra, a recent Computer Systems Technician graduate from Conestoga College, with hands-on experience in IT support, troubleshooting, and network design. During my co-op positions at VLInteractive, I responded to IT tickets, set up and troubleshot computers, installed software, maintained hardware, and contributed to long-term IT projects. I have strong skills in C and Python development, Windows administration tools, and the Microsoft 365 Suite. I excel at solving IT problems, engaging with clients, and have a passion for all things computers, including building my first computer in 2017 and an interest in cybersecurity."}
      </p>
    </div>
  );
};
export default ServiceCard;
