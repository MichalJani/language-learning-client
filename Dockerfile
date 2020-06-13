### Build and tag the Docker image
# docker build -t client:dev .

### Run the container once its build
#  docker run \
#     -it \
#     --rm \
#     -v ${PWD}:/app \
#     -v /app/node_modules \
#     -p 3001:3000 \
#     -e CHOKIDAR_USEPOLLING=true \
#     sample:dev




# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
