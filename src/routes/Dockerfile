# muliti stage build  base is as veriable

FROM node:20-alpine3.20 AS base


WORKDIR /app


FROM base AS bulider
COPY  package*.json . 
RUN npm install
COPY . .
RUN npm run build


FROM base AS production 
WORKDIR /app
COPY  --from=bulider /app/dist ./dist
COPY  --from=bulider /app/package*.json ./
# COPY --from=bulider /app/tsconfig.json ./
RUN npm install --omit=dev


EXPOSE 8000