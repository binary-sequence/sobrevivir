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

// Clase Menu. Encargada de gestionar las operaciones de menú.
function Menu() {
 // Propiedades.
 this.fondo = fondoMenu;
// this.animacion = new Animacion();

 // Métodos.
 this.actualizar = function() {
  screen.drawImage(this.fondo, 0, 0);
 };
}

