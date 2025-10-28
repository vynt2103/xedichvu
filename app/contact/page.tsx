import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ | NewDanang.vn – Tạo website cho nhà xe",
  description:
    "Liên hệ với NewDanang.vn để được tư vấn miễn phí về dịch vụ tạo website chuyên nghiệp cho nhà xe miền Trung. Báo giá nhanh, hỗ trợ tận tâm.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Liên hệ với chúng tôi"
        description="Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn xây dựng website chuyên nghiệp cho nhà xe"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
