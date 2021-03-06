FROM mhart/alpine-node:12.16.1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --quiet

COPY . .

EXPOSE 8080

CMD ["node", "./src/index.js"] 