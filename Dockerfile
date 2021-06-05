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

RUN mkdir -p /var/www/oerrors.com/public_html

RUN touch /etc/nginx/sites-available/oerrors.com.conf

COPY --from=blah /fe_ui/nginx /etc/nginx/sites-available

RUN nginx -t -c /etc/nginx/sites-available/oerrors.com.conf

RUN ln -s /etc/nginx/sites-available/oerrors.com.conf /etc/nginx/sites-enabled/oerrors.com.conf

RUN systemctl reload nginx

RUN systemctl status nginx

WORKDIR /var/www/oerrors.com/public_html

RUN rm -rf ./*


COPY  --from=build-step /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
