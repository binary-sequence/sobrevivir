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

// Clase Animacion. Encargada de gestionar las operaciones de una animación.
function Animacion(imagenRejilla, anchoRejilla, alto, sprites) {
 // Propiedades.
 this.rejilla = imagenRejilla;
 this.anchoRejilla = anchoRejilla; // ancho de cada sprite.
 this.alto = alto;
 this.sprites = sprites; // Numero de sprites.
 this.indice = 0; // 0 = STOP
 this.x = 0; this.y = 0;

 // Métodos.
 this.avanzar = function() {
  this.indice++;

  if (this.indice > this.sprites) this.indice = 0;
 };

 this.retroceder = function() {
  this.indice--;

  if (this.indice < 0) this.indice = this.sprites;
 };

 this.actualizar = function() {
  if (this.indice != 0) {
   screen.drawImage(this.rejilla, this.anchoRejilla*this.indice, 0, this.anchoRejilla, this.alto, this.x, this.y, this.anchoRejilla, this.alto);
  }
 };
}

