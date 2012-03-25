/*

Copyright 2012 Sergio Lindo
This file is part of Sobrevivir.

Sobrevivir is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Sobrevivir is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Sobrevivir.  If not, see <http://www.gnu.org/licenses/>.

*/

// Clase KeyboardListener. Encargada de recoger las pulsaciones del teclado.
function KeyboardListener() {
 // Propiedades.
 this.keychar = null; // Almacena la tecla pulsada o null si no hay tecla pulsada.

 this.getPressed = function () { // Encapsulamiento que hace de getter.
  return this.keychar;
 };

 this.kLeft = function () { // Útil para usar en condicional.
  return String.fromCharCode(37); // Carácter ASCII para la tecla de flecha izquierda.
 };
 this.kRight = function () { // Útil para usar en condicional.
  return String.fromCharCode(39); // Carácter ASCII para la tecla de flecha derecha.
 };

 // Métodos.
 this.listenKeydown = function (e) { // Método que debe responder al evento canvas:onkeydown para obtener la tecla pulsada.
  var keynum;

  if(window.event) keynum = e.keyCode; // IE8 and earlier.
  else if(e.which) keynum = e.which; // IE9/Firefox/Chrome/Opera/Safari.

  this.keychar = String.fromCharCode(keynum);

  return true;
 };

 this.listenKeyup = function (e) { // Método que debe responder al evento canvas:onkeyup para liberar la tecla pulsada.
  this.keychar = null;
  return true;
 };
}

// Clase BarraProgeso. Encargada de implementar una barra de pogreso en canvas.
function BarraProgeso(color) {
 // Propiedades.
 this.x = 0; this.y = 0; // Coordenadas en el canvas de la esquina superior izquierda.
 this.color = color;
 this.valor = 0; // Max = 100px = 100%

 // Métodos.
 this.actualizar = function() { // Dibujar la barra de progreso en pantalla. 100*10.
  // Caja.
  screen.moveTo(this.x, this.y); // Inicio de caja.
  screen.lineTo(this.x+108, this.y); // Superior.
  screen.lineTo(this.x+108, this.y+18); // Derecha.
  screen.lineTo(this.x, this.y+18); // Inferior.
  screen.lineTo(this.x, this.y); // Izquierda.

  // Contenido.
  for (i = 0; i < this.valor; i++) {
   screen.moveTo(this.x+4+i, this.y+4); // Inicio de contenido.
   screen.lineTo(this.x+4+i, this.y+14);
  }

  screen.strokeStyle = this.color;
  screen.stroke();
 };
}
