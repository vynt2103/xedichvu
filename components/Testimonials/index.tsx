import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Huy",
    designation: "CEO, HNH E-commerce",
    content:
      "Our website was professionally designed, loads fast, easy to manage, and fully SEO optimized.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Ms. Trang",
    designation: "Founder, Mini Spa Danang",
    content:
      "After launching the new site, our customer base increased by over 40%. The support team was amazing.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Anh Khoa",
    designation: "Marketing Executive, NDN Agency",
    content:
      "Clean interface, easy to use. The content and product management system is very convenient.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="We’re proud to support hundreds of businesses across Danang and beyond."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
