# Light Mode Color Redesign

## 🎯 Mục tiêu
Điều chỉnh Light Mode để:
- Nền tối hơn một chút (dễ nhìn, giảm độ chói)
- Vẫn giữ được tính chuyên nghiệp
- Không ảnh hưởng đến Dark Mode

---

## 🎨 Phân tích hiện tại

### Light Mode hiện tại (quá sáng):
```css
Background chính: #FFFFFF (trắng tinh)
Background phụ: rgb(249, 250, 251) (gray-50) 
Borders: rgb(229, 231, 235) (gray-200)
Text chính: rgb(17, 24, 39) (gray-900)
Text phụ: rgb(107, 114, 128) (gray-500)
```

**Vấn đề:**
- ❌ Nền trắng tinh (#FFFFFF) quá chói mắt
- ❌ Độ tương phản cao gây mỏi mắt khi nhìn lâu
- ❌ Thiếu chiều sâu (depth) trong thiết kế

---

## ✨ Thiết kế mới - Light Mode "Soft"

### Nguyên tắc:
1. **Warm Gray Base**: Dùng gray ấm hơn thay vì white tinh
2. **Layered Depth**: Tạo lớp bằng các tone gray khác nhau
3. **Subtle Contrast**: Giảm độ tương phản nhẹ

### Color Palette mới:

```css
/* ============================================
   BACKGROUNDS - Nền tối hơn
   ============================================ */

/* Base background - Thay white (#FFF) bằng warm gray */
--bg-base: rgb(248, 249, 250);        /* Subtle gray base */
--bg-elevated: rgb(255, 255, 255);    /* White for cards/elevated surfaces */
--bg-subtle: rgb(243, 244, 246);      /* gray-100 for subtle sections */
--bg-muted: rgb(238, 240, 242);       /* Darker for depth */

/* ============================================
   BORDERS - Soft hơn
   ============================================ */

--border-light: rgb(234, 236, 240);   /* Subtle borders */
--border-default: rgb(226, 232, 240); /* Default borders */
--border-strong: rgb(203, 213, 225);  /* Strong borders */

/* ============================================
   TEXT COLORS - Giữ nguyên độ tương phản đọc
   ============================================ */

--text-primary: rgb(15, 23, 42);      /* slate-900 for headings */
--text-secondary: rgb(51, 65, 85);    /* slate-700 for body */
--text-muted: rgb(100, 116, 139);     /* slate-500 for hints */
--text-subtle: rgb(148, 163, 184);    /* slate-400 for disabled */

/* ============================================
   BRAND COLORS - Giữ nguyên
   ============================================ */

--blue-primary: rgb(37, 99, 235);     /* blue-600 */
--blue-hover: rgb(29, 78, 216);       /* blue-700 */
--green-primary: rgb(22, 163, 74);    /* green-600 */
```

---

## 📋 Implementation Plan

### 1. **Global CSS Override** (`styles/index.css`)

```css
@layer base {
  body {
    font-family: "Inter", sans-serif;
  }
  
  /* ==========================================
     LIGHT MODE - Soft & Professional
     ========================================== */
  
  body:not(.dark) {
    /* Base background - không còn white nữa */
    background-color: rgb(248, 249, 250);
  }
  
  /* Override white backgrounds */
  body:not(.dark) .bg-white {
    background-color: rgb(255, 255, 255) !important; /* Giữ white cho cards */
  }
  
  /* Tối hơn cho gray-50 */
  body:not(.dark) .bg-gray-50 {
    background-color: rgb(243, 244, 246) !important; /* gray-100 */
  }
  
  /* Subtle sections */
  body:not(.dark) section:nth-child(even) {
    background-color: rgb(248, 249, 250);
  }
  
  body:not(.dark) section:nth-child(odd) {
    background-color: rgb(255, 255, 255);
  }
}
```

### 2. **Component-specific adjustments**

#### Header
```css
body:not(.dark) header {
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgb(234, 236, 240);
}
```

#### Cards
```css
body:not(.dark) .card {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(226, 232, 240);
}
```

#### Inputs
```css
body:not(.dark) input,
body:not(.dark) textarea {
  background-color: rgb(248, 249, 250);
  border: 1px solid rgb(226, 232, 240);
}

body:not(.dark) input:focus,
body:not(.dark) textarea:focus {
  background-color: rgb(255, 255, 255);
  border-color: rgb(37, 99, 235);
}
```

---

## 🎨 Visual Comparison

### Before (Current - Too Bright):
```
┌─────────────────────────────────┐
│ #FFFFFF (Pure White) - Chói mắt │
│                                 │
│  Card: #FFFFFF                  │
│  Border: #E5E7EB (thin gray)    │
│                                 │
└─────────────────────────────────┘
```

### After (Proposed - Softer):
```
┌─────────────────────────────────┐
│ #F8F9FA (Warm Gray) - Dễ nhìn  │
│                                 │
│  Card: #FFFFFF (elevated)       │
│  Border: #E2E8F0 (soft gray)    │
│                                 │
└─────────────────────────────────┘
```

---

## 🔍 Specific Changes by Page

### 1. **Homepage** (`app/page.tsx`)
- Base: `rgb(248, 249, 250)` thay vì white
- Hero section: `bg-white` (elevated)
- Feature cards: `bg-white` với shadow
- Alternating sections: gray-50 → gray-100

### 2. **Operators List** (`app/danh-sach-nha-xe/page.tsx`)
- Base: `rgb(243, 244, 246)` (gray-100)
- Operator cards: `bg-white` (elevated)
- Borders: `rgb(226, 232, 240)` (soft)

### 3. **Operator Detail** (`app/nha-xe/[slug]/page.tsx`)
- Base: `rgb(243, 244, 246)`
- Hero card: `bg-white` (elevated)
- Service tables: `bg-white`
- Vehicle cards: `bg-white`

### 4. **Contact Page** (`app/contact/page.tsx`)
- Base: `rgb(248, 249, 250)`
- Form container: `bg-white`
- Input fields: `rgb(248, 249, 250)` focus → `white`

---

## ⚡ CSS Variables Approach (Recommended)

Thay vì override nhiều class, dùng CSS variables:

```css
@layer base {
  :root {
    /* Light mode colors */
    --color-bg-base: 248 249 250;
    --color-bg-elevated: 255 255 255;
    --color-bg-subtle: 243 244 246;
    --color-bg-muted: 238 240 242;
    
    --color-border-light: 234 236 240;
    --color-border: 226 232 240;
    --color-border-strong: 203 213 225;
    
    --color-text-primary: 15 23 42;
    --color-text-secondary: 51 65 85;
    --color-text-muted: 100 116 139;
  }
  
  .dark {
    /* Dark mode - giữ nguyên */
    --color-bg-base: 31 41 55;
    --color-bg-elevated: 55 65 81;
    /* ... */
  }
  
  body {
    background-color: rgb(var(--color-bg-base));
  }
}
```

---

## 🎯 Expected Result

### Trước:
- 😣 Nền trắng chói → mỏi mắt
- 😣 Tương phản quá cao
- 😣 Thiếu chiều sâu

### Sau:
- ✅ Nền warm gray dịu → dễ nhìn
- ✅ Tương phản vừa phải
- ✅ Có chiều sâu (layered design)
- ✅ Vẫn chuyên nghiệp và sạch sẽ

---

## 📝 Implementation Steps

1. ✅ Tạo file design này
2. ⏳ Update `styles/index.css` với overrides
3. ⏳ Test trên các trang chính
4. ⏳ Fine-tune nếu cần
5. ⏳ Deploy

---

## 🚀 Ready to implement?

Approach đề xuất: **Simple CSS Override** (không dùng CSS variables để tránh phức tạp)

```css
/* styles/index.css */
@layer base {
  /* Light Mode - Softer backgrounds */
  body:not(.dark) {
    background-color: rgb(248, 249, 250); /* Base gray thay vì white */
  }
  
  /* Cards vẫn white để nổi bật */
  body:not(.dark) .bg-white {
    background-color: rgb(255, 255, 255) !important;
  }
  
  /* gray-50 → gray-100 (tối hơn) */
  body:not(.dark) .bg-gray-50 {
    background-color: rgb(243, 244, 246) !important;
  }
  
  /* Borders mềm hơn */
  body:not(.dark) .border-gray-200 {
    border-color: rgb(226, 232, 240) !important;
  }
}
```

**Approve để triển khai? 🎨**

