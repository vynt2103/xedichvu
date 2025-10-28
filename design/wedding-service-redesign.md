# Redesign Section: Dịch Vụ Cưới Hỏi / VIP

---

## 🎯 VẤN ĐỀ HIỆN TẠI

### 1. Service Card quá dài và rối
```
Current: ServiceBlock.tsx
- Card height: ~900px (quá cao!)
- 6 pricing options in 1 card (overwhelming)
- Gradient orange/yellow tags (màu mè)
- Emoji ⭐🚗 everywhere (unprofessional)
- Không có CTA button rõ ràng
- User không biết phải làm gì tiếp theo
```

### 2. Pricing Model không hợp lý
```typescript
// Hiện tại:
{
  type: 'su-kien',
  title: 'Xe cưới hỏi & sự kiện VIP',
  options: [
    { price: 700000, priceUnit: 'chuyen' }  // ❌ SAI!
  ]
}
```

**Vấn đề**: 
- ❌ Cưới hỏi không tính theo "chuyến" 
- ❌ Nên tính theo "giờ" hoặc "gói"
- ❌ Thiếu rõ ràng về duration

### 3. Service Organization không consistent
```
Sân bay: 3 services (Hội An, Tam Kỳ, Huế)
Bao xe: 3 services (Hội An, Tam Kỳ, Huế)
Cưới hỏi: 1 service với 6 options ← Không consistent!
```

---

## ✅ GIẢI PHÁP

### A. Chia nhỏ Services (Recommended ⭐)

#### Structure:
```
Dịch vụ cưới hỏi / VIP
├─ Xe cưới hỏi - Gói Basic
├─ Xe cưới hỏi - Gói Standard  
├─ Xe cưới hỏi - Gói VIP
└─ Xe rước dâu cao cấp
```

#### Mock Data Example:
```typescript
// Service 1: Basic
{
  id: 's1-basic',
  type: 'su-kien',
  title: 'Xe cưới hỏi - Gói Basic',
  region: 'Đà Nẵng – Hội An',
  desc: 'Gói cưới hỏi cơ bản, xe đời mới, tài xế chuyên nghiệp.',
  image: '/images/services/wedding-basic.jpg',
  tags: ['Trang trí cơ bản', 'Bao tài xế'],
  options: [
    {
      packageName: 'Gói 4 giờ',
      vehicleType: 4,
      duration: 4,
      price: 700000,
      priceUnit: 'goi',
      includes: [
        'Xe 4-7 chỗ',
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
      priceUnit: 'goi'
    }
  ]
},

// Service 2: Standard
{
  id: 's1-standard',
  type: 'su-kien',
  title: 'Xe cưới hỏi - Gói Standard',
  region: 'Đà Nẵng – Huế – Hội An',
  desc: 'Xe Fortuner/Innova, trang trí cao cấp.',
  tags: ['Xe Fortuner', 'Trang trí cao cấp', 'VIP'],
  options: [
    {
      packageName: 'Gói 4 giờ',
      vehicleType: 7,
      price: 1200000,
      priceUnit: 'goi',
      vehicleRefId: 'v1'
    },
    {
      packageName: 'Gói cả ngày',
      price: 2500000,
      priceUnit: 'goi'
    }
  ]
},

// Service 3: VIP
{
  id: 's1-vip',
  type: 'su-kien',
  title: 'Xe cưới hỏi - Gói VIP',
  region: 'Toàn miền Trung',
  desc: 'Mercedes V-Class, dịch vụ 5 sao.',
  tags: ['Mercedes', 'Luxury', '5⭐'],
  options: [
    {
      packageName: 'Gói nửa ngày',
      price: 3000000,
      priceUnit: 'goi',
      vehicleRefId: 'v4'
    },
    {
      packageName: 'Gói cả ngày',
      price: 5000000,
      priceUnit: 'goi'
    }
  ]
}
```

#### UI Layout:
```
┌──────────────────────────────────────────────┐
│ Dịch vụ cưới hỏi / VIP                      │
│ 3 gói lựa chọn                               │
├──────────────────────────────────────────────┤
│                                              │
│ [Grid 3 columns]                             │
│                                              │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│ │ Basic   │  │Standard │  │ VIP     │      │
│ │ Từ 700k │  │ Từ 1.2M │  │ Từ 3M   │      │
│ │ [View]  │  │ [View]  │  │ [View]  │      │
│ └─────────┘  └─────────┘  └─────────┘      │
│                                              │
└──────────────────────────────────────────────┘
```

---

### B. Service Card Design (Option 1 - Minimal & Clean)

#### Card Structure:
```
┌────────────────────────────────────┐
│                                    │
│     [Image 4:3 - 280px height]     │
│     [Category badge overlay]       │
│                                    │
├────────────────────────────────────┤
│ Padding: 24px                      │
│                                    │
│ Xe cưới hỏi - Gói Basic           │ ← Title (20px, bold)
│ 📍 Đà Nẵng – Hội An               │ ← Location (14px)
│                                    │
│ Gói cưới hỏi cơ bản, xe đời       │ ← Description
│ mới, tài xế chuyên nghiệp...      │   (2 lines max)
│                                    │
│ • Trang trí • Bao tài xế          │ ← Tags (minimal)
│                                    │
│ ┌────────────────────────────┐    │
│ │ Từ 700.000đ /gói           │    │ ← Price Box
│ │ 2 gói khả dụng             │    │   (background: #f9fafb)
│ │                            │    │
│ │ [Xem chi tiết →]           │    │ ← CTA Button
│ └────────────────────────────┘    │
│                                    │
└────────────────────────────────────┘

Height: ~520px (thay vì 900px)
```

#### Colors:
```css
/* Light Mode */
--card-bg: #ffffff
--card-border: #e5e7eb
--text-primary: #111827
--text-secondary: #6b7280
--price-bg: #f9fafb
--button-border: #e5e7eb
--button-hover: #2563eb

/* Dark Mode */
--card-bg: #1f2937
--card-border: #374151
--text-primary: #ffffff
--button-hover: #3b82f6
```

#### Interactive States:
```
Card hover:
- Border: #e5e7eb → #3b82f6
- Shadow: none → 0 10px 30px rgba(0,0,0,0.08)

Button hover:
- Border: #e5e7eb → #2563eb
- Color: #111827 → #2563eb
- Arrow: translateX(0) → translateX(4px)
```

---

### C. Pricing Model Update

#### Update Types:
```typescript
// lib/types.ts
export type PriceUnit = 
  | 'chuyen'   // Sân bay
  | 'ngay'     // Tour
  | 'gio'      // By hour
  | 'goi'      // Package ← NEW!
  | 'km';

export type PriceOption = {
  packageName?: string;      // NEW: "Gói 4 giờ"
  vehicleType?: number;
  duration?: number;          // NEW: 4 (hours)
  price: number | string;
  priceUnit: PriceUnit;
  note?: string;
  includes?: string[];        // NEW: Package includes
  vehicleRefId?: string;
};
```

#### Pricing Display:
```typescript
// Cưới hỏi: Show "Từ X/gói"
priceUnit === 'goi' → "Từ 700.000đ /gói"

// Sân bay: Show "/chuyến"  
priceUnit === 'chuyen' → "400.000đ /chuyến"

// Bao xe: Show "/ngày"
priceUnit === 'ngay' → "800.000đ /ngày"
```

---

## 📊 SO SÁNH

| Metric | Hiện tại | Sau khi fix |
|--------|----------|-------------|
| **Card height** | 900px | 520px ↓ 42% |
| **Services** | 1 service | 3-4 services |
| **Options/card** | 6 options | 2-3 options |
| **Pricing unit** | "chuyến" ❌ | "gói" ✅ |
| **CTA clarity** | None | Strong |
| **Colors** | 8+ colors | 3-4 colors |
| **Professional** | 6/10 | 9/10 |

---

## 🚀 IMPLEMENTATION PLAN

### Phase 1: Update Types
```bash
✓ Add 'goi' to PriceUnit
✓ Add packageName field
✓ Add duration field
✓ Add includes array
```

### Phase 2: Update Mock Data
```bash
✓ Split 's1' into 's1-basic', 's1-standard', 's1-vip'
✓ Change priceUnit from 'chuyen' to 'goi'
✓ Add packageName for each option
✓ Add includes array
```

### Phase 3: Create ServiceCardV2 Component
```bash
✓ Implement minimal design
✓ Show "Từ X/gói" pricing
✓ Add CTA button
✓ Handle click → Modal with details
✓ Responsive design
```

### Phase 4: Update Existing Components
```bash
✓ Update ServiceBlock.tsx or create new
✓ Update PriceTable.tsx to handle 'goi'
✓ Test all service types
```

---

## 💡 RECOMMENDATION

### Do:
✅ Chia thành 3 services: Basic, Standard, VIP  
✅ Dùng pricing unit "gói" thay vì "chuyến"  
✅ Implement card design minimal & clean  
✅ Giảm card height xuống 50%  
✅ Add clear CTA button  

### Don't:
❌ Giữ 6 options trong 1 card  
❌ Dùng emoji và màu rực rỡ  
❌ Hiển thị tất cả pricing ngay từ đầu  
❌ Pricing "theo chuyến" cho cưới hỏi  

---

## ✅ CHECKLIST

- [ ] Approval thiết kế từ stakeholder
- [ ] Update types.ts với PriceUnit mới
- [ ] Update mock.ts - split service 's1'
- [ ] Create ServiceCardV2.tsx component
- [ ] Create pricing detail modal/dropdown
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test dark mode
- [ ] Performance check
- [ ] Deploy

---

**Đợi approval để bắt đầu implement! 🚀**

