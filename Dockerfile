# Step 1

FROM ubuntu as blah


RUN apt-get update

RUN apt-get -y install git

#RUN rm /fe_ui

RUN git clone https://github.com/dharanisubramaniam/fe_ui.git

FROM node:10-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY --from=blah /fe_ui/package.json .

#WORKDIR /fe_ui

RUN npm install

COPY --from=blah /fe_ui .

RUN npm run build



# Stage 2

FROM nginx:1.17.1-alpine

#COPY --from=build-step /app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*


COPY  --from=build-step /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]