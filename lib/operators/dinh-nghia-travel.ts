import { Operator } from '../types';

export const dinhNghiaTravel: Operator = {
  slug: 'dinh-nghia-travel',
  name: 'Đình Nghĩa Travel',
  verified: true,
  active: true,
  shortDesc: 'Chuyên xe du lịch & dịch vụ cưới hỏi miền Trung. Uy tín, đúng giờ, giá tốt nhất thị trường.',
  address: 'Hải Châu, Đà Nẵng',
  regions: ['Đà Nẵng', 'Quảng Nam', 'Tam Kỳ', 'Huế', 'Hội An'],
  serviceCategories: ['bao-xe', 'su-kien', 'san-bay'],
  showVehicleFilter: false,
  contacts: {
    phone: '0769222297',
    zalo: 'https://zalo.me/0769222297',
    facebook: 'https://facebook.com/dinhnghiatravel',
    whatsapp: '+840769222297',
    instagram: 'https://instagram.com/dinhnghiatravel',
    email: 'contact@dinhnghia.vn'
  },
  logo: '/anhkhang/avata.png',
  vehicles: [
    {
      id: 'dn-v1',
      name: 'Toyota Fortuner 2023',
      seat: 7,
      vclass: 'cao-cap',
      verified: true,
      images: ['/anhkhang/xe/toyota-fortuner-2023.jpg', '/anhkhang/xe/toyota-fortuner-2023-2.jpg'],
      desc: 'Xe 7 chỗ cao cấp, nội thất da sang trọng, đời 2023. Phù hợp cho gia đình hoặc nhóm nhỏ đi du lịch.',
      tags: ['Bao tài xế', 'Có hóa đơn', 'Nội thất da'],
      active: true
    },
    {
      id: 'dn-v2',
      name: 'Ford Transit 16 chỗ',
      seat: 16,
      vclass: 'thuong',
      verified: true,
      images: ['/anhkhang/xe/ford-transit-16.jpg'],
      desc: 'Xe 16 chỗ rộng rãi, thoáng mát. Thích hợp cho đoàn 10-14 khách, công ty, nhóm bạn.',
      tags: ['Rộng rãi', 'Ghế mềm'],
      active: true
    },
    {
      id: 'dn-v3',
      name: 'Hyundai County',
      seat: 29,
      vclass: 'thuong',
      verified: false,
      images: ['/anhkhang/xe/hyundai-county-2022-2023-hinh-anh.jpg'],
      desc: 'Xe 29 chỗ, đời 2022, máy lạnh mạnh.',
      tags: ['Máy lạnh tốt'],
      active: true
    },
    {
      id: 'dn-v4',
      name: 'Mercedes V-Class VIP',
      seat: 7,
      vclass: 'vip',
      verified: true,
      images: ['/anhkhang/xe/mercedes-v-class.webp'],
      desc: 'Xe VIP sang trọng, phục vụ sự kiện cao cấp, cưới hỏi, đón đại biểu.',
      tags: ['VIP', 'Trang trí hoa', 'Ghế da VIP'],
      active: true
    }
  ],
  services: [
    {
      id: 'dn-s1-basic',
      type: 'su-kien',
      title: 'Xe cưới hỏi - Gói Basic',
      region: 'Đà Nẵng – Hội An',
      desc: 'Gói cưới hỏi cơ bản, phù hợp ngân sách tiết kiệm. Xe đời mới, tài xế chuyên nghiệp.',
      image: '/anhkhang/xe/toyota-fortuner-2023.jpg',
      tags: ['Trang trí cơ bản', 'Bao tài xế', 'Trong tỉnh'],
      options: [
        {
          packageName: 'Gói 4 giờ',
          vehicleType: 4,
          duration: 4,
          price: 700000,
          priceUnit: 'goi',
          includes: [
            'Xe 4-7 chỗ đời mới',
            'Trang trí hoa cơ bản',
            'Bao tài xế 4 giờ',
            'Nội thành Đà Nẵng'
          ]
        },
        {
          packageName: 'Gói 6 giờ',
          vehicleType: 4,
          duration: 6,
          price: 1000000,
          priceUnit: 'goi',
          includes: [
            'Xe 4-7 chỗ đời mới',
            'Trang trí hoa cơ bản',
            'Bao tài xế 6 giờ',
            'Trong tỉnh Quảng Nam'
          ]
        }
      ],
      active: true
    },
    {
      id: 'dn-s1-standard',
      type: 'su-kien',
      title: 'Xe cưới hỏi - Gói Standard',
      region: 'Đà Nẵng – Huế – Hội An',
      desc: 'Gói cưới hỏi phổ biến nhất. Xe Fortuner/Innova cao cấp, trang trí hoa đẹp.',
      image: '/anhkhang/xe/toyota-fortuner-2023-2.jpg',
      tags: ['Trang trí cao cấp', 'Xe Fortuner', 'Phổ biến'],
      options: [
        {
          packageName: 'Gói 4 giờ',
          vehicleType: 7,
          duration: 4,
          price: 1200000,
          priceUnit: 'goi',
          vehicleRefId: 'dn-v1',
          includes: [
            'Xe 7 chỗ Fortuner 2023',
            'Trang trí hoa cao cấp',
            'Tài xế chuyên nghiệp',
            'Rượu champagne',
            'Trong tỉnh Quảng Nam'
          ]
        },
        {
          packageName: 'Gói cả ngày',
          vehicleType: 7,
          duration: 10,
          price: 2500000,
          priceUnit: 'goi',
          vehicleRefId: 'dn-v1',
          includes: [
            'Xe 7 chỗ Fortuner 2023',
            'Trang trí hoa cao cấp',
            'Tài xế + phụ xe',
            'Rượu champagne',
            'Không giới hạn km'
          ]
        }
      ],
      active: true
    },
    {
      id: 'dn-s1-vip',
      type: 'su-kien',
      title: 'Xe cưới hỏi - Gói VIP',
      region: 'Toàn miền Trung',
      desc: 'Gói cưới hỏi cao cấp nhất. Mercedes V-Class, dịch vụ 5 sao, phục vụ VIP.',
      image: '/anhkhang/xe/mercedes-v-class.webp',
      tags: ['Mercedes V-Class', 'Luxury', 'Dịch vụ 5⭐'],
      options: [
        {
          packageName: 'Gói nửa ngày',
          vehicleType: 7,
          duration: 6,
          price: 3000000,
          priceUnit: 'goi',
          vehicleRefId: 'dn-v4',
          includes: [
            'Mercedes V-Class VIP',
            'Trang trí hoa luxury',
            'Tài xế + phụ xe',
            'Champagne cao cấp',
            'Red carpet',
            'Không giới hạn km'
          ]
        },
        {
          packageName: 'Gói cả ngày',
          vehicleType: 7,
          duration: 12,
          price: 5000000,
          priceUnit: 'goi',
          vehicleRefId: 'dn-v4',
          includes: [
            'Mercedes V-Class VIP',
            'Trang trí hoa luxury',
            'Team tài xế chuyên nghiệp',
            'Full beverage service',
            'Red carpet + photographer',
            'Toàn miền Trung'
          ]
        }
      ],
      active: true
    },
    {
      id: 'dn-s2',
      type: 'bao-xe',
      title: 'Bao xe tuyến Đà Nẵng – Hội An',
      region: 'Đà Nẵng ↔ Hội An',
      desc: 'Bao xe Đà Nẵng - Hội An trong ngày, lịch trình linh hoạt. Xuất phát từ 7h sáng.',
      image: '/images/blog/post-02.jpg',
      tags: ['Trong ngày', 'Linh hoạt'],
      options: [
        { 
          vehicleType: 4, 
          price: 800000, 
          priceUnit: 'chuyen', 
          note: 'Xe 4-7 chỗ, đã bao tài xế, bảo hiểm' 
        }
      ],
      active: true
    },
    {
      id: 'dn-s3',
      type: 'san-bay',
      title: 'Đưa đón sân bay Đà Nẵng ↔ Hội An',
      region: 'Sân bay Đà Nẵng ↔ Hội An',
      desc: 'Dịch vụ đưa đón sân bay chuyên nghiệp, đúng giờ, xe sạch sẽ. Hỗ trợ đưa đón 24/7.',
      image: '/images/blog/post-03.jpg',
      options: [
        { 
          vehicleType: 4, 
          price: 400000, 
          priceUnit: 'chuyen',
          note: 'Xe 4-7 chỗ, đã bao tài xế, VAT' 
        }
      ],
      active: true
    },
    {
      id: 'dn-s31',
      type: 'san-bay',
      title: 'Đưa đón sân bay Đà Nẵng ↔ Tam Kỳ',
      region: 'Sân bay Đà Nẵng ↔ Tam Kỳ',
      desc: 'Đưa đón sân bay - Tam Kỳ, lịch trình linh hoạt.',
      options: [
        { 
          vehicleType: 4, 
          price: 500000, 
          priceUnit: 'chuyen',
          note: 'Xe 4-7 chỗ, đã bao tài xế' 
        }
      ],
      active: true
    },
    {
      id: 'dn-s32',
      type: 'san-bay',
      title: 'Đưa đón sân bay Đà Nẵng ↔ Huế',
      region: 'Sân bay Đà Nẵng ↔ Huế',
      desc: 'Tuyến Đà Nẵng - Huế, xe đời mới, tài xế kinh nghiệm.',
      options: [
        { 
          vehicleType: 4, 
          price: 800000, 
          priceUnit: 'chuyen',
          note: 'Xe 4-7 chỗ, bao tài xế, nhiên liệu' 
        }
      ],
      active: true
    },
    {
      id: 'dn-s4',
      type: 'bao-xe',
      title: 'Bao xe tuyến Đà Nẵng – Huế',
      region: 'Đà Nẵng ↔ Huế',
      desc: 'Bao xe trọn gói Đà Nẵng - Huế, đã bao tài xế và nhiên liệu.',
      image: '/images/blog/post-03.jpg',
      options: [
        { 
          vehicleType: 4, 
          price: 1500000, 
          priceUnit: 'chuyen',
          note: 'Xe 4-7 chỗ, Fortuner, bao tài xế'
        }
      ],
      active: true
    },
    {
      id: 'dn-s5',
      type: 'bao-xe',
      title: 'Bao xe tuyến Đà Nẵng – Tam Kỳ',
      region: 'Đà Nẵng ↔ Tam Kỳ',
      desc: 'Bao xe Đà Nẵng - Tam Kỳ, lịch trình linh hoạt, bao tài xế.',
      options: [
        { 
          vehicleType: 4, 
          price: 700000, 
          priceUnit: 'chuyen',
          note: 'Xe 4-7 chỗ, bao tài xế, bảo hiểm'
        }
      ],
      active: true
    },
    {
      id: 'dn-s6',
      type: 'bao-xe',
      title: 'Bao xe tuyến Đà Nẵng – Bà Nà',
      region: 'Đà Nẵng ↔ Bà Nà',
      desc: 'Bao xe Đà Nẵng - Bà Nà Hills, lịch trình linh hoạt, phù hợp du lịch gia đình.',
      options: [
        { 
          vehicleType: 4, 
          price: 600000, 
          priceUnit: 'chuyen',
          note: 'Xe 4-7 chỗ, bao tài xế, bảo hiểm'
        }
      ],
      active: true
    },
    {
      id: 'dn-s33',
      type: 'san-bay',
      title: 'Đưa đón sân bay Đà Nẵng ↔ Bà Nà',
      region: 'Sân bay Đà Nẵng ↔ Bà Nà',
      desc: 'Đưa đón sân bay - Bà Nà Hills, xe mới, tài xế nhiệt tình.',
      options: [
        { 
          vehicleType: 4, 
          price: 600000, 
          priceUnit: 'chuyen',
          note: 'Xe 4-7 chỗ, đã bao tài xế, bảo hiểm' 
        }
      ],
      active: true
    }
  ]
};

