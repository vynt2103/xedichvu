import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | newdanang.vn – Freelance Web & App Development",
  description:
    "Get in touch with newdanang.vn for freelance website, app, and software development services. Fast quotes and expert consultation.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="We are a freelance development team specializing in websites, apps, and custom systems. Send us your request for a free consultation and fast quote."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
