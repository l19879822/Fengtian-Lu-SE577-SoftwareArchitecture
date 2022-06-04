cd client 
docker run -d -p 8080:80 client & 
cd .. 
cd server 
docker run -d -p 3000:3000 server