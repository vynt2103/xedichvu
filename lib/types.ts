export type ContactLinks = {
  phone?: string;        // "0905xxxxxx" (render tel:)
  zalo?: string;         // "https://zalo.me/..."
  facebook?: string;
  instagram?: string;
  whatsapp?: string;     // "+8490xxxxx" (render wa.me)
  email?: string;
  website?: string;
};

export type VehicleClass = 'thuong' | 'cao-cap' | 'vip';

export type Vehicle = {
  id: string;
  name: string;          // "Toyota Fortuner"
  seat: number;          // 5 | 7 | 9 | 16 | 29 | 45 ...
  vclass?: VehicleClass; // 'thuong' | 'cao-cap' | 'vip'
  verified?: boolean;
  images: string[];      // URLs
  desc?: string;
  tags?: string[];
  active?: boolean;
};

export type PriceUnit = 'chuyen' | 'ngay' | 'km';

export type PriceOption = {
  vehicleType: number;       // 5 | 7 | 9 | 16 | ...
  vehicleClass?: VehicleClass;
  price: number | string;    // 1200000 | "Liên hệ"
  priceUnit: PriceUnit;      // 'chuyen' | 'ngay' | 'km'
  condition?: string;        // "< 50km tính theo km"
  note?: string;             // "Bao tài xế, chưa cầu đường"
  vehicleRefId?: string;     // link sang Vehicle.id (optional)
};

export type ServiceType = 'bao-xe' | 'su-kien' | 'san-bay' | 'tour-rieng';

export type Service = {
  id: string;
  type: ServiceType;
  title: string;         // "Bao xe ĐN – Huế", "Xe cưới hỏi"
  region?: string;       // "Đà Nẵng - Huế"
  desc?: string;
  image?: string;
  tags?: string[];
  options: PriceOption[];
  active?: boolean;
};

export type Operator = {
  slug: string;
  name: string;
  verified?: boolean;
  active?: boolean;
  shortDesc?: string;
  address?: string;
  regions: string[];     // ["Đà Nẵng","Quảng Nam"]
  serviceCategories: ServiceType[]; // ['bao-xe','su-kien',...]
  contacts: ContactLinks;
  logo?: string;
  cover?: string;
  vehicles: Vehicle[];
  services: Service[];
  showVehicleFilter?: boolean; // Show/hide vehicle filter UI
};

