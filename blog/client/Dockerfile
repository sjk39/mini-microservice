FROM node:alpine

# Deals with create-react-app docker bug
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]