
# Multiplication Console App

Esta es una aplicación para generar archivos .txt con tablas de multiplicar y también listarlas por consola.

Una vez que lo descarguen, recuerden ejecutar el siguiente comando para instalar los paquetes npm necesarios para que la app funcione correctamente:

```
npm install
```

Para crear los archivos .txt de las tablas, ingresar por consola, por ejemplo: 

```
node app --base 2 --hasta 8 
```
La base es el número a multiplicar y el comando "hasta" (opcional, default=10) indica justamente hasta qué número queremos que nos genere la tabla.

![Tabla del 2 hasta el 8](https://raw.githubusercontent.com/CarolinaRamon/multiplicar-node/main/assets/ejemplo-archivo.png "Ejemplo de archivo creado")

Para crear los archivos y, además, listar las tablas en consola, se debe agregar el comando "listar" (opcional, default=false), por ejemplo: 

```
node app --base 8 --hasta 15 --listar
```

![Comando listar en la consola](https://raw.githubusercontent.com/CarolinaRamon/multiplicar-node/main/assets/ejemplo-consola.png "Ejemplo de tabla en consola")

También podemos ver el menú ingresando:

```
node app --help
```

```
Options:
      --help     Show help                                                  [boolean]
      --version  Show version number                                        [boolean]
  -b, --base     Es la base de la tabla de multiplicar.                     [number] [required]
  -h, --hasta    Es el número hasta donde llega la tabla de multiplicar.    [number] [default: 10]
  -l, --listar   Muestra la tabla de multiplicar en consola.                [boolean] [default: false]
```

## PAQUETES NPM UTILIZADOS:
- yargs
- colors

## Otras características de la Aplicación:
- Se valida que el argumento "base" ingresado sea un número. 
- Colores en consola.
- Alias de comandos:

```
node app --b 8 --h 15 --l
```

