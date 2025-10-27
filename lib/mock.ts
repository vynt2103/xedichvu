import { Operator } from './types';

export const OPERATORS: Operator[] = [
  {
    slug: 'anh-khang-travel',
    name: 'Trần Thành Travel',
    verified: true,
    active: true,
    shortDesc: 'Chuyên xe du lịch & dịch vụ cưới hỏi miền Trung. Uy tín, đúng giờ, giá tốt nhất thị trường.',
    address: 'Hải Châu, Đà Nẵng',
    regions: ['Đà Nẵng', 'Quảng Nam', 'Tam Kỳ', 'Huế', 'Hội An'],
    serviceCategories: ['bao-xe', 'su-kien', 'san-bay'],
    showVehicleFilter: false, // Hide filter when only a few vehicles
    contacts: {
      phone: '0769222297',
      zalo: 'https://zalo.me/0769222297',
      facebook: 'https://facebook.com/tranthanhtravel',
      whatsapp: '+840769222297',
      instagram: 'https://instagram.com/tranthanhtravel',
      email: 'contact@tranthanh.vn'
    },
    logo: '/images/logo/logo.svg',
    cover: '/images/brands/tailgrids.svg',
    vehicles: [
      {
        id: 'v1',
        name: 'Toyota Fortuner 2023',
        seat: 7,
        vclass: 'cao-cap',
        verified: true,
        images: ['/images/blog/blog-01.jpg', '/images/blog/blog-02.jpg'],
        desc: 'Xe 7 chỗ cao cấp, nội thất da sang trọng, đời 2023. Phù hợp cho gia đình hoặc nhóm nhỏ đi du lịch.',
        tags: ['Bao tài xế', 'Có hóa đơn', 'Nội thất da'],
        active: true
      },
      {
        id: 'v2',
        name: 'Ford Transit 16 chỗ',
        seat: 16,
        vclass: 'thuong',
        verified: true,
        images: ['/images/blog/blog-03.jpg'],
        desc: 'Xe 16 chỗ rộng rãi, thoáng mát. Thích hợp cho đoàn 10-14 khách, công ty, nhóm bạn.',
        tags: ['Rộng rãi', 'Ghế mềm'],
        active: true
      },
      {
        id: 'v3',
        name: 'Hyundai County',
        seat: 29,
        vclass: 'thuong',
        verified: false,
        images: ['/images/blog/blog-01.jpg'],
        desc: 'Xe 29 chỗ, đời 2022, máy lạnh mạnh.',
        tags: ['Máy lạnh tốt'],
        active: true
      },
      {
        id: 'v4',
        name: 'Mercedes V-Class VIP',
        seat: 7,
        vclass: 'vip',
        verified: true,
        images: ['/images/blog/blog-02.jpg'],
        desc: 'Xe VIP sang trọng, phục vụ sự kiện cao cấp, cưới hỏi, đón đại biểu.',
        tags: ['VIP', 'Trang trí hoa', 'Ghế da VIP'],
        active: true
      }
    ],
    services: [
      {
        id: 's1',
        type: 'su-kien',
        title: 'Xe cưới hỏi & sự kiện VIP',
        region: 'Đà Nẵng – Huế – Hội An',
        desc: 'Phục vụ cưới hỏi, đón dâu, sự kiện, VIP. Xe được trang trí hoa tươi, có hóa đơn đầy đủ.',
        image: '/images/blog/post-01.jpg',
        tags: ['VIP', 'Trang trí hoa', 'Có hóa đơn'],
        options: [
          { 
            vehicleType: 4, 
            price: 700000, 
            priceUnit: 'chuyen', 
            note: 'Xe 4 chỗ, trang trí cơ bản' 
          },
          { 
            vehicleType: 5, 
            price: 800000, 
            priceUnit: 'chuyen', 
            note: 'Xe 5 chỗ, bao tài xế, trang trí cơ bản' 
          },
          { 
            vehicleType: 7, 
            price: 1200000, 
            priceUnit: 'chuyen', 
            note: 'Xe 7 chỗ, Fortuner, trang trí hoa', 
            vehicleRefId: 'v1' 
          },
          { 
            vehicleType: 9, 
            price: 1500000, 
            priceUnit: 'chuyen',
            note: 'Xe 9 chỗ, VIP, trang trí hoa cao cấp'
          },
          { 
            vehicleType: 16, 
            price: 2000000, 
            priceUnit: 'chuyen',
            note: 'Xe 16 chỗ, Transit, phục vụ đám đông',
            vehicleRefId: 'v2'
          },
          { 
            vehicleType: 29, 
            price: 3500000, 
            priceUnit: 'chuyen',
            note: 'Xe 29 chỗ, Hyundai County, đám lớn',
            vehicleRefId: 'v3'
          }
        ],
        active: true
      },
      {
        id: 's2',
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
        id: 's3',
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
        id: 's31',
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
        id: 's32',
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
        id: 's4',
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
        id: 's5',
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
      }
    ]
  }
];

