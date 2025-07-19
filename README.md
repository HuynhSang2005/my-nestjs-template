<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo">
</p>

<h1 align="center">NestJS Template</h1>
<p align="center">
  Template NestJS đầy đủ cấu hình sẵn, sử dụng Prisma, Docker, Vitest, CI pipeline... phù hợp cho các dự án thực tế hoặc khởi tạo nhanh microservice.
</p>

---

## ⚙️ Tính năng nổi bật

- 🚀 NestJS cấu trúc module rõ ràng, mở rộng dễ dàng
- 🧩 Prisma ORM hỗ trợ PostgreSQL
- 🐳 Docker + Docker Compose
- 🧪 Vitest cho unit & e2e test
- 📦 Hỗ trợ GitHub Actions CI
- 🧹 Lint, format, commit hook với ESLint + Prettier + Husky
- ✅ Xác thực dữ liệu với `nestjs-zod` + `zod`

---

## 🗂 Cấu trúc thư mục

```

.
├── src/
│   ├── core/             # Cấu hình chung: config, database
│   ├── modules/          # Các feature module
│   └── main.ts           # File khởi tạo ứng dụng
├── prisma/               # Schema và migration của Prisma
├── test/                 # Kiểm thử e2e
├── .github/workflows     # CI pipeline
├── Dockerfile            # Docker build
├── docker-compose.yml    # Docker service
├── package.json          # Scripts và dependencies

````

---

## 🧠 Sơ đồ kiến trúc tổng quan

```mermaid
graph TD;
    Client-->|HTTP|Controller
    Controller-->|Call Service|Service
    Service-->|Query|PrismaService
    PrismaService-->|Connect|PostgreSQL[(Database)]
````

---

## 🔧 Hướng dẫn khởi chạy

```bash
# 1. Clone và setup môi trường
git clone https://github.com/your-org/your-repo.git
cd your-repo
cp .env.example .env

# 2. Cài đặt thư viện
npm install

# 3. Khởi tạo DB với Docker
docker-compose up -d
npx prisma migrate dev --name init
npx prisma generate

# 4. Chạy ứng dụng
npm run start:dev
```

---

## 🔬 Testing

| Loại kiểm thử    | Lệnh                 |
| ---------------- | -------------------- |
| Unit test        | `npm run test`       |
| E2E test         | `npm run test:e2e`   |
| Báo cáo coverage | `npm run test:cov`   |
| Watch test       | `npm run test:watch` |

---

## 🌐 API ví dụ

```http
GET /
→ 200 OK
{
  "message": "Hello World!"
}
```

---

## 🛠 Biến môi trường

File: `.env.example`

```dotenv
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```

---

## 🚀 Deploy với Docker

```bash
docker build -t my-nest-app .
docker run -p 3000:3000 my-nest-app
```

Hoặc dùng Compose:

```bash
docker-compose up --build
```

---

## 🧱 CI Pipeline (GitHub Actions)

Tự động chạy các bước:

* Kiểm tra mã nguồn
* Chạy lint
* Chạy test

File: `.github/workflows/ci.yml`

```yaml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
```

---

## 🧱 Sơ đồ CI Pipeline

```mermaid
flowchart TD
    A[Push/Pull Request] --> B[GitHub Action Trigger]
    B --> C[Install Node & Dependencies]
    C --> D[Run Linter]
    C --> E[Run Unit Tests]
```

---

## 🧑‍💻 Có thể sử dụng cho

Mẫu dự án này giúp bạn tiết kiệm thời gian cấu hình ban đầu và tập trung xây tính năng. Phù hợp cho:

* Các project backend với PostgreSQL
* Microservice triển khai nhanh
* Làm bài tập, học tập nâng cao

---

## 👥 Tác giả

* Nguyễn Huỳnh Sang – [GitHub](https://github.com/nguyenhuynhsang)

