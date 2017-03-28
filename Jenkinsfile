#!groovy
node {
   
   
   // ------------------------------------
   // -- ETAPA: Compilardd
   // ------------------------------------
   stage 'Compilar'
   
   echo 'Configurando variables'
  
   
   echo 'Descargando código de SCM'
   sh 'rm -rf *'
   checkout scm
   sh 'docker -v'
   sh 'java -version'
   sh ' chmod 777 -R .'
   sh './generaMockup.sh apicorebancariomock  ApiCoreBancario.yaml 8080'
   
   // -- Compilando
   echo 'Compilando aplicación'
  
 //sh './generaMockup.sh apicorebancariomock ApiCoreBancario.yaml 8080'
 //sh  'docker run -p 8080:8080 -d mockup_anzen/apicorebancariomock'
 
   
   // ------------------------------------
   // -- ETAPA: Test
   // ------------------------------------
   stage 'Test'
   echo 'Ejecutando tests'
  
   
   // ------------------------------------
   // -- ETAPA: Instalar
   // ------------------------------------
   stage 'Instalar'
   echo 'Instala el paquete generado en el repositorio maven'

}
