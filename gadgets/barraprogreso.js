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

