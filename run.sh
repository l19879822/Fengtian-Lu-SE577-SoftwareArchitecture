cd client 
docker run -d -p 8000:80 client & 
cd .. 
cd server 
docker run -d -p 3030:3000 server