import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { Mail, MessageCircle, ExternalLink, CheckCircle2, Users, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NewDanang.vn | Tạo trang web cho nhà xe miền Trung",
  description:
    "Dịch vụ tạo website chuyên nghiệp cho nhà xe tại miền Trung. Giúp doanh nghiệp của bạn có mặt online, tăng doanh thu. Liên hệ ngay!",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      
      {/* Hero Section - Focus on Bus Operators */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 dark:from-black dark:via-gray-900 dark:to-blue-900 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white dark:text-white sm:text-5xl md:text-6xl">
              Tạo trang web cho nhà xe của bạn
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/95 dark:text-white/90 md:text-xl lg:text-2xl">
              NewDanang.vn giúp các nhà xe miền Trung xây dựng website chuyên nghiệp, 
              thu hút khách hàng và tăng doanh thu. 
              <span className="block mt-2 font-semibold">
                Hoàn toàn miễn phí - Chỉ trả phí khi trang web của bạn có doanh thu!
              </span>
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://zalo.me/0769222297"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <MessageCircle size={20} />
                Chat Zalo ngay
              </a>
              <a
                href="mailto:info@newdanang.vn"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20"
              >
                <Mail size={20} />
                Gửi Email
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Hotline: <span className="font-semibold">0769 222 297</span>
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-black dark:to-blue-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
                Xem demo thực tế
              </h2>
              <p className="text-body-color dark:text-body-color-dark text-lg">
                Trang web mẫu của một nhà xe đã được chúng tôi thiết kế
              </p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">Trần Thành Travel</h3>
                    <p className="text-lg opacity-90">Trang web mẫu</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-gray-900">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Trang web hoàn chỉnh, sẵn sàng đưa vào sử dụng
                    </h3>
                    <p className="text-gray-600 dark:text-body-color-dark">
                      Bao gồm: Hero section, Bảng giá dịch vụ, Danh sách xe, Contact buttons
                    </p>
                  </div>
                  <Link
                    href="/o/anh-khang-travel"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    Xem ngay
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl border border-gray-200 dark:border-stroke-dark bg-gray-50 dark:bg-[#2C303B] hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <Users className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</h3>
              <p className="text-gray-600 dark:text-body-color-dark font-medium">Nhà xe đã tin tưởng</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-200 dark:border-stroke-dark bg-gray-50 dark:bg-[#2C303B] hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <Zap className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">48h</h3>
              <p className="text-gray-600 dark:text-body-color-dark font-medium">Thời gian triển khai</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-200 dark:border-stroke-dark bg-gray-50 dark:bg-[#2C303B] hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <CheckCircle2 className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">0đ</h3>
              <p className="text-gray-600 dark:text-body-color-dark font-medium">Miễn phí setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Tại sao chọn NewDanang.vn?
            </h2>
            <p className="text-body-color dark:text-body-color-dark">
              Chúng tôi hiểu nhu cầu của các nhà xe và tạo ra giải pháp phù hợp nhất
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🚗",
                title: "Trang web đẹp, chuyên nghiệp",
                desc: "Thiết kế hiện đại, tối ưu cho mobile, có đầy đủ bảng giá, danh sách xe, thông tin liên hệ."
              },
              {
                icon: "💰",
                title: "Miễn phí setup",
                desc: "Không tốn phí ban đầu. Chỉ thanh toán khi trang web của bạn bắt đầu có doanh thu."
              },
              {
                icon: "⚡",
                title: "Nhanh chóng",
                desc: "Trong vòng 1-2 ngày là có thể có mặt trên Internet với domain riêng của bạn."
              },
              {
                icon: "📱",
                title: "Dễ quản lý",
                desc: "Cập nhật thông tin, giá cả, xe mới dễ dàng qua hệ thống quản lý đơn giản."
              },
              {
                icon: "🌐",
                title: "SEO tốt",
                desc: "Tối ưu tìm kiếm Google, khách hàng dễ dàng tìm thấy bạn khi tìm kiếm 'xe đi...'"
              },
              {
                icon: "🎯",
                title: "Tập trung miền Trung",
                desc: "Hiểu rõ thị trường, phục vụ tất cả các nhà xe từ Đà Nẵng đến Huế, Quảng Nam."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition-all hover:shadow-xl dark:border-stroke-dark dark:bg-[#2C303B]">
                <div className="mb-4 text-5xl">{item.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="mb-8 text-lg text-white/95">
              Liên hệ ngay để được tư vấn miễn phí và nhận ưu đãi đặc biệt
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://zalo.me/0769222297"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <MessageCircle size={20} />
                Chat Zalo
              </a>
              <a
                href="mailto:info@newdanang.vn"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20"
              >
                <Mail size={20} />
                Gửi Email
              </a>
            </div>
            <p className="mt-6 text-white/90">
              📞 Hotline: <span className="font-bold text-white">0769 222 297</span> | 
              📧 Email: <span className="font-bold text-white">info@newdanang.vn</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
