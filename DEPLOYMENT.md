# 🚀 Hướng dẫn Deployment & Git Management

## 📋 MỤC LỤC
1. [Disable Auto-Deploy Vercel](#1-disable-auto-deploy-vercel)
2. [Deploy Manual](#2-deploy-manual)
3. [Quản lý Multiple Git Accounts](#3-quản-lý-multiple-git-accounts)

---

## 1️⃣ DISABLE AUTO-DEPLOY VERCEL

### Cách 1: Qua Vercel Dashboard (Khuyến nghị)

1. **Vào project settings:**
   ```
   https://vercel.com/newdanangs-projects/xedichvu/settings/git
   ```

2. **Tìm section "Git"**

3. **Tắt "Automatic Deployments":**
   - Bỏ tick ô: **"Automatically deploy production branch"**
   - Hoặc set **"Ignored Build Step"** để skip auto-build

4. **Thêm Ignored Build Step (Nâng cao):**
   - Vào: **Settings → Git → Ignored Build Step**
   - Thêm command: `git diff HEAD^ HEAD --quiet .`
   - Hoặc: `exit 1` (để luôn skip)

### Cách 2: Dùng vercel.json

Tạo file `vercel.json` trong project:

```json
{
  "git": {
    "deploymentEnabled": {
      "main": false,
      "master": false
    }
  }
}
```

---

## 2️⃣ DEPLOY MANUAL

### Option A: Dùng Vercel CLI (Khuyến nghị)

```bash
# Bước 1: Build local để test (QUAN TRỌNG!)
npm run build

# Nếu build thành công:

# Bước 2: Deploy
vercel --prod

# Hoặc deploy preview trước:
vercel        # Deploy preview
vercel --prod # Khi preview OK, promote lên production
```

### Option B: Qua Vercel Dashboard

1. **Push code lên GitHub:**
   ```bash
   git push origin master
   ```

2. **Vào Vercel Dashboard:**
   ```
   https://vercel.com/newdanangs-projects/xedichvu
   ```

3. **Click "Deployments" tab**

4. **Click "Deploy" button** (3 chấm) → **"Redeploy"**

### ⚡ Workflow Được Đề Xuất:

```bash
# 1. Code xong
git add .
git commit -m "feat: your feature"

# 2. Build local để test
npm run build

# 3. Nếu build OK, push lên GitHub
git push origin master

# 4. Deploy manual khi sẵn sàng
vercel --prod
```

**Lợi ích:**
- ✅ Tiết kiệm 100 builds/month của Vercel
- ✅ Kiểm soát được khi nào deploy
- ✅ Test local trước → tránh lỗi production

---

## 3️⃣ QUẢN LÝ MULTIPLE GIT ACCOUNTS

### A. Config Git Accounts (Per Repository)

Mỗi repo có thể dùng account riêng:

```bash
# Vào project directory
cd D:\XeDichVu\startup-demo

# Set account riêng cho repo này
git config user.name "Your Work Name"
git config user.email "work@example.com"

# Check config
git config user.name
git config user.email
```

### B. Global vs Local Config

```bash
# Global (tất cả repos)
git config --global user.name "Default Name"
git config --global user.email "default@email.com"

# Local (chỉ repo hiện tại)
git config user.name "Project Specific Name"
git config user.email "project@email.com"

# Xem tất cả config
git config --list --show-origin
```

### C. Dùng Git Credential Manager (Windows)

**Cách 1: Dùng nhiều credentials**

```bash
# Xóa credential cũ
git credential-manager erase
# Hoặc
cmdkey /delete:git:https://github.com

# Lần push tiếp theo sẽ hỏi lại username/password
git push origin master
```

**Cách 2: SSH Keys (Khuyến nghị)**

```bash
# 1. Tạo SSH key cho từng account
ssh-keygen -t ed25519 -C "work@example.com" -f ~/.ssh/id_ed25519_work
ssh-keygen -t ed25519 -C "personal@gmail.com" -f ~/.ssh/id_ed25519_personal

# 2. Thêm vào ssh-agent
ssh-add ~/.ssh/id_ed25519_work
ssh-add ~/.ssh/id_ed25519_personal

# 3. Tạo ~/.ssh/config
# Host github-work
#   HostName github.com
#   User git
#   IdentityFile ~/.ssh/id_ed25519_work
#
# Host github-personal
#   HostName github.com
#   User git
#   IdentityFile ~/.ssh/id_ed25519_personal

# 4. Thay đổi remote URL
git remote set-url origin git@github-work:vynt2103/xedichvu.git
```

### D. Quick Switch Script (PowerShell)

Tạo file `switch-git-account.ps1`:

```powershell
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("work","personal")]
    [string]$Account
)

if ($Account -eq "work") {
    git config user.name "Work Name"
    git config user.email "work@company.com"
    Write-Host "✅ Switched to WORK account" -ForegroundColor Green
} else {
    git config user.name "Personal Name"
    git config user.email "personal@gmail.com"
    Write-Host "✅ Switched to PERSONAL account" -ForegroundColor Green
}

# Show current config
Write-Host "`nCurrent Git Config:" -ForegroundColor Cyan
git config user.name
git config user.email
```

**Sử dụng:**
```powershell
.\switch-git-account.ps1 -Account work
.\switch-git-account.ps1 -Account personal
```

### E. Check Current Account

```bash
# Xem account hiện tại
git config user.name
git config user.email

# Xem remote
git remote -v

# Xem credentials đang dùng
git config credential.helper
```

---

## 🎯 BEST PRACTICES

### 1. Build Local Trước Khi Push

```bash
# Luôn chạy trước khi commit
npm run build

# Nếu có lỗi, fix rồi mới commit
```

### 2. Gitignore cho Build Artifacts

File `.gitignore` nên có:
```
.next/
.vercel/
node_modules/
.env*.local
```

### 3. Vercel Environment Variables

Nếu có secrets, set qua Vercel Dashboard:
```
Settings → Environment Variables
```

Không commit `.env` files!

### 4. Deployment Checklist

- [ ] `npm run build` thành công local
- [ ] Test trên localhost:3000
- [ ] Commit với message rõ ràng
- [ ] Push lên GitHub
- [ ] Deploy manual qua Vercel CLI
- [ ] Test production URL
- [ ] Rollback nếu có lỗi

---

## 🔧 TROUBLESHOOTING

### Build Quota Hết (>100 builds/month)

**Giải pháp:**
1. Upgrade plan Vercel (nếu cần)
2. Hoặc deploy từ account khác
3. Hoặc dùng Netlify/Railway thay thế

### Git Push Bị Reject

```bash
# Force push (cẩn thận!)
git push -f origin master

# Hoặc pull rồi merge
git pull origin master --rebase
git push origin master
```

### Vercel Deploy Thất Bại

```bash
# Xem logs
vercel logs

# Hoặc deploy với verbose
vercel --prod --debug
```

---

## 📞 LIÊN HỆ

Nếu gặp vấn đề, check:
- GitHub Issues
- Vercel Documentation
- Stack Overflow

---

**Created:** 2025-01-28
**Last Updated:** 2025-01-28

