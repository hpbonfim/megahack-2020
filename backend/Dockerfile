FROM node:12

# create a workdir folder
WORKDIR /backend

# install app dependencies
COPY package*.json ./

# build the code
RUN npm ci --only=production

# Copy all files to workdir
COPY . .

# inject entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# start the app 
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
