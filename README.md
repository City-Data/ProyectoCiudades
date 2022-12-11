# ProyectoCiudades

Proyecto realizado por:

Alejandro de León Fernández

Silvia Lorero Salor

David César Moro Nieto

Enlace al repositorio: https://github.com/City-Data/ProyectoCiudades

## Ejercicios teóricos

1. ¿Qué código de estado HTTP devolverá una operación que devuelve la lista de usuarios conectados cuando no haya ninguno? ¿Y qué información devolverá en la respuesta?

      The 204 (No Content) status code indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.

2. ¿Qué código de estado HTTP debe devolver una operación que registra un nuevo producto en la base de datos? ¿Debe devolver algo como respuesta?

      The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created. The primary resource created by the request is identified by either a Location header field in the response or, if no Location field is received, by the effective request URI. The 201 response payload typically describes and links to the resource(s) created.

3. ¿Qué código de estado HTTP y respuesta devolverá una operación que utiliza el método HTTP DELETE?

      The 501 (Not Implemented) status code indicates that the server does not support the functionality required to fulfill the request.

4. ¿Qué código de respuesta HTTP devolverá una operación que sirve para conocer la información de un producto determinado? ¿Y si no lo encuentra?

      The 200 (OK) status code indicates that the request has succeeded. Si no lo encuentra salta el código 404 (Not Found)

## Streams y MapBox

Define una colección de ciudades (almacenando nombre, provincia, habitantes y extensión para cada una de ellas) y realiza las siguientes operaciones utilizando Streams:
  1. ¿De cuántas provincias diferentes son las ciudades?
  2. ¿Cuántas ciudades hay?
  3. Calcula el número total de habitantes para una provincia determinada (introducida por el usuario, por ejemplo)
  4. Obtén una colección con los nombres de todas las ciudades
  5. Obtén una colección con los nombres de todas las provincias (sin repetir)
  6. ¿Todas las ciudades son de más de 50.000 habitantes?
  7. ¿Alguna ciudad de una provincia determinada (introducida por el usuario) tiene más de 10.000 habitantes?
