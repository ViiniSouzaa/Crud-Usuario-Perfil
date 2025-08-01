# Etapa de build
FROM node:18 AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build --prod

# Etapa de execução
FROM nginx:stable-alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
EXPOSE 80