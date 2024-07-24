FROM node:20

WORKDIR /var/www

COPY . /var/www

RUN npm install pm2 -g
RUN yarn --silent
RUN yarn build

CMD ["pm2-runtime", "ecosystem.config.cjs"]

EXPOSE 9090
