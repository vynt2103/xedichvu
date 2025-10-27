# Xe Dịch Vụ - NewDanang.vn Subdomain

## 📋 Tổng quan

Dự án này triển khai trang detail nhà xe (`/o/[slug]`) cho subdomain `xedichvu.newdanang.vn`. Đây là Phase 1 sử dụng **mock data**, chuẩn bị sẵn infrastructure để tích hợp **Sanity CMS** trong Phase 2.

## 🎯 Business Requirements (Đã triển khai ✅)

### Section 1 - Operator Hero
- ✅ Logo + tên nhà xe
- ✅ Badge verified (nếu có)
- ✅ Khu vực hoạt động (chips)
- ✅ ShortDesc (1–2 câu)
- ✅ CTA động (tel, Zalo, Facebook, WhatsApp, Instagram, Email, Website)
- ✅ Floating action bar trên mobile

### Section 2 - Vehicle List
- ✅ Danh sách xe với ảnh gallery (1–3 tấm)
- ✅ Thông tin: tên, số chỗ, phân hạng (phổ thông/cao cấp/VIP)
- ✅ Tags (bao tài xế, có hóa đơn, etc.)
- ✅ Filter theo số chỗ & phân hạng (client-side)

### Section 3 - Services
- ✅ Nhóm dịch vụ theo type: `su-kien`, `bao-xe`, `san-bay`, `tour-rieng`
- ✅ Price options linh hoạt: vehicleType, vehicleClass, price, priceUnit
- ✅ Điều kiện & ghi chú cho mỗi option
- ✅ Link tới vehicle (vehicleRefId)
- ✅ Hiển thị dạng cards, mobile-first

### SEO
- ✅ Dynamic metadata (title, description, OG tags)
- ✅ Open Graph images (cover/logo)

## 📁 Cấu trúc Files (Đã tạo)

```
lib/
├── types.ts           # TypeScript types (Operator, Vehicle, Service, etc.)
├── mock.ts            # Mock data - Phase 1 (ready to swap with Sanity)
├── utils.ts           # formatPrice() & helpers
├── sanity.ts          # Sanity client stub (Phase 2 ready)
└── groq.ts            # GROQ queries stub (Phase 2 ready)

app/
└── o/
    ├── layout.tsx                   # Operator layout wrapper
    └── [slug]/
        ├── page.tsx                 # Main operator detail page
        └── not-found.tsx            # 404 handler

components/
├── operator/
│   ├── OperatorHero.tsx            # Hero section với cover, logo, CTA
│   └── CTAButtons.tsx               # Dynamic CTA buttons (desktop + floating)
├── vehicle/
│   ├── VehicleCard.tsx              # Card cho từng xe (carousel ảnh)
│   └── VehicleList.tsx              # List + filters (seat, vclass)
└── service/
    ├── ServiceBlock.tsx             # Service card với pricing
    └── PriceOptions.tsx             # Pricing table/cards
```

## 🚀 Cách chạy

### Development
```bash
npm run dev
# Truy cập: http://localhost:3000/o/anh-khang-travel
```

### Build & Deploy
```bash
npm run build
npm run start
```

## 🧪 Mock Data - Test Routes

Sau khi deploy, test các route sau:

| Route | Description |
|-------|-------------|
| `/o/anh-khang-travel` | Main demo operator với đầy đủ data |
| `/o/invalid-slug` | Test 404 page |

## 📱 Features đã implement

### ✅ Dynamic CTA
- Chỉ hiển thị nút khi có dữ liệu
- Priority: phone → zalo → facebook → whatsapp → instagram → email → website
- Mobile: Floating action bar (bottom center)
- Desktop: Full row of buttons

### ✅ Vehicle List Filter
- Filter theo số chỗ: 0/5/7/9/16/29/45
- Filter theo phân hạng: All/thuong/cao-cap/vip
- Real-time filtering (client-side)
- Results count display

### ✅ Price Options
- Multi-format: number (1,200,000) hoặc string ("Liên hệ")
- Units: `/chuyến`, `/ngày`, `/km`
- Condition & notes inline
- Vehicle ref highlighting (future feature)

### ✅ Mobile-First Design
- Rounded corners (`rounded-2xl`, `rounded-xl`)
- Shadow hover effects
- Spacing thoáng
- Safe area padding cho floating CTA
- Responsive grid: 1 col (mobile) → 2-3 cols (desktop)

## 🔌 Phase 2 - Sanity Integration (Đã chuẩn bị sẵn)

### Files sẵn sàng
1. **`lib/sanity.ts`** - Client setup (stub)
2. **`lib/groq.ts`** - GROQ queries (stub)

### Schema Outline (Tham khảo `lib/groq.ts`)
```
operator: name, slug, verified, shortDesc, regions[], contacts{}, vehicles[], services[]
vehicle: name, seat, vclass, verified, images[], desc, tags[]
service: type, title, region, desc, image, options[] (vehicleType, price, priceUnit, condition, note)
```

### Cách kích hoạt Phase 2
1. Set env vars: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`
2. Uncomment code trong `lib/sanity.ts` và `lib/groq.ts`
3. Trong `app/o/[slug]/page.tsx`: Thay `OPERATORS.find()` bằng `getOperatorBySlug(slug)`
4. Thêm Sanity schema files trong `/sanity/schemas/`

## 🎨 UI Components

### OperatorHero
- Cover image với gradient overlay
- Logo rounded-2xl
- Verified badge (blue)
- Region chips (transparent white)
- Service category badges (colored)
- Desktop CTA row
- Mobile floating bar

### VehicleCard
- Image carousel (multi-image support)
- Prev/next buttons
- Dot indicators
- Verified badge overlay
- Seat count + class badge
- Description (2 line clamp)
- Tags row

### ServiceBlock
- Optional header image
- Type badge (colored by type)
- MapPin icon cho region
- Description
- Tags
- PriceOptions table embedded

### PriceOptions
- Vehicle info (seat, class)
- Linked vehicle name (nếu có vehicleRefId)
- Price formatted (VN locale)
- Unit suffix
- Condition/note tooltip

## 📊 Data Flow

```
app/o/[slug]/page.tsx
  ↓
getOperator(slug) → Operator | undefined
  ↓
  ├─→ OperatorHero (operator data)
  ├─→ VehicleList (operator.vehicles)
  │     └─→ VehicleCard (per vehicle)
  └─→ ServiceBlock (grouped by type)
        └─→ PriceOptions (service.options)
```

## 🎯 Acceptance Criteria Status

- ✅ `/o/anh-khang-travel` renders đầy đủ 3 sections
- ✅ CTA dynamic (ẩn khi không có dữ liệu)
- ✅ Floating bar mobile hoạt động
- ✅ Vehicle filter client-side
- ✅ Service price options đúng format (/chuyến, /ngày, /km)
- ✅ SEO metadata dynamic
- ✅ Type-safe code
- ✅ Build thành công

## 🚢 Deploy Checklist

### Vercel
1. Tạo project mới trên Vercel
2. Connect repo hiện tại
3. Add domain: `xedichvu.newdanang.vn`
4. Configure CNAME (nếu dùng DNS riêng)
5. Deploy & verify route `/o/anh-khang-travel`

### Post-Deploy
- [ ] Test mobile floating CTA
- [ ] Test vehicle filters
- [ ] Test all CTA buttons (tel, Zalo, FB, etc.)
- [ ] Verify SEO metadata (Open Graph)
- [ ] Test 404 page (`/o/invalid-slug`)

## 📝 Notes

### Mock vs Real Data
- **Phase 1**: Dùng `lib/mock.ts` → `OPERATORS[]`
- **Phase 2**: Swap sang Sanity → `getOperatorBySlug(slug)`
- Code structure sẵn sàng, chỉ cần uncomment và thêm env vars

### CTA Behavior
- Float bar chỉ hiển thị top 4 items (phone, zalo, facebook, whatsapp)
- Desktop shows all available contacts
- Icons từ `lucide-react`

### Pricing Format
- Numbers: `1.200.000 /chuyến` (VN locale)
- Strings: `"Liên hệ" /chuyến`
- Fallback: raw string nếu format fail

## 🔗 Links

- **Dev URL**: http://localhost:3000/o/anh-khang-travel
- **Production**: https://xedichvu.newdanang.vn/o/anh-khang-travel
- **GitHub**: (Repo URL)

## 🎬 Next Steps (Phase 2)

1. Setup Sanity Studio
2. Create schemas: `operator.ts`, `vehicle.ts`, `service.ts`
3. Populate data từ mock sang Sanity
4. Uncomment `lib/sanity.ts` & `lib/groq.ts`
5. Test Sanity query trong `page.tsx`
6. Add generateStaticParams() cho ISR
7. Deploy updated version

---

**Status**: ✅ Phase 1 Complete (Mock Data)
**Phase 2**: 🔄 Ready for Sanity Integration

