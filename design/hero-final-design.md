# Hero Section - Final Professional Design

## 🎯 DESIGN CONCEPT: Business Card Style

> **Philosophy**: Clean, professional business card layout
> **Focus**: Logo prominence, clear information hierarchy
> **Style**: Minimal, elegant, trustworthy

---

## 🎨 VISUAL MOCKUP

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║                    ┌─────────────────┐                      ║
║                    │                 │                      ║
║                    │                 │                      ║
║                    │   [LOGO 360px]  │  ← HUGE, crystal clear ║
║                    │   No box        │                      ║
║                    │                 │                      ║
║                    │                 │                      ║
║                    └─────────────────┘                      ║
║                                                              ║
║              Đại Hiệp Travel                    ⭐ Verified ║
║              ═══════════════════                             ║
║                    (60px bold)                               ║
║                                                              ║
║        Chuyên xe du lịch & dịch vụ cưới hỏi miền Trung     ║
║            Uy tín - Chất lượng - Giá cả hợp lý              ║
║                    (18px gray)                               ║
║                                                              ║
║  ┌──────────────────────────────────────────────────────┐   ║
║  │                                                      │   ║
║  │  KHU VỰC PHỤC VỤ:                                  │   ║
║  │  📍 Đà Nẵng  📍 Hội An  📍 Huế  📍 Quảng Nam      │   ║
║  │  📍 Tam Kỳ   📍 Chu Lai                            │   ║
║  │                                                      │   ║
║  └──────────────────────────────────────────────────────┘   ║
║                                                              ║
║  ┌──────────────────────────────────────────────────────┐   ║
║  │                                                      │   ║
║  │  DỊCH VỤ:                                           │   ║
║  │  🚗 Bao xe du lịch  ✈️ Đưa đón sân bay             │   ║
║  │  💍 Xe cưới hỏi VIP 🎉 Tour riêng                   │   ║
║  │                                                      │   ║
║  └──────────────────────────────────────────────────────┘   ║
║                                                              ║
║              ┌────────────┐      ┌────────────┐             ║
║              │ 📞 Gọi     │      │ 💬 Zalo    │             ║
║              │ 0769222297 │      │ Chat ngay  │             ║
║              └────────────┘      └────────────┘             ║
║                                                              ║
║           📧 contact@daihiep.vn  •  Hỗ trợ 24/7            ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 📐 LAYOUT STRUCTURE

### **1. Logo Section** (Top)
```
Position: Center, top
Size: 360px × 360px (desktop)
Style: No box, no border, pure logo
Shadow: drop-shadow-2xl
Background: Clean white
```

### **2. Name Section** (Title)
```
Layout: Name (left) + Verified Badge (right)

┌─────────────────────────────────────┐
│ Đại Hiệp Travel       ⭐ Verified │
│ ═══════════════                     │
└─────────────────────────────────────┘

Name:
  - Font: 56px (desktop), 36px (mobile)
  - Weight: 800 (extrabold)
  - Color: gray-900
  - Align: Left of center (with badge on right)

Badge:
  - Position: Top right corner (absolute)
  - Size: Small, subtle
  - Color: emerald-500
  - Style: Chip/pill
```

### **3. Description** (Subtitle)
```
Text: Short tagline/description
Font: 18px, regular
Color: gray-600
Max-width: 700px
Align: Center
```

### **4. Info Boxes** (Highlighted Sections)

#### Box 1: KHU VỰC PHỤC VỤ
```
┌────────────────────────────────────────┐
│ KHU VỰC PHỤC VỤ:                      │
│ 📍 Đà Nẵng  📍 Hội An  📍 Huế        │
│ 📍 Quảng Nam  📍 Tam Kỳ  📍 Chu Lai  │
└────────────────────────────────────────┘

Style:
  - Background: gray-50 dark:gray-800
  - Border: 1px gray-200
  - Rounded: rounded-xl
  - Padding: p-6
  - Label: Uppercase, font-semibold, text-sm, gray-700
  - Items: Wrap, inline, with icons
  - NO "+1 khu vực" - Show ALL regions!
```

#### Box 2: DỊCH VỤ
```
┌────────────────────────────────────────┐
│ DỊCH VỤ:                              │
│ 🚗 Bao xe du lịch                     │
│ ✈️ Đưa đón sân bay                    │
│ 💍 Xe cưới hỏi VIP                    │
│ 🎉 Tour riêng                          │
└────────────────────────────────────────┘

Style:
  - Same as Box 1
  - List: Block format (one per line OR 2 columns)
  - Icons: Relevant emojis or Lucide icons
  - Label: "DỊCH VỤ:" uppercase, bold
```

### **5. CTA Buttons**
```
Layout: 2 buttons, side by side

Button size:
  - Width: auto (content-based)
  - Height: 56px (py-4)
  - Font: 18px, bold
  - Rounded: rounded-xl
  - Shadow: shadow-xl

Primary (Call):
  - Color: blue-600
  - Icon: Phone
  - Text: "Gọi [number]"

Secondary (Zalo):
  - Color: emerald-500
  - Icon: MessageCircle
  - Text: "Chat Zalo"
```

### **6. Footer Info** (Contact Details)
```
Position: Bottom center
Style: Small, subtle
Content: Email • Hours
Font: 14px, gray-500
```

---

## 🎨 COLOR PALETTE

```css
/* Background */
--hero-bg: #ffffff (pure white)

/* Name */
--name-color: #111827 (gray-900)
--name-size: 56px

/* Verified Badge */
--verified-bg: #10b981 (emerald-500)
--verified-position: absolute top-8 right-8

/* Info Boxes */
--box-bg: #f9fafb (gray-50)
--box-border: #e5e7eb (gray-200)
--box-label: #374151 (gray-700)
--box-text: #111827 (gray-900)

/* Buttons */
--btn-primary: #2563eb (blue-600)
--btn-secondary: #10b981 (emerald-500)
```

---

## 📏 SPACING & SIZING

### Desktop (> 1024px):
```css
Logo: 360px × 360px
Name: 56px, extrabold
Description: 18px
Info boxes: Full width, max-w-4xl
Spacing: mb-12, mb-10, mb-8
Padding: py-24
```

### Tablet (768px - 1024px):
```css
Logo: 280px × 280px
Name: 44px
Description: 17px
Info boxes: Full width
Spacing: mb-10, mb-8
Padding: py-20
```

### Mobile (< 768px):
```css
Logo: 240px × 240px
Name: 36px
Description: 16px
Info boxes: Full width, stack
Spacing: mb-8, mb-6
Padding: py-16
```

---

## 🎯 KEY DESIGN PRINCIPLES

### 1. **Verified Badge Placement**
```
❌ OLD: Under name (cluttered)
✅ NEW: Top-right corner (subtle, professional)

Position: absolute top-8 right-8
Style: Small pill badge
Always visible but not distracting
```

### 2. **All Regions Visible**
```
❌ OLD: Show 4, hide rest with "+X more"
✅ NEW: Show ALL regions in box

Wrap: flex-wrap
Gap: gap-2
All visible at once
```

### 3. **Services as Separate Section**
```
❌ OLD: Mixed with regions in badges
✅ NEW: Separate box with label

Title: "DỊCH VỤ:"
Format: List or 2-column grid
Icons: Clear, relevant
```

### 4. **Clean Hierarchy**
```
1. Logo (largest)
2. Name (bold, prominent)
3. Description (readable)
4. Info boxes (organized)
5. CTAs (actionable)
6. Contact (subtle)
```

---

## 🎨 VISUAL STYLE GUIDE

### Info Box Design:
```tsx
<div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
  <h3 className="text-sm font-semibold uppercase text-gray-700 dark:text-gray-300 mb-4 tracking-wide">
    KHU VỰC PHỤC VỤ:
  </h3>
  <div className="flex flex-wrap gap-2">
    {/* All regions */}
  </div>
</div>
```

### Badge Design (Region/Service item):
```tsx
<span className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300">
  <MapPin size={14} className="text-blue-600" />
  Đà Nẵng
</span>
```

### Verified Badge (Top Right):
```tsx
<div className="absolute top-8 right-8 inline-flex items-center gap-1.5 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
  <ShieldCheck size={14} />
  Verified
</div>
```

---

## 📱 RESPONSIVE BEHAVIOR

### Desktop:
```
- Logo: 360px, centered
- Layout: Single column, max-w-4xl
- Info boxes: Full width, side by side or stacked
- Buttons: Side by side
```

### Mobile:
```
- Logo: 240px, centered
- Layout: Single column
- Info boxes: Stacked, full width
- Buttons: Stacked, full width
- Verified badge: Stay top-right but smaller
```

---

## ✅ DESIGN CHECKLIST

### Logo:
- [x] Size: 360px (desktop)
- [x] No box, no border
- [x] Pure logo with drop-shadow
- [x] Center aligned

### Name & Badge:
- [x] Name: Left-aligned (or center with badge right)
- [x] Verified: Top-right corner (subtle)
- [x] Large, bold typography

### Info Organization:
- [x] Regions: Separate box, ALL visible
- [x] Services: Separate box, clear list
- [x] Clear labels (uppercase, bold)
- [x] Clean backgrounds

### CTAs:
- [x] Large, prominent buttons
- [x] Clear labels with phone number
- [x] Good touch targets (56px height)

### Overall:
- [x] Clean white background
- [x] Professional spacing
- [x] Clear hierarchy
- [x] Mobile responsive

---

## 🎯 IMPLEMENTATION NOTES

### Structure:
```tsx
<section>
  {/* Verified Badge - Absolute positioned */}
  <div className="absolute top-8 right-8">...</div>
  
  <div className="container max-w-5xl">
    {/* Logo */}
    <div className="logo">...</div>
    
    {/* Name */}
    <h1>...</h1>
    
    {/* Description */}
    <p>...</p>
    
    {/* Info Box: Regions */}
    <div className="info-box">
      <h3>KHU VỰC PHỤC VỤ:</h3>
      <div>{/* ALL regions */}</div>
    </div>
    
    {/* Info Box: Services */}
    <div className="info-box">
      <h3>DỊCH VỤ:</h3>
      <div>{/* All services */}</div>
    </div>
    
    {/* CTAs */}
    <div className="cta-buttons">...</div>
    
    {/* Footer */}
    <div className="footer-info">...</div>
  </div>
</section>
```

---

## 🚀 READY TO IMPLEMENT

**Design Status**: ✅ **APPROVED**  
**Next Step**: Implement in code  
**Quality**: 🌟🌟🌟🌟🌟 **Professional Business Card Style**

This design is:
- ✅ Clean and professional
- ✅ Logo prominent (360px)
- ✅ All regions visible
- ✅ Services clearly separated
- ✅ Verified badge subtle (top-right)
- ✅ Mobile responsive
- ✅ Easy to scan
- ✅ Trustworthy appearance

