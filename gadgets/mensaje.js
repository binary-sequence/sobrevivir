/*

Copyright 2012 Sergio Lindo

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

// Clase Mensaje. Implementa un mensaje para mostar al usuario en canvas.
function Mensaje(texto, colorTexto, colorFondo) {
 // Propiedades.
 this.x = 0; this.y = 0; // Coordenadas en el canvas de la esquina superior izquierda.
 this.texto = texto;
 this.color = colorTexto;
 this.fondo = colorFondo;

 // Métodos.
 this.actualizar = function() { // Dibujar mensaje en pantalla.
  // Fondo.
  if (this.fondo != null) {
   screen.fillStyle = this.fondo;
   for (i = 0, x = this.x; i < this.texto.length; i++, x+=15) {
    screen.fillRect(x, this.y, 16, 27);
   }
  }

  // Texto.
  screen.font = "bold 22px verdana";
  screen.fillStyle = this.color;
  screen.textBaseline = 'top';
  screen.fillText(this.texto, this.x, this.y);
 };
}

