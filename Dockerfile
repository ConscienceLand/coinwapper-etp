FROM node

# Set the work directory
RUN mkdir -p /var/www/app
WORKDIR /var/www/app

# Add package.json and install dependencies
COPY package.json ./
RUN npm i --production

# Install forever globally
RUN npm i -g forever

# Add application files
COPY . /var/www/app

EXPOSE 8090

CMD ["forever", "--minUptime", "100", "--spinSleepTime", "10", "index.js"]
