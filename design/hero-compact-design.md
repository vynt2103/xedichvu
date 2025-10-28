# Hero Section - Compact Design (Fit in One Screen)

## 🎯 GOAL: Everything Visible in One Viewport

**Target Height**: ~750-850px (fits most screens)  
**Current Issue**: Too tall, requires scrolling  
**Solution**: Compact layout with side-by-side sections

---

## 🎨 COMPACT LAYOUT DESIGN

```
╔═══════════════════════════════════════════════════════════╗
║  ⭐ Verified                                         (top) ║
║                                                             ║
║        ┌──────────┐                                        ║
║        │          │     Đại Hiệp Travel                    ║
║        │  LOGO    │     ══════════════                     ║
║        │  200px   │     Chuyên xe du lịch miền Trung      ║
║        │          │                                        ║
║        └──────────┘     📍 ĐN, HA, Huế, QN, TK           ║
║                         🚗 Bao xe • ✈️ Sân bay            ║
║                                                             ║
║        [📞 Call]  [💬 Zalo]                               ║
║                                                             ║
╚═══════════════════════════════════════════════════════════╝
           ↑ FITS IN ~650px HEIGHT ↑
```

---

## 📐 NEW LAYOUT STRUCTURE

### **Split Layout** (Desktop)
```
┌─────────────────────────────────────────────┐
│  ⭐ Verified (top-right)                    │
│                                             │
│  ┌──────────┐    Đại Hiệp Travel           │
│  │          │    ══════════════            │
│  │  LOGO    │                               │
│  │  200px   │    Chuyên xe du lịch...      │
│  │          │                               │
│  └──────────┘    📍 Đà Nẵng, Hội An, Huế  │
│                  📍 Quảng Nam, Tam Kỳ       │
│                                             │
│                  🚗 Bao xe • ✈️ Sân bay    │
│                  💍 Cưới hỏi • 🎉 Tour     │
│                                             │
│                  [📞 Call] [💬 Zalo]       │
│                                             │
└─────────────────────────────────────────────┘
```

### **Mobile**: Stack vertically but compact
```
┌──────────────────┐
│  ⭐ Verified     │
│                  │
│   [LOGO 160px]   │
│                  │
│  Đại Hiệp Travel │
│                  │
│  Description...  │
│                  │
│  📍 Regions      │
│  🚗 Services     │
│                  │
│  [Call] [Zalo]   │
└──────────────────┘
```

---

## 📏 SIZING & SPACING

### Logo:
```
Desktop: 200px × 200px (down from 360px)
Mobile: 160px × 160px
Position: Left side (desktop), Center (mobile)
```

### Typography:
```
Name: 36px (down from 56px)
Description: 16px (down from 18px)
Regions/Services: Inline badges, 13px
```

### Spacing:
```
Section padding: py-16 (down from py-24)
Between elements: mb-4 to mb-6 (down from mb-8, mb-10)
Logo margin: mb-0 (inline with content on desktop)
```

### Height Target:
```
Desktop: ~600-700px total
Mobile: ~750-850px (stacked but compact)
```

---

## 🎨 COMPACT INFO DISPLAY

### Option A: Inline Badges (RECOMMENDED) ✅
```
Name & Description

📍 Đà Nẵng  📍 Hội An  📍 Huế  📍 Quảng Nam  📍 Tam Kỳ

🚗 Bao xe du lịch  ✈️ Sân bay  💍 Cưới hỏi  🎉 Tour

[Call] [Zalo]
```

**Pros:**
- Very compact
- One-line display for regions/services
- Easy to scan
- No boxes needed

### Option B: Side-by-Side Boxes (Alternative)
```
┌────────────────┐  ┌────────────────┐
│ KHU VỰC:       │  │ DỊCH VỤ:       │
│ 📍📍📍       │  │ 🚗✈️💍       │
└────────────────┘  └────────────────┘
```

**Pros:**
- Organized
- Clear sections
- Still compact

---

## 💻 DESKTOP LAYOUT (SPLIT)

```tsx
<section className="py-16"> {/* Reduced from py-24 */}
  <div className="max-w-6xl mx-auto">
    
    {/* Verified Badge - Absolute */}
    <div className="absolute top-6 right-6">⭐</div>
    
    <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">
      
      {/* Left: Logo */}
      <div>
        <Image 200x200 />
      </div>
      
      {/* Right: All Info */}
      <div>
        <h1>Name</h1>
        <p>Description</p>
        
        {/* Regions: Inline */}
        <div className="flex flex-wrap gap-2 mb-4">
          📍 badges...
        </div>
        
        {/* Services: Inline */}
        <div className="flex flex-wrap gap-2 mb-6">
          🚗 badges...
        </div>
        
        {/* CTAs */}
        <div className="flex gap-4">
          [Call] [Zalo]
        </div>
      </div>
      
    </div>
  </div>
</section>
```

---

## 📱 MOBILE LAYOUT (STACKED BUT COMPACT)

```tsx
<section className="py-12"> {/* Even less padding */}
  <div className="max-w-lg mx-auto">
    
    {/* Badge */}
    <div className="absolute top-4 right-4">⭐</div>
    
    {/* Logo: Center, smaller */}
    <div className="flex justify-center mb-6">
      <Image 160x160 />
    </div>
    
    {/* Name */}
    <h1 className="text-3xl mb-3">Name</h1>
    
    {/* Description */}
    <p className="text-sm mb-4">...</p>
    
    {/* Regions: Compact */}
    <div className="flex flex-wrap gap-2 mb-3">📍...</div>
    
    {/* Services: Compact */}
    <div className="flex flex-wrap gap-2 mb-6">🚗...</div>
    
    {/* CTAs: Full width */}
    <div className="flex flex-col gap-3">
      [Call]
      [Zalo]
    </div>
  </div>
</section>
```

---

## 🎨 VISUAL SPECS

### Colors:
```css
/* Keep simple, no heavy boxes */
Background: white
Badges: gray-100 with border
Text: gray-900 (name), gray-600 (desc)
Icons: blue-600
```

### Badges (Inline):
```tsx
<span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2.5 py-1 rounded-md text-xs font-medium">
  <MapPin size={12} />
  Đà Nẵng
</span>
```

### Buttons (Compact):
```tsx
// Smaller buttons: py-3 instead of py-4
<a className="px-6 py-3 text-base rounded-xl">
  Call
</a>
```

---

## 📊 HEIGHT BREAKDOWN

### Desktop Split Layout:
```
Padding top:        64px
Logo section:       200px (logo)
Content:           ~300px (name + desc + badges + buttons)
Padding bottom:     64px
─────────────────────────
TOTAL:            ~628px ✅ Fits in viewport!
```

### Mobile Stacked:
```
Padding top:        48px
Logo:              160px
Name:               40px
Description:        50px
Regions:            40px
Services:           40px
Buttons:           130px (2 buttons + gap)
Padding bottom:     48px
─────────────────────────
TOTAL:            ~556px ✅ Fits easily!
```

---

## ✅ IMPLEMENTATION CHECKLIST

- [ ] Reduce logo: 360px → 200px (desktop)
- [ ] Split layout on desktop (logo left, info right)
- [ ] Remove info boxes (use inline badges)
- [ ] Reduce spacing: mb-8 → mb-4, py-24 → py-16
- [ ] Smaller typography: 56px → 36px name
- [ ] Compact badges: text-sm → text-xs
- [ ] All regions inline (no box)
- [ ] All services inline (no box)
- [ ] Smaller buttons: py-4 → py-3

---

## 🎯 KEY CHANGES

| Element | Before | After |
|---------|--------|-------|
| **Logo** | 360px center | 200px left ✨ |
| **Layout** | Single column | Split (desktop) ✨ |
| **Name** | 56px | 36px ✨ |
| **Info** | Boxes | Inline badges ✨ |
| **Spacing** | py-24, mb-12 | py-16, mb-4 ✨ |
| **Height** | ~1200px | ~650px ✨ |
| **Fit** | Scrolling | One screen ✅ |

---

## 🚀 RESULT

**Before**: 
- Height: ~1200px
- Requires scrolling
- Too much white space

**After**:
- Height: ~650px (desktop), ~750px (mobile)
- ✅ Fits in one viewport
- ✅ Compact but readable
- ✅ Professional appearance
- ✅ All info visible immediately

---

**Design Status**: ✅ **APPROVED - COMPACT VERSION**  
**Next**: Implement split layout with inline badges  
**Goal**: Everything visible without scrolling

