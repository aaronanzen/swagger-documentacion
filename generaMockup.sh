#!/bin/bash
#AUTOR:Ivan Gaspar
#Contacto: igaspar@anzen.com.mx

LC_ALL=C
 
if [ $# == 3 ]; then
    echo "Your command line contains $# arguments"
else
    echo "Sintaxis"
    echo "   ./generaMockup.sh nombreProyecto nombreSwagger.json puerto"
    echo "Ejemplo"
    echo "   ./generaMockup.sh petstore swagger.json 8080"
    echo "   nombreProyecto      petstore"
    echo "   nombreSwagger.json  swagger.json"
    echo "   puerto              8080"
    exit
fi

if [[ "$1" =~ [^a-z0-9_] ]]
then
   echo "No puedes usar letras mayusculas en [$1]"
   exit
else
   echo "nombreProyecto [$1] OK"
fi

java -jar swagger-codegen-cli.jar generate -i $2 -l nodejs-server -o mockup/$1
cp base/Dockerfile mockup
sed -i -e "s/PROJECT/$1/g" mockup/Dockerfile
sed -i -e "s/8080/$3/g" mockup/Dockerfile
sed -i -e "s/8080/$3/g" mockup/$1/index.js
cd mockup

docker stop  $(docker ps -a -q)
docker rm  $(docker ps -a -q)


docker build -t mockup_anzen/$1 .
rm Dockerfile
docker run -p 8080:8080 -d mockup_anzen/apicorebancariomock

echo "========================================================="
echo "==  docker run -p $3:$3 -d mockup_anzen/$1  =="
echo "========================================================="
echo "==  http://52.34.132.4:$3/docs/                       =="
echo "========================================================="
