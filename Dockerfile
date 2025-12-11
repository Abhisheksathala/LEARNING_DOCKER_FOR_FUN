# base image 
FROM node:20-alpine3.18  
# set the working directory 
WORKDIR /app
# copy packages json and lock jsaon 
COPY  package-lock.json .
COPY  package.json .
#  insatll dependancies
RUN npm install 

# copy the rest of the application code 
COPY . .
EXPOSE 3000

# start the applocation 
CMD [ "npm","start" ]