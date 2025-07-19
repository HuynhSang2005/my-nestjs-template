# Stage 1: Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
# Cài đặt dependencies một cách nhất quán từ package-lock.json
RUN npm ci
COPY . .
# Build ứng dụng
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
# Chỉ cài đặt các dependencies cần cho production
RUN npm ci --omit=dev
# Sao chép code đã build từ stage trước
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main"]