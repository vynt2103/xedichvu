import NewsLatterBox from "./NewsLatterBox";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        
        {/* Quick Contact Methods - Top Section */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Zalo Card */}
          <a
            href="https://zalo.me/0769222297"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-dark p-8 text-center transition-all hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl hover:scale-105"
          >
            <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
              <MessageCircle size={36} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
              Chat Zalo
            </h3>
            <p className="text-body-color dark:text-body-color-dark mb-3">
              Nhắn tin trực tiếp qua Zalo
            </p>
            <span className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              0769 222 297
            </span>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@newdanang.vn"
            className="group rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-dark p-8 text-center transition-all hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:scale-105"
          >
            <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
              <Mail size={36} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
              Email
            </h3>
            <p className="text-body-color dark:text-body-color-dark mb-3">
              Gửi email cho chúng tôi
            </p>
            <span className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-400 break-all">
              info@newdanang.vn
            </span>
          </a>

          {/* Phone Card */}
          <a
            href="tel:0769222297"
            className="group rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-dark p-8 text-center transition-all hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-xl hover:scale-105"
          >
            <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
              <Phone size={36} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
              Gọi điện
            </h3>
            <p className="text-body-color dark:text-body-color-dark mb-3">
              Liên hệ trực tiếp qua hotline
            </p>
            <span className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-4 py-2 text-sm font-semibold text-purple-700 dark:text-purple-400">
              0769 222 297
            </span>
          </a>
        </div>

        {/* Main Content: Form + Sidebar */}
        <div className="-mx-4 flex flex-wrap">
          
          {/* Left: Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-2xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <p className="mb-12 text-base font-medium text-body-color dark:text-body-color-dark">
                Bạn cần tư vấn về dịch vụ tạo website? Điền form bên dưới hoặc liên hệ qua{" "}
                <strong className="text-blue-600 dark:text-blue-400">Zalo: 0769 222 297</strong> |{" "}
                <strong className="text-blue-600 dark:text-blue-400">Email: info@newdanang.vn</strong>
              </p>
              
              <form action="mailto:info@newdanang.vn" method="POST" encType="text/plain">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tên của bạn *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nhập tên của bạn"
                        required
                        className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-blue-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email của bạn *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Nhập email của bạn"
                        required
                        className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-blue-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Nhập số điện thoại của bạn (tùy chọn)"
                        className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-blue-500 dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tin nhắn của bạn *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        placeholder="Ví dụ: Tôi có nhà xe tại Đà Nẵng, muốn tạo website để khách hàng đặt xe online..."
                        required
                        className="w-full resize-none rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-blue-500 dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-9 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl dark:shadow-submit-dark"
                    >
                      <Send size={18} />
                      Gửi tin nhắn
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Contact Info Sidebar */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white">
              Câu hỏi thường gặp
            </h2>
            
            <div className="space-y-4">
              <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-dark p-6 transition-all hover:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-dark dark:text-white">
                  Mất bao lâu để có website?
                  <span className="ml-4 text-gray-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-body-color dark:text-body-color-dark leading-relaxed">
                  Thường chỉ <strong>1-2 ngày</strong> sau khi hoàn tất thông tin và nội dung. 
                  Chúng tôi sẽ thiết kế nhanh chóng để bạn có thể online sớm nhất.
                </p>
              </details>

              <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-dark p-6 transition-all hover:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-dark dark:text-white">
                  Chi phí ra sao?
                  <span className="ml-4 text-gray-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-body-color dark:text-body-color-dark leading-relaxed">
                  <strong>Miễn phí setup</strong>, không tốn phí ban đầu. Bạn chỉ thanh toán khi 
                  trang web có doanh thu (hoa hồng nhỏ) hoặc lựa chọn gói phí cố định hàng tháng từ 500k.
                </p>
              </details>

              <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-dark p-6 transition-all hover:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-dark dark:text-white">
                  Tôi có thể tự cập nhật nội dung không?
                  <span className="ml-4 text-gray-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-body-color dark:text-body-color-dark leading-relaxed">
                  Có! Chúng tôi cung cấp hệ thống quản lý đơn giản để bạn có thể tự thay đổi giá cả, 
                  thêm tuyến mới, cập nhật hình ảnh xe dễ dàng mà không cần biết lập trình.
                </p>
              </details>

              <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-dark p-6 transition-all hover:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-dark dark:text-white">
                  Website có tối ưu SEO không?
                  <span className="ml-4 text-gray-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-body-color dark:text-body-color-dark leading-relaxed">
                  Có! Tất cả website đều được tối ưu SEO cơ bản để khách hàng dễ tìm thấy khi 
                  search "xe đi Đà Nẵng", "xe đưa đón sân bay Huế" v.v. trên Google.
                </p>
              </details>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
