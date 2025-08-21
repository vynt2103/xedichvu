"use client";

import SectionTitle from "../Common/SectionTitle";
import {
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaRocket,
  FaUsers,
  FaMobileAlt,
  FaCubes,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-primary dark:text-white" />,
    title: "Web Development",
    description:
      "Modern front-end and back-end using Next.js, React, Tailwind CSS.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-primary dark:text-white" />,
    title: "Landing Pages",
    description:
      "High-converting, SEO-ready, fast-loading landing pages tailored for your product.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-primary dark:text-white" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using Flutter or React Native, built fast and scalable.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-primary dark:text-white" />,
    title: "UI/UX Design",
    description:
      "Clean, responsive and intuitive user interfaces designed in Figma.",
  },
  {
    icon: <FaRocket className="text-4xl text-primary dark:text-white" />,
    title: "Performance & SEO",
    description:
      "Optimization for speed, Core Web Vitals, accessibility, and search engine ranking.",
  },
  {
    icon: <FaCubes className="text-4xl text-primary dark:text-white" />,
    title: "Low-Code Solutions",
    description:
      "Rapid prototyping and scalable apps built with Bubble and other no-code tools.",
  },
  {
    icon: <FaUsers className="text-4xl text-primary dark:text-white" />,
    title: "Freelance Collaboration",
    description:
      "Flexible, transparent teamwork focused on results and meeting your deadlines.",
  },
];

const AboutSectionTwo = () => {
  return (
    <section
      className="bg-gray-100 py-16 dark:bg-[#111827] md:py-20 lg:py-28"
      id="services"
    >
      <div className="container">
        <SectionTitle
          title="What We Offer"
          paragraph="We deliver complete solutions to help you launch, grow, or scale your digital product."
          center
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="mb-2 text-xl font-bold text-black dark:text-white">
                {service.title}
              </h4>
              <p className="text-sm text-body-color dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
