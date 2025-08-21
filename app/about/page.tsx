import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | newdanang.vn – Freelance Web Development Team",
  description:
    "We are a freelance developer team at newdanang.vn, specializing in modern web solutions using React, Next.js, and Tailwind CSS.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We’re newdanang.vn – a dedicated team of freelance developers helping businesses build fast, modern, and scalable web applications."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
