FROM node:22-alpine AS builder

WORKDIR /app

ENV NODE_OPTIONS="--max_old_space_size=4096"

ARG VITE_ENVIRONMENT_TYPE

ENV VITE_ENVIRONMENT_TYPE=$VITE_ENVIRONMENT_TYPE

ARG VITE_ENGINE_API

ENV VITE_ENGINE_API=$VITE_ENGINE_API

ARG VITE_STUDIO_API

ENV VITE_STUDIO_API=$VITE_STUDIO_API

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
