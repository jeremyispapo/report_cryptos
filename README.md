# Reporte de precios de criptomonedas con JavaScript
El programa obtiene los datos de [Pancake API](https://api.pancakeswap.info/api/v2/pairs) y muestras en consola el precio de la criptomoneda, el nombre y sus respectivos símbolos

# Requisitos de ejecución
- **Node js (version 16 o superior)**
- **Conexion estable a internet**

# Proceso de ejecución
Realizamos los siguientes pasos:
1. Clonamos el repositorio
2. Abrimos la terminal
3. Nos ubicamos en la carpeta mediante la terminal
4. Ejecutar el siguiente comando
	> `npm install`  
5. Luego ejecutamos este otro
	> `npm run start`
# Funcinamiento
1. El programa obtiene los datos de la API
2. Los guarda en 2 arreglos en el cual usaremos uno para comparar
3. Cada 5 segundos el programa vuelve a consultar los datos a la API
4. El programa guarda la nueva data en uno de los arreglos creados
5. Compara cada valor entre ellos
6. Si son identicos, no sucederá nada. Pero si son diferentes indica que los valores de API se han actualizado
7. Muestra en consola los nuevos cambios y la hora de aquella actualización
   ![Reporte de las criptomonedas](/src/img/report_img.png "Imagen del reporte de criptomonedas")