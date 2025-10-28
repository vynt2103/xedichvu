import FadeIn from "@/components/Common/FadeIn";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { Mail, MessageCircle, ExternalLink, CheckCircle2, Users, Zap, ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NewDanang.vn | Tạo trang web cho nhà xe miền Trung",
  description:
    "Dịch vụ tạo website chuyên nghiệp cho nhà xe tại miền Trung. Giúp doanh nghiệp của bạn có mặt online, tăng doanh thu. Miễn phí setup, chỉ trả phí khi có doanh thu!",
};

export default function Home() {
  return (
    <>
      
      {/* ============================================
          SECTION 1: HERO SECTION - Split Layout
          ============================================ */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-dark pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                Tạo website cho<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  nhà xe miền Trung
                </span>
            </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <strong className="text-gray-900 dark:text-white">Miễn phí setup</strong> – Chỉ trả phí khi có doanh thu
              </p>
              
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                NewDanang.vn giúp các nhà xe miền Trung xây dựng website chuyên nghiệp, thu hút khách hàng và tăng doanh thu.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://zalo.me/0769222297"
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                  <MessageCircle size={22} />
                Chat Zalo ngay
              </a>
                <Link
                  href="/o/anh-khang-travel"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-blue-600 dark:border-blue-500 bg-transparent px-8 py-4 text-base font-bold text-blue-600 dark:text-blue-400 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <ExternalLink size={22} />
                  Xem Demo
                </Link>
              </div>

              {/* Trust indicators - inline */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Miễn phí</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Nhanh chóng</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Chuyên nghiệp</span>
                </div>
              </div>
            </div>

            {/* Right: Image/Illustration */}
            <div className="relative">
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-500/20 dark:border-blue-400/20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                {/* Placeholder for mockup image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Website Chuyên Nghiệp
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thiết kế hiện đại cho nhà xe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: TRUST INDICATORS - Stats Bar
          ============================================ */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  <Users className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Nhà xe đã tin tưởng</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                  <Zap className="text-emerald-600 dark:text-emerald-400" size={32} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  48h
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Thời gian triển khai</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                  <CheckCircle2 className="text-purple-600 dark:text-purple-400" size={32} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  0đ
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Miễn phí setup</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: DEMO SHOWCASE - Browser Mockup
          ============================================ */}
      <section className="py-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  Xem website mẫu thực tế
              </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                  Một trong những trang web mẫu mà chúng tôi đã thiết kế cho nhà xe
              </p>
            </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              {/* Browser chrome */}
              <div className="bg-gray-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-600 dark:text-gray-400">
                  xedichvu.newdanang.vn/o/dai-hiep-travel
                </div>
              </div>

              {/* Screenshot/Preview */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-6 text-white">Đại Hiệp Travel</h3>
                  <div className="grid grid-cols-2 gap-4 text-left max-w-md w-full">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span className="text-sm">Hero Section</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span className="text-sm">Bảng giá dịch vụ</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span className="text-sm">Danh sách xe</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span className="text-sm">Contact buttons</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA at bottom */}
              <div className="bg-white dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Trang web hoàn chỉnh, sẵn sàng sử dụng
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Bao gồm: Hero, Bảng giá, Danh sách xe, Contact
                    </p>
                  </div>
                  <Link
                    href="/o/anh-khang-travel"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    Xem demo trực tiếp
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: FEATURES GRID - Tại sao chọn NewDanang?
          ============================================ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Tại sao chọn NewDanang.vn?
            </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
              Chúng tôi hiểu nhu cầu của các nhà xe và tạo ra giải pháp phù hợp nhất
            </p>
          </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <TrendingUp size={28} />,
                title: "Website đẹp, chuyên nghiệp",
                desc: "Thiết kế hiện đại, tối ưu mobile, đầy đủ bảng giá và thông tin xe."
              },
              {
                icon: <CheckCircle2 size={28} />,
                title: "Miễn phí setup",
                desc: "Không tốn phí ban đầu. Chỉ thanh toán khi trang web có doanh thu."
              },
              {
                icon: <Zap size={28} />,
                title: "Nhanh chóng",
                desc: "Trong vòng 1-2 ngày bạn đã có thể online với domain riêng."
              },
              {
                icon: <Users size={28} />,
                title: "Dễ quản lý",
                desc: "Cập nhật giá cả, xe mới dễ dàng qua hệ thống quản lý đơn giản."
              },
              {
                icon: <Sparkles size={28} />,
                title: "SEO tốt",
                desc: "Tối ưu Google, khách hàng dễ tìm thấy khi search 'xe đi...'"
              },
              {
                icon: <Shield size={28} />,
                title: "Tập trung miền Trung",
                desc: "Hiểu rõ thị trường, phục vụ nhà xe từ Đà Nẵng đến Huế, Quảng Nam."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div 
                  className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center transition-all hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600"
                >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: HOW IT WORKS - Process
          ============================================ */}
      <section className="py-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Quy trình làm việc đơn giản
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Chỉ 3 bước để có website chuyên nghiệp cho nhà xe của bạn
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
              {[
                {
                  step: "01",
                  title: "Liên hệ tư vấn",
                  desc: "Chat Zalo hoặc gọi điện để được tư vấn miễn phí về giải pháp phù hợp"
                },
                {
                  step: "02",
                  title: "Thiết kế & duyệt",
                  desc: "Chúng tôi thiết kế theo yêu cầu, bạn xem và góp ý cho đến khi hài lòng"
                },
                {
                  step: "03",
                  title: "Triển khai online",
                  desc: "Website lên mạng trong 48h, bạn bắt đầu nhận khách hàng ngay"
                }
              ].map((item, i) => (
                <div key={i} className="relative text-center">
                  {/* Arrow between steps (desktop only) */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full">
                      <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto" />
                    </div>
                  )}
                  
                  <div className="relative inline-block">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">{item.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: FINAL CTA - Conversion
          ============================================ */}
      <FadeIn>
        <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Sẵn sàng có website chuyên nghiệp?
              </h2>
              <p className="mb-10 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Liên hệ ngay để được tư vấn miễn phí và nhận ưu đãi đặc biệt
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-10">
              <a
                href="https://zalo.me/0769222297"
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-600 hover:bg-blue-700 px-10 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all"
              >
                  <MessageCircle size={22} />
                  Chat Zalo ngay
              </a>
              <a
                href="mailto:info@newdanang.vn"
                  className="inline-flex items-center gap-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-blue-600 dark:hover:border-blue-500 px-10 py-4 text-base font-bold text-gray-900 dark:text-white transition-all"
              >
                  <Mail size={22} />
                Gửi Email
              </a>
            </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 dark:text-gray-400 text-base">
                <span className="flex items-center gap-2">
                  📞 <strong className="font-semibold text-gray-900 dark:text-white">0769 222 297</strong>
                </span>
                <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
                <span className="flex items-center gap-2">
                  📧 <strong className="font-semibold text-gray-900 dark:text-white">info@newdanang.vn</strong>
                </span>
              </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <Contact />
    </>
  );
}
