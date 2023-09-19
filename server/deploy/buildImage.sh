export SERVER_PORT=$(grep SERVER_PORT .env | xargs)
cd "$(dirname "$0")/.."
docker build --build-arg SERVER_PORT -t my-chat-server:latest .
cd -
