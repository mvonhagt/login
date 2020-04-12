FROM node:10.16

# Create the directory in image
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available
COPY package*.json /usr/src/app/

RUN npm install

# Copy all the files from host source to image source  
COPY . /usr/src/app/

# Expose the running port
EXPOSE 4200

# same as ng serve  
CMD [ "npm", "start"]