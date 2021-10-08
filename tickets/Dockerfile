FROM arm64v8/node:latest

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]