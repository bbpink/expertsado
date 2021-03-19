# expertsado
  expertsado.com web site ( https://expertsado.com )

```
sudo docker build -t sevensenses/expertsado ./docker/
sudo docker tag IMAGE_ID docker.pkg.github.com/bbpink/expertsado/expertsado:vX.Y.Z
sudo docker push docker.pkg.github.com/bbpink/expertsado/expertsado:vX.Y.Z

sudo docker run --rm -v $(pwd):/data -w /data node:alpine npm start
sudo docker run --rm -v $(pwd):/data sass sass ./src/scss/style.scss ./public/assets/css/style.css --style compressed
```
