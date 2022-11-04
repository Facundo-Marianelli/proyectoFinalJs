#Documentación Master English , Coder-40260

#Tabla de contenidos
1. [Introduccion] (#Introducción)
2. [Instalacion] (#Instalación)
3. [Correr_el_proyecto] (#run)
4. [Sugerencias] (#sugerencias)
5. [Frameworks_y_librerias] (#librerias)
6. [Equipo_de_trabajo] (#team) 

##Introduccón

El objetivo principal de este proyecto es la creacion de una pagina web en la que se demuestren todos los contenidos aprendidos durante el curso de Javascript, es un sitio Institucional donde se podrán cargar cursos, crear Alumno y obtener informacion sobre los servicios que brinda el sitio.
También habra opciones de cotizaciones y formas de dejar el contacto para futuros contactos.

##Instalación

#Requisitos:

Se requerira tener:
1. Navegador.
2. Git para obtener el repositorio

#Pasos: 

A)si desea descargar todos los archivos del Curso con sus entregables que fui haciendo y pruebas:

1--> abrir terminal del SO o git Bash y ubicarse en la carpeta destino donde guardaras los archivos de este proyecto y luego escribir el        siguiente  comando:
    git clone https://github.com/Facundo-Marianelli/coderhousejs.git

2--> espere un poco y obtendra todo el repositorio en el directorio donde corrio el comando. 
el proyecto final se ubica en este directorio: /coderhouse/proyectoFInalJSV2

3--> abra el index.html donde obtendra la pagina inicial del proyecto


##Run

Para correr el proyecto debe ubicarse en la ubicacion donde importo el proyecto y correr el "index.html" a traves del SO que lo llevara a abrir el navegador o directamente desde el editor de texto.

Click derecho y abrir con su navegador preferido al archivo "Index.html"

#Aspectos Tecnicos y requerimentos de entidades a tener en cuenta a la hora de usar el proyecto y evitar Alertas de erorr a la hora de crear un Alumno/Curso

*Servicio* --> los servicios dentro del sitio estan guardados dentro de un JSON ya que son datos que son estaticos por el momento solo se ofrece los servicios guardados en la carpeta data. También se guarda en un JSON para demostrar el uso de fetch en un JSON.

*Curso* --> los Cursos son un Objeto en el que se debe ingresar si o si para la creacion del mismo sus atributos: (nomnbre,nivel,idioma,profesor,precio) con los niveles asociados en el JSON

*Alumno* --> los Alumnos son un Objeto en el que se debe ingresar si o si para la creacion del mismo sus atributos: (nomnbre,edad,email,idiomas,nivel,sexo) respetando sus tipos de datos, solo aceptamos alumnos mayores a 5 años y los niveles asociados en el JSON

*Cotizar.HTML*--> se completaría una vez obtenido el back o aprendido React para poder utilizar un envio de correo y mandar la cotizacion al equipo correspondiente.

##Usos:

--->Se podrán crear cursos, alumnos y filtrar los mismos por distintas condiciones.
--->Se podrá dejar el contacto a traves de la seccion: contactos.html
--->podra observar los distintos servicios ofrecidos por el sitio.
---> podra dejar su contacto para futuras cotizaciones ( aun no funciona la seccion de envio de  correo ya que necesito back o react para el uso de la misma)


#Contactos

al hacer click sobre el boton "Dejanos tu contacto!" usted podrá ingresar su correo el cual se guardara en nuestra sistema y luego sera contactado a complementar con el back: una vez enviado el correo se guardaria en una base de datos.

#Cotizar

Al completar el formulario y completar los datos usted podrá enviar un mensaje al equipo de cotizaciones la cual analizara el caso y lo contactara via correo dentro de las 48hs.

##sugerencias

Para participar del proyecto / sugerencias, enviar correo a:

facumarianelli@gmail.com

##librerias

Para la implementacon del proyecto se uso:

1. Sweet Alert para el envio de alertas.
2. Javascript, HTML, CSS , 
3. Cloudinary para bajar las imagenes

###team

Integrantes del proyecto:

Facundo Marianelli



