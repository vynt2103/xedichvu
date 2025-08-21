"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <>
      <section id="about" className="lg:pt-22 pt-10 md:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-16 lg:pb-20">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2 mb-6">
                <SectionTitle
                  title="We Are newdanang.vn"
                  paragraph="A freelance web development team passionate about building modern, scalable, and beautiful web products. We collaborate with startups, agencies, and businesses to deliver high-quality digital solutions."
                  mb="44px"
                />
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  With expertise in Next.js, Tailwind CSS, and React, we
                  specialize in creating fast, responsive, and SEO-optimized
                  websites — from landing pages to full SaaS platforms.
                </p>
                <p className="mb-8 text-base leading-relaxed text-body-color">
                  Let’s bring your vision to life. We work with transparency,
                  agility, and a strong focus on quality and deadlines.
                </p>
                <a
                  href="#contact"
                  className="inline-block rounded-md bg-primary px-6 py-3 text-white transition hover:bg-opacity-90"
                >
                  Let’s Build Your Product
                </a>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/about/about-image.svg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="/images/about/about-image-dark.svg"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
