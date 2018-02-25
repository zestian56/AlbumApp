# AlbumAPP
App de música realizada para el semillero de almundo.com

#Requisitos
create-react-native app
 para instalar ejecutar:
 npm install -g create-react-native-app

 #Como correr el proyecto
 Para correr el proyecto solo es necesario ejecutar el siguiente comando:
 npm start

 Y escanear el qr atraves de Exo en un dispositivo Android


 #Como se realizó

 -Inicialmente se planteo como seria el bosquejo de la pantalla y la temática
 -Se instalaron los paquetes a utilizar a traves de npm, para este caso axio ( para hacer requests),y eslint.
 -Se realizó el componente Header como un componente stateless que se utilizara en la parte superior de la pantalla.
 -Se añadió el componente a App.js , se añadieron los estilos y se procedió a crear el componente AlbumList.js como un componente de react.
 -En este compnente se realiza una request get a una api rest de rallycoding para obtener una lista de albumes y su información para despues mostrarlos en pantalla con el componente ALbumDetail
 -En el componente Album detail se tenia pensado usar una card, por lo que se creo este componente, y el componente CardSection utilizando estilos hasta que quedara a gusto.
 -ADemas de que se utilizo un Boton y un textInput
 -UNa vez obtenido esos componentes genericos, se finalizo el componente album detail con su estilo para que sea utilizado en cada uno de los albums indiviadules.
 - Se añadio una scroll view en app.js con propiedad flex de 1, y width 0 para que ocupe todo lo que sobra de la pantalla.
