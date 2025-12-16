docker run -d -p 8080:80 nginx
Here’s a clean **README-style copy** of the text from the image, properly formatted so you can paste it directly into your repo 👇

---

# Docker Basic Commands – Quick Reference

## Container Listing

```bash
docker ps
```

👉 Shows **only running containers**

```bash
docker ps -a
```

👉 Lists **all containers** (running + stopped)

---

## Stop Containers

```bash
docker stop <container_id>
```

👉 Stops a **running container**

```bash
docker stop container1 container2 container3
```

👉 Stops **multiple containers at once**

---

## Remove Containers

```bash
docker rm <container_id>
```

👉 Removes a **stopped container**

```bash
docker rm -f <container_id>
```

👉 Force removes a container (running or stopped)

```bash
docker container prune
```

👉 Removes **all stopped containers**

---

## Remove Images

```bash
docker rmi <image_id>
```

👉 Removes a Docker image

```bash
docker rmi nginx
```

👉 Removes the **nginx image**

---

## Example

```bash
docker run nginx
docker rmi -f nginx
```

---

docker build -t for tag mern-backend
docker run -p 5000:5000 --name backend mern-backend
docker run -p 5000:5000 --name backend --env-file.env mern-backend

docker-compose up --build
docker-compose up --build -d
docker-compose down
docker compose log,
docker-compose logs, docker-compose logs backend/frontend
