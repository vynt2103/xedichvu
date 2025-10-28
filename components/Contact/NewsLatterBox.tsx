import { MapPin, Clock, Phone, Mail } from "lucide-react";

const NewsLatterBox = () => {
  return (
    <div
      className="relative z-10 rounded-2xl bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">
        Thông tin liên hệ
      </h3>
      
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <MapPin size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-dark dark:text-white mb-1">
              Địa chỉ
            </h4>
            <p className="text-sm text-body-color dark:text-body-color-dark leading-relaxed">
              Đà Nẵng, Việt Nam
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
            <Phone size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-dark dark:text-white mb-1">
              Hotline
            </h4>
            <a
              href="tel:0769222297"
              className="text-sm text-body-color dark:text-body-color-dark hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              0769 222 297
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            <Mail size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-dark dark:text-white mb-1">
              Email
            </h4>
          <a
            href="mailto:info@newdanang.vn"
              className="text-sm text-body-color dark:text-body-color-dark hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
          >
            info@newdanang.vn
          </a>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
            <Clock size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-dark dark:text-white mb-1">
              Giờ làm việc
            </h4>
            <p className="text-sm text-body-color dark:text-body-color-dark leading-relaxed">
              8:00 - 22:00<br />
              Hàng ngày (bao gồm cuối tuần)
            </p>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="mt-8">
        <h4 className="text-base font-semibold text-dark dark:text-white mb-4">
          Vị trí
        </h4>
        <div className="overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.52922943447!2d107.91260697871265!3d16.072092183764023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1698765432100!5m2!1svi!2s"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>
      </div>

      {/* Background Shapes */}
      <div>
        <span className="absolute -right-7 -bottom-7 z-[-1]">
          <svg
            width={77}
            height={77}
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.66343" cy="74.9984" r="1.66343" transform="rotate(-90 1.66343 74.9984)" fill="#3056D3" />
            <circle cx="1.66343" cy="30.9998" r="1.66343" transform="rotate(-90 1.66343 30.9998)" fill="#3056D3" />
            <circle cx="16.3016" cy="74.9984" r="1.66343" transform="rotate(-90 16.3016 74.9984)" fill="#3056D3" />
            <circle cx="16.3016" cy="30.9998" r="1.66343" transform="rotate(-90 16.3016 30.9998)" fill="#3056D3" />
            <circle cx="30.9398" cy="74.9984" r="1.66343" transform="rotate(-90 30.9398 74.9984)" fill="#3056D3" />
            <circle cx="30.9398" cy="30.9998" r="1.66343" transform="rotate(-90 30.9398 30.9998)" fill="#3056D3" />
            <circle cx="45.578" cy="74.9984" r="1.66343" transform="rotate(-90 45.578 74.9984)" fill="#3056D3" />
            <circle cx="45.578" cy="30.9998" r="1.66343" transform="rotate(-90 45.578 30.9998)" fill="#3056D3" />
            <circle cx="60.2162" cy="74.9984" r="1.66343" transform="rotate(-90 60.2162 74.9984)" fill="#3056D3" />
            <circle cx="74.6634" cy="74.9984" r="1.66343" transform="rotate(-90 74.6634 74.9984)" fill="#3056D3" />
            <circle cx="60.2162" cy="30.9998" r="1.66343" transform="rotate(-90 60.2162 30.9998)" fill="#3056D3" />
            <circle cx="74.6634" cy="30.9998" r="1.66343" transform="rotate(-90 74.6634 30.9998)" fill="#3056D3" />
            <circle cx="1.66343" cy="59.6641" r="1.66343" transform="rotate(-90 1.66343 59.6641)" fill="#3056D3" />
            <circle cx="1.66343" cy="16.3003" r="1.66343" transform="rotate(-90 1.66343 16.3003)" fill="#3056D3" />
            <circle cx="16.3016" cy="59.6641" r="1.66343" transform="rotate(-90 16.3016 59.6641)" fill="#3056D3" />
            <circle cx="16.3016" cy="16.3003" r="1.66343" transform="rotate(-90 16.3016 16.3003)" fill="#3056D3" />
            <circle cx="30.9398" cy="59.6641" r="1.66343" transform="rotate(-90 30.9398 59.6641)" fill="#3056D3" />
            <circle cx="30.9398" cy="16.3003" r="1.66343" transform="rotate(-90 30.9398 16.3003)" fill="#3056D3" />
            <circle cx="45.578" cy="59.6641" r="1.66343" transform="rotate(-90 45.578 59.6641)" fill="#3056D3" />
            <circle cx="45.578" cy="16.3003" r="1.66343" transform="rotate(-90 45.578 16.3003)" fill="#3056D3" />
            <circle cx="60.2162" cy="59.6641" r="1.66343" transform="rotate(-90 60.2162 59.6641)" fill="#3056D3" />
            <circle cx="74.6634" cy="59.6641" r="1.66343" transform="rotate(-90 74.6634 59.6641)" fill="#3056D3" />
            <circle cx="60.2162" cy="16.3003" r="1.66343" transform="rotate(-90 60.2162 16.3003)" fill="#3056D3" />
            <circle cx="74.6634" cy="16.3003" r="1.66343" transform="rotate(-90 74.6634 16.3003)" fill="#3056D3" />
            <circle cx="1.66343" cy="45.0261" r="1.66343" transform="rotate(-90 1.66343 45.0261)" fill="#3056D3" />
            <circle cx="1.66343" cy="1.66343" r="1.66343" transform="rotate(-90 1.66343 1.66343)" fill="#3056D3" />
            <circle cx="16.3016" cy="45.0261" r="1.66343" transform="rotate(-90 16.3016 45.0261)" fill="#3056D3" />
            <circle cx="16.3016" cy="1.66343" r="1.66343" transform="rotate(-90 16.3016 1.66343)" fill="#3056D3" />
            <circle cx="30.9398" cy="45.0261" r="1.66343" transform="rotate(-90 30.9398 45.0261)" fill="#3056D3" />
            <circle cx="30.9398" cy="1.66343" r="1.66343" transform="rotate(-90 30.9398 1.66343)" fill="#3056D3" />
            <circle cx="45.578" cy="45.0261" r="1.66343" transform="rotate(-90 45.578 45.0261)" fill="#3056D3" />
            <circle cx="45.578" cy="1.66343" r="1.66343" transform="rotate(-90 45.578 1.66343)" fill="#3056D3" />
            <circle cx="60.2162" cy="45.0261" r="1.66343" transform="rotate(-90 60.2162 45.0261)" fill="#3056D3" />
            <circle cx="74.6634" cy="45.0261" r="1.66343" transform="rotate(-90 74.6634 45.0261)" fill="#3056D3" />
            <circle cx="60.2162" cy="1.66343" r="1.66343" transform="rotate(-90 60.2162 1.66343)" fill="#3056D3" />
            <circle cx="74.6634" cy="1.66343" r="1.66343" transform="rotate(-90 74.6634 1.66343)" fill="#3056D3" />
          </svg>
        </span>
        <span className="absolute -right-10 top-10 z-[-1] opacity-20">
          <svg
            width={75}
            height={75}
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
