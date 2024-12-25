    FROM node:16-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 3307
    CMD ["node", "server.js"]