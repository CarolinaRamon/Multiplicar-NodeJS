
## Multiplicar Console App

Esta es una aplicación para generar archivos .txt con tablas de multiplicar y también listarlas por consola si se desea.

Una vez que lo descarguen, recuerden ejecutar el siguiente comando para instalar los paquetes npm necesarios para  para que la app funcione correctamente:

```
npm install
```

Luego, para listar las tablas ingresar por consola, por ejemplo: 

```
node app listar --limite 5 --base 3
```
La base es el número a multiplicar y el límite es hasta qué número queremos que nos genere la tabla:

![Comando listar en la consola](https://raw.githubusercontent.com/CarolinaRamon/multiplicar-node/main/assets/listar-consola.jpg "Ejemplo de tabla en consola")

Para crear los archivos .txt de las tablas ingresar por consola, por ejemplo: 

```
node app crear --limite 4 --base 7
```

![Tabla del 7 - hasta el 4](https://raw.githubusercontent.com/CarolinaRamon/multiplicar-node/main/assets/ejemplo-tabla.jpg "Ejemplo de archivo creado")

PAQUETES NPM UTILIZADOS:
- yargs
- colors

